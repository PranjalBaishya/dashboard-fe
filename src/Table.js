import React, {Component} from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Presentation</th>
        <th>Summary</th>
        <th>Attachment</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.date}</td>
        <td>{row.ppt_title}</td>
        <td>{row.summary}</td>
        <td>{row.attachment}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
  
export default Table