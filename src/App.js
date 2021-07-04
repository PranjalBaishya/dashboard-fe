import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container,Row,Col} from 'react-bootstrap';
import ContentLayout from './ContentLayout';
import SearchBar from './SearchBar';
import SideBar from './SideBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeButton:"zero-state",
      searchKeyword:'',
      rows:[]
    };
  }


  componentDidMount(searchKeyword, activeButton){

    let url =
    'http://0.0.0.0:8000/event/'
      
      fetch(url)
      .then((result) => result.json())
      .then((data) => {
        var rows=[];

        var start = 0;
        var end = 10;
        console.log('start: ', start, ' end: ', end)

        for(var i=start; i<end; i++){
          var d = this.createData(data.data[i].date,data.data[i].title,data.data[i].event_type,<a href={data.data[i].attachment} target="_blank">Download pdf</a>, data.data[i].category);
          rows.push(d);
        }
        console.log(rows)

        this.setState( {searchKeyword:searchKeyword, activeButton:activeButton, rows:rows} );
      })
  }

  changeButton =(activeButton)=>{
    this.setState({activeButton:activeButton});
  }

  createData(date, title, event_type, attachment, category) {
    return { date, title, event_type, attachment, category };
  }
  
  setSearchKeyword=async (searchKeyword,activeButton)=>{

    let url =
      'http://0.0.0.0:8000/event/models/'+searchKeyword +'/'
    console.log('search key: ', searchKeyword)
        
    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        var rows=[];

        for (var i=0; i<data.data.length; i++){
          var d = this.createData(data.data[i].date,
                                  data.data[i].title,
                                  data.data[i].event_type,
                                  <a href={data.data[i].attachment} target="_blank">Download pdf</a>,
                                  data.data[i].category);
          rows.push(d);
        }
        this.setState( {searchKeyword:searchKeyword, activeButton:activeButton, rows:rows} );
      })
  }


  render() {
    return (
      <Container fluid className="MainPage">
        <Row className="top-bar">
          <Col className="logo-bar" md={{span: 2}}><img alt='logo' src='dashboard.png'  height="150%" width="100%"></img></Col>
          <Col className="search-bar" md={{span: 10}} ><SearchBar setSearchKeyword={this.setSearchKeyword}/></Col>
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