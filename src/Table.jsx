import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Pagination from '@material-ui/lab/Pagination';
import TableRow from '@material-ui/core/TableRow';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'event_type',
    label: 'Event Type',
    minWidth: 170,
    maxWidth: 500,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'attachment',
    label: 'Attachment',
    minWidth: 170,
    maxWidth: 500,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'category',
    label: 'Meeting/Conference',
    minWidth: 170,
    maxWidth: 500,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(date, title, event_type, attachment, category) {
  return { date, title, event_type, attachment, category };
}

var rows = [];

const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container: {
    maxHeight: '100%',
  },
});

var currentKeyword='';
export default  function StickyHeadTable(args) {  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = async (event, newPage) => {
    newPage--;

    let url
    if (currentKeyword === undefined){
      url = 'http://0.0.0.0:8000/event/'
    } else {
      url = 'http://0.0.0.0:8000/event/models/'+ currentKeyword +'/'
    }
        
    fetch(url)
    .then((result) => result.json())
    .then((data) => {

      console.log(newPage)
      rows=[];

      var start = (newPage*10);
      var end = (newPage+1)*10;
      console.log('start: ', start, ' end: ', end)

      for(var i=start; i<end; i++){
        var d = createData(data.data[i].date,data.data[i].title,data.data[i].event_type,<a href={data.data[i].attachment} target="_blank">Download pdf</a>, data.data[i].category);
        rows.push(d);
      }
      console.log(rows)
    })
    setRowsPerPage(10);
    setPage(newPage);
  };

  if(rows.length===0 || currentKeyword!==args.searchkeyword){
    currentKeyword=args.searchkeyword;
    rows= args.defaultRows;
  }
  
  return (
    <Paper className={classes.root} style={{width:'96%',marginTop:"2%",marginLeft:'3.5%',height:'100%'}}>
      <TableContainer className={classes.container}>
        <Table aria-label="sticky table" >
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth}}
                >
                  {column.label}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.slice(0,rowsPerPage).map((row) => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={11} variant="outlined" shape="rounded" onChange={handleChangePage} style={{marginTop:'1%'}}/>
    </Paper>
  );
}
