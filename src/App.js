import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContentLayout from './ContentLayout';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import Table from './Table';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeButton:"zero-state",
      searchKeyword:'',
      rows:[]
    };
  }


  // setSearchKeyword= async (searchKeyword)=>{

  //   let url =
  //   'http://0.0.0.0:8000/event/models/'+searchKeyword +'/'
      
  //     fetch(url)
  //     .then((result) => result.json())
  //     .then((result) => {
  //       this.setState(result)
  //       console.log(this.state)
  //     })
  // }

  changeButton =(activeButton)=>{
    this.setState({activeButton:activeButton});
  }
  createData(date, title, summary, attachment) {
    return { date, title, summary, attachment };
  }
  
  setSearchKeyword=async (searchKeyword,activeButton)=>{

    let url =
      'http://0.0.0.0:8000/event/models/'+searchKeyword +'/'
        
        fetch(url)
        .then((result) => result.json())
        .then((data) => {
          console.log(data)
          var rows=[];
          console.log(data.data.length)
          for(var i=0;i<data.data.length;i++){
            var d = this.createData(data.data[i].date,data.data[i].title,data.data[i].summary,<a href={data.data[i].attachment} target="_blank">Download pdf</a>);
            rows.push(d);
          }
          this.setState({searchKeyword:searchKeyword,activeButton:activeButton,rows:rows});
          console.log(this.state)
        })
  }


  render() {
    return (
      <Container fluid className="MainPage">
        <Row className="top-bar">
          <Col className="logo-bar" md={{span: 2}}><img alt='logo' src='logo192.png'  height="100%"></img></Col>
          <Col className="search-bar" md={{span: 10}}><SearchBar setSearchKeyword={this.setSearchKeyword}/></Col>
        </Row>
        <Row className="bottom-layout">
          <Col className="side-bar-layout" md={{span: 2}}><SideBar  changeButton={this.changeButton}/></Col>
          <Col className="content-layout" md={{span: 10}}>
          <ContentLayout contentType={this.state.activeButton} searchkeyword={this.state.searchKeyword} defaultRows={this.state.rows}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App