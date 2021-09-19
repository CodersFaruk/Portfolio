import React, {Component} from 'react';
import Menu from "../components/Menu";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';
import Loading from "../components/Loading";
import {Col,Row,Container,Spinner} from "react-bootstrap";
import SomethingWentWrong from "../components/SomethingWentWrong";
import ReactHtmlParser from 'react-html-parser';

class CoursePage extends Component {
    constructor(){
        super();
        this.state={
            dataList:[],
            isLoading:true,
            isError:false,
            rowDataId:"",
            dltBtn:"Delete",
        }
        this.deleteData=this.deleteData.bind(this);
        this.editCellFormat=this.editCellFormat.bind(this);
    }


    componentDidMount() {
        axios.get('/courseList').then(response=>{
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

    deleteData(){

        let dltConfirmMsg=confirm("Are you sure you want to permanently remove this item?")
        if(dltConfirmMsg===true){
            this.setState({dltBtn:"<span class='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>"})
            axios.post('/deleteCourse', {id:this.state.rowDataId}).then((response)=>{
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
                <Menu title="Course">
                    <Loading/>
                </Menu>
            )
        }
        else if(this.state.isError==true){
            return (
                <Menu title="Course">
                    <SomethingWentWrong/>
                </Menu>
            )
        }
        else {
            const data=this.state.dataList;

            const columns = [
                {dataField: 'id', text: 'ID',sort: true},
                {dataField: 'course_img', text: 'Image', formatter:this.editCellFormat},
                {dataField: 'course_title', text: 'Course Title',sort: true},
                {dataField: 'course_des', text: 'Course Description',sort: true },
                {dataField: 'video_url', text: 'Video url'},
                {dataField: 'buy_link', text: 'Buy Link'},
            ];

            const selectRow = {
                mode: 'radio',
                onSelect:(row,isSelect,rowIndex)=>{
                    this.setState({rowDataId:row['id']})

                }
            };

            return (
                <>
                    <Menu title="Course">
                        <Container className="py-5">
                            <h1 className="text-center mt-2"> Course List Information</h1>
                            <Row>
                                <button  onClick={this.deleteData} className="btn-red mb-5">{ReactHtmlParser(this.state.dltBtn)}</button>
                                <Col md={12} sm={12} lg={12} className="m-0  p-0">
                                    <BootstrapTable bootstrap4 keyField='id' data={ data } columns={ columns } selectRow={ selectRow } pagination={ paginationFactory()} />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </>
            );
        }
    }
}

export default CoursePage;

