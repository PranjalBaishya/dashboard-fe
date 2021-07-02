import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContentLayout from './ContentLayout';
import SideBar from './SideBar';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url =
      'http://0.0.0.0:8000/event/'
      
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log(result)
        this.setState({
          data: result,
        })
      })
  }

  render() {
     
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return (
      <Container fluid className="MainPage">
        <Row className="top-bar">
          <Col className="logo-bar" md={{span: 2}}><img alt='logo' src='logo192.png'  height="100%"></img></Col>
          <Col className="search-bar" md={{span: 10}}><h1>Search Bar!</h1></Col>
        </Row>
        <Row className="bottom-layout">
          <Col className="side-bar-layout" md={{span: 2}}><SideBar  changeButton={this.changeButton}/></Col>
          <Col className="content-layout" md={{span: 10}}><ul>{result}</ul></Col>
        </Row>
      </Container>
    )
  }
}

export default App