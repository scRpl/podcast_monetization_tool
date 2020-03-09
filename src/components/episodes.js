import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginBottom: '20px',
    marginTop: '20px'
  },
});

function createData(episode, length, reach, date, listen) {
  return { episode, length, reach, date, listen };
}

const rows = [
  createData('Comfort Challenge #2: Learn to Propose', '1:59', '6.0M', '24 May', <PlayCircleOutlineIcon />),
  createData('Josh Waitzkin on Beginner’s Mind, Self-Actualization, and Advice from Your Future Self (#412)', '2:37', '9.0M', '12 April', <PlayCircleOutlineIcon />),
  createData('Comfort Challenge #1: Learn to Eye Gaze', '2:62', '16.0M', '13 March', <PlayCircleOutlineIcon />),
  createData('Richard Turner — The Magical Phenom Who Will Blow Your Mind (#411)', '3:05', '3.7M', '5 March', <PlayCircleOutlineIcon />),
  createData('Some Thoughts on Coronaviruses and Seatbelts', '3:56', '16.0M', '13 February', <PlayCircleOutlineIcon />),
];

export default function Episodes() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Episode</TableCell>
            <TableCell align="right">Length</TableCell>
            <TableCell align="right">Reach</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Listen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.episode}>
              <TableCell component="th" scope="row">
                {row.episode}
              </TableCell>
              <TableCell align="right">{row.length}</TableCell>
              <TableCell align="right">{row.reach}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.listen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}