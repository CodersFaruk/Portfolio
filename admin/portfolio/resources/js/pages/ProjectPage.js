import React, {Component} from 'react';
import Menu from "../components/Menu";
import axios from "axios";
import Loading from "../components/Loading";
import SomethingWentWrong from "../components/SomethingWentWrong";
import {Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ReactQuill from "react-quill";

class ProjectPage extends Component {
    constructor(){
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataId:"",
            dltBtn:"Delete",
            addModal:false,
            addName:"",
            addDes:"",
            addFeature:"",
            addPreview:"",
            addFile1:"",
            addFile2:"",
        }
        this.deleteData=this.deleteData.bind(this);
        this.editCellFormat=this.editCellFormat.bind(this);

        this.addModalOpen=this.addModalOpen.bind(this);
        this.addModalClose=this.addModalClose.bind(this);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDes=this.onChangeDes.bind(this);
        this.onChangeFeatures=this.onChangeFeatures.bind(this);
        this.onChangePreview=this.onChangePreview.bind(this);
        this.onChangeFiles1=this.onChangeFiles1.bind(this);
        this.onChangeFiles2=this.onChangeFiles2.bind(this);
        this.addFormSubmit=this.addFormSubmit.bind(this);
    }


    componentDidMount() {
        axios.get('/projectList').then(response=>{
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
    onChangeName(event){
        this.setState({addName:event.target.value});
    }
    onChangeDes(event){
        this.setState({addDes:event.target.value});
    }
    onChangeFeatures(content, delta, source, editor){
        let htmlContent=editor.getHTML();
        this.setState({addFeature:htmlContent});
    }
    onChangePreview(event){
        this.setState({addPreview:event.target.value});
    }

    onChangeFiles1(event){
        this.setState({addFile1:event.target.files[0]});
    }
    onChangeFiles2(event){
        this.setState({addFile2:event.target.files[0]});
    }

    addFormSubmit(event){
        event.preventDefault(); // Form Submit without reloading

        let name=this.state.addName;
        let des=this.state.addDes;
        let features=this.state.addFeature;
        let preview=this.state.addPreview;
        let files1=this.state.addFile1;
        let files2=this.state.addFile2;

        let url="/addProject";

        let myFormData= new FormData();
        myFormData.append('name',name);
        myFormData.append('des',des);
        myFormData.append('features',features);
        myFormData.append('preview',preview);
        myFormData.append('files1',files1);
        myFormData.append('files2',files2);

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
            axios.post('/deleteProject', {id:this.state.rowDataId}).then((response)=>{
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
                <Menu title="Project">
                    <Loading/>
                </Menu>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu title="Project">
                    <SomethingWentWrong/>
                </Menu>
            )
        }
        else {
            const data=this.state.dataList;

            const columns = [
                {dataField: 'id', text: 'ID',sort: true},
                {dataField: 'project_img_one', text: 'Card Image', formatter:this.editCellFormat},
                {dataField: 'project_name', text: 'Project Name',sort: true},
                {dataField: 'project_short_des', text: 'Project Description',sort: true },
            ];

            const selectRow = {
                mode: 'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})

                }
            };

            return (
                <>
                    <Menu title="Project">
                        <Container className="py-5">
                            <h1 className="text-center mt-2"> Project List Information</h1>
                            <Row>
                                <button  onClick={this.deleteData} className="btn-red mb-5">{ReactHtmlParser(this.state.dltBtn)}</button>
                                <button onClick={this.addModalOpen} className="btn-red mb-5">Add New Project</button>
                                <Col md={12} sm={12} lg={12} className="m-0  p-0">
                                    <BootstrapTable bootstrap4 keyField='id' data={ data } columns={ columns } selectRow={ selectRow } pagination={ paginationFactory()} />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>

                    {/*React Bootstrap Modal Here*/}
                    <Modal  backdrop="static" scrollable size='lg' show={this.state.addModal} onHide={this.addModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title className="text-center w-100">Add New Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.addFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control onChange={this.onChangeName} type="text" placeholder="Enter Project Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Short Description</Form.Label>
                                    <Form.Control onChange={this.onChangeDes} as="textarea" rows={2} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Features</Form.Label>
                                    <ReactQuill onChange={this.onChangeFeatures} theme="snow" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Live Preview</Form.Label>
                                    <Form.Control onChange={this.onChangePreview}  type="text" placeholder="Enter Project Link" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Card Image</Form.Label>
                                    <Form.Control onChange={this.onChangeFiles1} type="file" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Project Details Image</Form.Label>
                                    <Form.Control onChange={this.onChangeFiles2} type="file" />
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
export default ProjectPage;
