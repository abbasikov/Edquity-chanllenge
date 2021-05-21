import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { TablePagination, FormControlLabel, Switch } from '@material-ui/core';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ data }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [dataToShow, setDataToShow] = React.useState(data)
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const headers = data.reduce((output, entry) => {
    const result = output;
    Object.keys(entry).map((key) => {
      if (!result.includes(key)) result.push(key);
    });
    return result;
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);

    if (event.target.checked) {
      let newArray = dataToShow.filter(x => x.paymentMethod === undefined)
      setDataToShow(newArray)
      return
    }
    setDataToShow(data)
  };
  return (
    <>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((key) => {
                return (
                  <StyledTableCell>
                    {
                      // Convert camelcased values to uppercased values to be used as
                      // dynamic headers
                      key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, function (str) {
                          return str.toUpperCase();
                        })
                    }
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              dataToShow
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <StyledTableRow key={row.name}>
                    {headers.map((key) => {
                      return <StyledTableCell>{row[key]}</StyledTableCell>;
                    })}
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={data.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
        />

      </TableContainer>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Without Payment"
      />
    </>
  );
}
