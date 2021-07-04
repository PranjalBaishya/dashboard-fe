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
import axios from 'axios';

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
    id: 'summary',
    label: 'Summary',
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
];

function createData(date, title, summary, attachment) {
  return { date, title, summary, attachment };
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
    //update rows variable
    
    // var data = args.defaultRows;
    // rows=[];
    // console.log(newPage)
    // for(var i=0; i<=10; i++){
    //   var d = createData(data.data[i].date,data.data[i].title,data.data[i].summary,<a href={data.data[i].attachment} target="_blank">Download pdf</a>);
    //   rows.push(d); 
    // }
     let url =
      'http://0.0.0.0:8000/event/models/'+ currentKeyword +'/'
        
        fetch(url)
        .then((result) => result.json())
        .then((data) => {
          console.log(data)
          var rows=[];
          console.log(data.data.length)
          console.log(newPage)
          for(var i=(newPage*10)+1; i<=(newPage+1)*10; i++){
            var d = createData(data.data[i].date,data.data[i].title,data.data[i].summary,<a href={data.data[i].attachment} target="_blank">Download pdf</a>);
            rows.push(d);
            console.log(rows)
          }
        })
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
      <Pagination count={11} variant="outlined" shape="rounded" page={page} onChange={handleChangePage} style={{marginTop:'1%'}}/>
    </Paper>
  );
}
