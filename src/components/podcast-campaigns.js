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
  },
});

function createData(episode, length, reach, date, listen) {
  return { episode, length, reach, date, listen };
}

const rows = [
  createData('Maximum Performance', 'pre-roll', '6.0M', '24 000 USD'),
  createData('Organic Foods', 'pre-roll', '9.0M', '12 000 USD'),
  createData('Bulk Powders', 'post-roll', '16.0M', '13 000 USD'),
  createData('Skagen', 'cut-roll', '2.0M', '5 000 USD'),
  createData('Rush Athletics', 'cut-roll', '16.0M', '8 000 USD'),
];

export default function PodcastCampaigns() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Your campaigns</TableCell>
            <TableCell align="right">Ad type</TableCell>
            <TableCell align="right">Reach</TableCell>
            <TableCell align="right">Earnings</TableCell>
            
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
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}