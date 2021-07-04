import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';

class SearchBar extends React.Component {
    
  validateAndSearch = (id,callback)=>{
    //you can add input validations here
    if(document.getElementById("keyword").value===''){
      alert("Enter a valid keyword!");
      return false;
    }
    callback(document.getElementById("keyword").value,"search-results");
  }
    Search = (id,callback)=>{
      callback(id,"search-results");
    }

    render() {
      return (
        <div>
           <form className='SearchForm'>
            <input className='SearchBox' type="text" placeholder="Search.." id='keyword'/>
            <button className='SubmitButton' onClick = {(e)=>{e.preventDefault();return this.validateAndSearch('keyword',this.props.setSearchKeyword)}}> <p style={{color:'#FFFFFF',font:"Roboto"}}>Submit</p></button>
            </form>
          <Dropdown className="dropdownbox">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Search option
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.ItemText style={{color:'#808080',font:"Roboto"}}>Category</Dropdown.ItemText>
              <Dropdown.Item onClick = {(e)=>{e.preventDefault();return this.Search('conference',this.props.setSearchKeyword)}}>conference</Dropdown.Item>
              <Dropdown.Item onClick = {(e)=>{e.preventDefault();return this.Search('meeting',this.props.setSearchKeyword)}}>meeting</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.ItemText style={{color:'#808080',font:"Roboto"}}>Event Type</Dropdown.ItemText>
              <Dropdown.Item onClick = {(e)=>{e.preventDefault();return this.Search('past',this.props.setSearchKeyword)}}>past</Dropdown.Item>
              <Dropdown.Item onClick = {(e)=>{e.preventDefault();return this.Search('upcoming',this.props.setSearchKeyword)}}>upcoming</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.ItemText style={{color:'#808080',font:"Roboto"}}>Sort</Dropdown.ItemText>
              <Dropdown.Item onClick = {(e)=>{e.preventDefault();return this.Search('sort_asc',this.props.setSearchKeyword)}}>sort_asc</Dropdown.Item>
              <Dropdown.Item onClick = {(e)=>{e.preventDefault();return this.Search('sort_dsc',this.props.setSearchKeyword)}}>sort_dsc</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
           
            </div>
      );
    }
}

export default SearchBar;