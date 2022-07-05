import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { TablePagination } from '@mui/material';

const skip_header=["rule","description","remediation recipe","value","operator"]

function Row(props: { row:any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell >
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell >
          {row.policy_name.replaceAll("_",' ').toLowerCase()}
        </TableCell>
        <TableCell >{row.policy_group.replaceAll("_",' ').toLowerCase()}</TableCell>
        <TableCell >{row.cis_id}</TableCell>
        <TableCell >{row.cis_level}</TableCell>
        <TableCell >{row.severity}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Data
              </Typography>
              <Table size="small" aria-label="purchases">
                
                <TableBody>
                    
                    <TableRow key={"rule"}>
                      <TableCell component="th" scope="row">
                      rule
                      </TableCell>
                      <TableCell>{row.rule}</TableCell>
                      
                    </TableRow>
                    <TableRow key={"value"}>
                      <TableCell component="th" scope="row">
                      value
                      </TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                    <TableRow key={"operator"}>
                      <TableCell component="th" scope="row">
                      operator
                      </TableCell>
                      <TableCell>{row.operator}</TableCell>
                    </TableRow>
                    <TableRow key={"desc"}>
                      <TableCell component="th" scope="row">
                      description
                      </TableCell>
                      <TableCell>{row.description}</TableCell>
                      
                    </TableRow>
                  
                    <TableRow key={"reme"}>
                      <TableCell component="th" scope="row">
                      remediation recipe
                      </TableCell>
                      <TableCell>{row.remediation_recipe}</TableCell>
                      
                    </TableRow>
                    
                </TableBody>
              </Table>
              
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



type Order = 'asc' | 'desc';

export default function CollapsibleTable(props: { rows: readonly any[]; cols: any[]; }) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
     
      <Table stickyHeader aria-label="collapsible table">
        <TableHead  >
          <TableRow>
        <TableCell />

          {props.cols.map((col) => {

           return !skip_header.includes(col.headerName)?<TableCell>{col.headerName}</TableCell>:null;
          })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <Row key={row._id} row={row} />
          ))}
        </TableBody>
       
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </TableContainer>
  );
}
