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
import CollapsibleTable from './PolicyTable';

const skip_header = ["rule", "description", "remediation recipe", "value", "operator", "policy_group"]

function Row(props: { key_data: any, rows: any, cols: any }) {
  const { key_data, rows, cols } = props;
  const [mainopen, setMainOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ bgcolor: 'primary.main' }}>
        <TableCell style={{ width: "62px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setMainOpen(!mainopen)}
          >
            {mainopen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell >
          {key_data}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>

          <Collapse in={mainopen} timeout="auto" unmountOnExit>

            <CollapsibleTable rows={props.rows} cols={props.cols} />

          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



type Order = 'asc' | 'desc';

export default function PolicyGroupTable(props: { rows: any[]; cols: any[]; }) {
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
    <TableContainer component={Paper}>

      <Table >

        <TableBody>

          {

            Object.keys(props.rows).map((key: any, index) => {

              return (

                <Row key_data={key} rows={props.rows[key]} cols={props.cols}></Row>

              )
            })

          }
        </TableBody>

      </Table>

    </TableContainer>
  );
}
function setMainOpen(arg0: boolean): void {
  throw new Error('Function not implemented.');
}

