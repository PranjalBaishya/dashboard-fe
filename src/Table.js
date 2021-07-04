import React, {Component} from 'react'
import './App.css';

const TableHeader = () => {
  return (
    <thead className="table-header">
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Attachment</th>
        <th>Category</th>
        <th>Event Type</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.title}</td>
        <td>{row.attachment}</td>
        <td>{row.category}</td>
        <td>{row.event_type}</td>
      </tr>
    
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
      <div className="table">
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      </div>
    )
  }
}
  
export default Table