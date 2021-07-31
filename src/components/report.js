import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const db = openDatabase('TimeTracker', '1.0', 'main database', 1024 * 1024 * 1024);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function Report() {
    const classes = useStyles();
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows([]);
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
                const len = results.rows.length;
                for (let i = len - 1; i >= len - 30 && i >= 0; i--) {
                    setRows(oldRows => [...oldRows, results.rows.item(i)])
                }
            }, null);
        });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Discription</TableCell>
                        <TableCell align="right">Tag</TableCell>
                        <TableCell align="right">Start</TableCell>
                        <TableCell align="right">End</TableCell>
                        <TableCell align="right">Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.tag}</TableCell>
                            <TableCell align="right">{row.startTime}</TableCell>
                            <TableCell align="right">{row.endTime}</TableCell>
                            <TableCell align="right">{row.duration + " minutes"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
