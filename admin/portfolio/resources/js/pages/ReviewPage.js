import React, {Component} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';
import Loading from "../components/Loading";
import {Col, Row, Container, Spinner, Modal, Button, Form} from "react-bootstrap";
import SomethingWentWrong from "../components/SomethingWentWrong";
import ReactHtmlParser from 'react-html-parser';

class ReviewPage extends Component {
    constructor(){
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataId:"",
            dltBtn:"Delete",
            addModal:false,
            addTitle:"",
            addDes:"",
            addFiles:"",
        }
        this.deleteData=this.deleteData.bind(this);
        this.editCellFormat=this.editCellFormat.bind(this);

        this.addModalOpen=this.addModalOpen.bind(this);
        this.addModalClose=this.addModalClose.bind(this);

        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeDes=this.onChangeDes.bind(this);
        this.onChangeFiles=this.onChangeFiles.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
    }


    componentDidMount() {
        axios.get('/reviewList').then(response=>{
            if(response.status===200){
                this.setState({
                    dataList:response.data,
                    isLoading:false,
                    isError:false,

                })
            }else {
                this.setState({ isLoading:false,isError:true})
            }

        }).catch(error=>{
            this.setState({ isLoading:false,isError:true})
        })
    }

    // Modal Open Close & function
    addModalOpen(){
        this.setState({addModal:true});
    }

    addModalClose(){
        this.setState({addModal:false});
    }


    // From Data Catch
    onChangeTitle(event){
        let title=event.target.value;
        this.setState({addTitle:title});
    }
    onChangeDes(event){
        let des=event.target.value;
        this.setState({addDes:des});
    }
    onChangeFiles(event){
        let files=event.target.files[0];
        this.setState({addFiles:files});
    }

    addFormSubmit(event){
        event.preventDefault(); // Form Submit without reloading

        let title=this.state.addTitle;
        let des=this.state.addDes;
        let files=this.state.addFiles;

        let url="/addReview";

        let myFormData= new FormData();
        myFormData.append('title',title);
        myFormData.append('des',des);
        myFormData.append('files',files);

        let config={
            headers:{'content-Type': 'multipart/form-data'}
        }

        axios.post(url,myFormData,config).then(response=>{
            if(response.data==1){
                this.addModalClose();
                this.componentDidMount();
            }

        }).catch(error=>{
            alert(error);
        })


    }


    deleteData(){

        let dltConfirmMsg=confirm("Are you sure you want to permanently remove this item?")
        if(dltConfirmMsg===true){
            this.setState({dltBtn:"<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>"})
            axios.post('/deleteReview', {id:this.state.rowDataId}).then((response)=>{
                if(response.data===1 && response.status===200){
                    this.setState({dltBtn:"Success"})
                    this.componentDidMount();

                    setTimeout(function(){
                        this.setState({dltBtn:"Delete"})
                    }.bind(this),1000)
                }else {
                    this.setState({dltBtn:"Failed"})
                    setTimeout(function(){
                        this.setState({dltBtn:"Delete"})
                    }.bind(this),1000)
                }


            }).catch((error)=>{
                this.setState({dltBtn:"Failed"})
                setTimeout(function(){
                    this.setState({dltBtn:"Delete"})
                }.bind(this),1000)

            })
        }
    }

    editCellFormat(cell){
        return(
            <img className="tableImg" src={cell}/>
        )
    }


    render() {
        if(this.state.isLoading==true) {
            return (
                <Menu title="Review">
                    <Loading/>
                </Menu>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu title="Review">
                    <SomethingWentWrong/>
                </Menu>
            )
        }
        else {
            const data=this.state.dataList;

            const columns = [
                {dataField: 'id', text: 'ID',sort: true},
                {dataField: 'client_img', text: 'Client Image', formatter:this.editCellFormat},
                {dataField: 'client_title', text: 'Client Title',sort: true},
                {dataField: 'client_des', text: 'Client Description',sort: true },
            ];

            const selectRow = {
                mode: 'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})

                }
            };

            return (
                <>
                    <Menu title="Review">
                        <Container className="py-5">
                            <h1 className="text-center mt-2"> Review List Information</h1>
                            <Row>
                                <button onClick={this.deleteData} className="btn-red mb-5">{ReactHtmlParser(this.state.dltBtn)}</button>
                                <button onClick={this.addModalOpen} className="btn-red mb-5">Add New Review</button>
                                <Col md={12} sm={12} lg={12} className="m-0  p-0">
                                    <BootstrapTable bootstrap4 keyField='id' data={ data } columns={ columns } selectRow={ selectRow } pagination={ paginationFactory()} />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>

                    {/*React Bootstrap Modal Here*/}
                    <Modal show={this.state.addModal} onHide={this.addModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center w-100">Add New Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Review Title</Form.Label>
                                    <Form.Control onChange={this.onChangeTitle} type="text" placeholder="Enter Review Title" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Review Description</Form.Label>
                                    <Form.Control onChange={this.onChangeDes} type="text" placeholder="Enter Review Description" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Review Image</Form.Label>
                                    <Form.Control onChange={this.onChangeFiles} type="file" />
                                </Form.Group>

                                <Modal.Footer>
                                    <Button variant="danger" onClick={this.addModalClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </>
            );
        }
    }
}

export default ReviewPage;
