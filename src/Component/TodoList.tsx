import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { ITask } from '../interfaces';
import './TodoList.css';

interface Props {
    detail: ITask;
    Delete(nameToDelete: string): void;
}
const TodoList = ({ detail, Delete }: Props) => {
    return (
        <div className='container'>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {detail.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {detail.email}
                    </Typography>
                    {/* <Button variant="contained" onClick={() => { localStorage.removeItem(detail.name) }}>X</Button> */}
                    <Button variant="contained" onClick={() => { Delete(detail.name) }}>X</Button>
                </Paper>
            </Grid>
        </div>
    )
}

export default TodoList;