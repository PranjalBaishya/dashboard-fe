import './App.css';
import React from 'react';
import Table from './Table.jsx';

class ContentLayout extends React.Component {
    constructor() {
        super();
        this.state = {contentType: "Dashboard"};
    }

    textFunction = (textNumber)=>{
      var text;
      if (textNumber===0){
        text = "Search for presentations.";
      }else if (textNumber===1){
        text = "Sorry, no analytics to display at the moment.";
      }else if (textNumber===2){
        text = "Sorry, no events to display at the moment.";
      }else if (textNumber===3){
        text = "Sorry, no bookmarks to display at the moment.";
      }else if (textNumber===4){
        text = "Website: Weyerhaeuser";
      }
      return (<div style={{height:'100%'}}>
                <div style={{height:'30%'}}><br/><br/><br/><br/>
                    <p style={{width: '48%',
                        height: '80%',
                        marginLeft:'20%',
                        textAlign: 'center',
                        font: 'Bold 30px/35px Roboto',
                        letterSpacing: '0px',
                        color: '#7B8C92'}}>{text}</p>
                </div>
                <div style={{height:'40%'}}>
                  <img alt="zero-state-img" src="zero-state.png" height= "100%" style={{marginLeft:'35%', marginTop:'5%'}}/>
                </div>
              </div>
              );
    }

    func = ()=>{
      var content_type = this.props.contentType
      if(content_type === "search-results" || content_type === undefined || content_type === "Dashboard"){
        return (<div style={{height:'100%'}}>
                  <div style={{height:'80%'}}>
                    <Table searchkeyword={this.props.searchkeyword} defaultRows={this.props.defaultRows} />
                  </div> 
               </div>);
      }
      else if(this.props.contentType==="Analytics"){
        return this.textFunction(1);
      }
      else if(this.props.contentType==="Calendar"){
        return this.textFunction(2);
      }
      else if(this.props.contentType==="Bookmarks"){
        return this.textFunction(3);
      }
      else if(this.props.contentType==="About"){
        return (<div style={{height:'100%'}}>
        <div style={{height:'30%'}}><br/><br/><br/><br/>
            <p style={{width: '48%',
                height: '80%',
                marginLeft:'20%',
                textAlign: 'center',
                font: 'Bold 30px/35px Roboto',
                letterSpacing: '0px',
                color: '#FFFFFF'}}>About <a href="http://investor.weyerhaeuser.com/events-and-presentations">Weyerhaeuser</a>:
                <br />For more than a century, we’ve been growing trees and making forest products that improve lives in fundamental ways. We manage our millions of acres of forests on a continuous and fully sustainable cycle. We are responsible stewards of our land for multiple uses, including recreation, conservation, economic development and different forms of renewable energy. And the wood products we make are used to build homes where families are sheltered and raised. 

We’re proud of what we do and how we do it, and we invite you to learn more.</p>
        </div>
      </div>);
      }
      else{
        return this.textFunction(0);
      }
  }

  render(){
    return (
      <div style={{height:"100%",width:"100%"}}>
        {this.func()}
      </div>
      );
  }
}

export default ContentLayout;