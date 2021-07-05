import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends React.Component {
    
  validateAndSearch = (id,callback)=>{
    //you can add input validations here
    if(document.getElementById("keyword").value==='meeting' || document.getElementById("keyword").value==='conference' || 
    document.getElementById("keyword").value==='past' || document.getElementById("keyword").value==='upcoming' || 
    document.getElementById("keyword").value==='sort_asc' || document.getElementById("keyword").value==='sort_dsc'){
      callback(document.getElementById("keyword").value,"search-results");
    }
    else{
      alert("Enter a valid keyword!");
      return false;
    }
    
  }
  Search = (id,callback)=>{
      callback(id,"search-results");
  }


    ac(value) {
      var tags = [ 
        "meeting",
        "conference",
        "upcoming",
        "past",
        "sort_asc",
        "sort_dsc"
          ];
      
          /*list of available options*/
         var n= tags.length; //length of datalist tags    
      
        document.getElementById('datalist').innerHTML = '';
         //setting datalist empty at the start of function
         //if we skip this step, same name will be repeated
           
         var l=value.length;
         //input query length
     for (var i = 0; i<n; i++) {
         if(((tags[i].toLowerCase()).indexOf(value.toLowerCase()))>-1)
         {
             //comparing if input string is existing in tags[i] string
  
             var node = document.createElement("option");
             var val = document.createTextNode(tags[i]);
              node.appendChild(val);
  
               document.getElementById("datalist").appendChild(node);
                   //creating and appending new elements in data list
             }
         }
     }
    
    render() {
      return (
        <div>
          <form className='SearchForm'>
            <input className='SearchBox' type="text" placeholder="add/select a value" id='keyword' list="datalist" onkeyup="ac(this.value)"/>
            <datalist id="datalist">
  
              <option value="meeting"></option>
              <option value="conference"></option>
              <option value="upcoming"></option>
              <option value="past"></option>
              <option value="sort_asc"></option>
              <option value="sort_dsc"></option>
            </datalist>
    
            <button className='SubmitButton' onClick = {(e)=>{e.preventDefault();return this.validateAndSearch('keyword',this.props.setSearchKeyword)}}> <p style={{color:'#FFFFFF',font:"Roboto"}}>Submit</p></button>

          </form>
        </div>
      );
    }
}

export default SearchBar;