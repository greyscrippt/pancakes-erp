import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface DataTableProps {
  data: {
    headers: Array<any>,
    body: Array<Array<any>>,
  },
}

export default function DataTable(props: DataTableProps) {
  return(
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
            <TableRow>
              {props.data.headers.map((item: any, index: number) => <TableCell key={index}>{item}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.body.map((item1: Array<Array<any>>, index1: number) => {
              return(
                <TableRow key={index1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {
                    item1.map((item2: Array<any>, index2: number) => {
                      if (index2 == 0)
                          return <TableCell key={index2} component="th" scope="row">{item2.toString()}</TableCell>

                      return <TableCell key={index2} align="right">{item2.toString()}</TableCell>
                    })
                  }
                </TableRow>
              );
            })}
          </TableBody>
      </Table>
    </TableContainer>
  );
}
