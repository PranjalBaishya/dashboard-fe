import './App.css';
import React from 'react';
import Table from './Table';

class ContentLayout extends React.Component {
    constructor() {
        super();
        this.state = {contentType: "Dashboard"};
      }

    render(){
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
          }
        ]
  
        return (<div style={{height:'100%'}}>
              <div style={{height:'90%'}}><Table characterData={characters} /></div> 
              </div>);
      
    }
}

export default ContentLayout;