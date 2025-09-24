import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function QueueGrid() {

    const [randomNumber, setRandomNumber] = useState(null);
    const [tasks, setTasks] = useState([]);

    const generateRandomNumber = () => {
        const min = 50;
        const max = 300;
        const newRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(newRandom);
    }

    const handleOnclick = () => {
        generateRandomNumber();
        setTasks([...tasks, randomNumber])
    }

    return (
        <>
            <Grid container spacing={2} sx={{ border: "1px solid black", width: "1000px", height: "auto", padding: "20px"}}>
                <Grid item size={7} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", height: "800px" }}>
                    <button onClick={handleOnclick} className="AddTask">Add Random Task</button>
                    <h2 className="TaskQueue">Task Queue</h2>
                    <div className="RandomTask">
                        {tasks.map((task, i) => (
                            <li>{task}</li>
                        ))}
                    </div>
                    <button className="AdmitTask">Admit Task</button>
                </Grid>
                <Grid item container size={5} spacing={2} sx={{ maxHeight: "800px" }}>
                    <Grid item size={12} sx={{ border: "2px solid red", padding: "0px 5px" }}>
                        <h3>High PriorityQueue 1</h3>
                        <p>Queue List:</p>
                        <div className="QueueList" />
                        <p>Duration:</p>
                        <div className="Duration" />
                    </Grid>
                    <Grid item size={12} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", padding: "0px 5px" }}>
                        <h3>Regular Task 2</h3>
                        <p>Queue List:</p>
                        <div className="QueueList" />
                        <p>Duration:</p>
                        <div className="Duration" />
                    </Grid>
                    <Grid item size={12} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", padding: "0px 5px" }}>
                        <h3>Regular Task 3</h3>
                        <p>Queue List:</p>
                        <div className="QueueList" />
                        <p>Duration:</p>
                        <div className="Duration" />
                    </Grid>
                    <Grid item size={12} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", padding: "0px 5px" }}>
                        <h3>Regular Task 4</h3>
                        <p>Queue List:</p>
                        <div className="QueueList" />
                        <p>Duration:</p>
                        <div className="Duration" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}