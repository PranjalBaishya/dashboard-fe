import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContentLayout from './ContentLayout';
import SideBar from './SideBar';

class App extends Component {
  render() {
      const characters = [
        {
          date: 'date1',
          ppt_title: 'titile1',
          summary: 'sum1',
          attachment: 'att1'
        },
        {
          date: 'date2',
          ppt_title: 'titile2',
          summary: 'sum2',
          attachment: 'att2'
        },
        {
          date: 'date3',
          ppt_title: 'titile3',
          summary: 'sum3',
          attachment: 'att3'
        },
        {
          date: 'date4',
          ppt_title: 'titile4',
          summary: 'sum4',
          attachment: 'att4'
        },
      ]
      
    return (
      <Container fluid className="MainPage">
        <Row className="top-bar">
          <Col className="logo-bar" md={{span: 2}}><img alt='logo' src='logo192.png'  height="100%"></img></Col>
          <Col className="search-bar" md={{span: 10}}><h1>Search Bar!</h1></Col>
        </Row>
        <Row className="bottom-layout">
          <Col className="side-bar-layout" md={{span: 2}}><SideBar  changeButton={this.changeButton}/></Col>
          <Col className="content-layout" md={{span: 10}}><ContentLayout /></Col>
        </Row>
      </Container>
    )
  }
}

export default App