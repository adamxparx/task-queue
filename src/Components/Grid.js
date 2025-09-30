import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useState } from 'react';

export default function QueueGrid() {
    
    const min = 50;
    const max = 300;

    const initialRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    const [randomNumber, setRandomNumber] = useState(initialRandom);

    const [timer, setTimer] = useState(0);
    const [count, setCount] = useState(12);

    const [tasks, setTasks] = useState([]);
    const [highPrio, setHighPrio] = useState([]);

    const generateRandomNumber = () => {
        const newRandom = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(newRandom);
    }

    const handleOnclickAdd = () => {
        generateRandomNumber();
        setTasks([...tasks, randomNumber]);
    }

    const handleOnclickAdmit = () => {
        if (tasks[0] != null) {
            const firstNum = tasks.shift();
            setHighPrio([...highPrio, firstNum]);

            setTimer(() => {
                return 12 - (12 / firstNum);
            });
        }
    }

    // useEffect(() => {
    //     console.log(timer);
    // }, )

    return (
        <>
            <Grid container spacing={2} sx={{ border: "1px solid black", width: "1000px", height: "auto", padding: "20px"}}>
                <Grid item size={7} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", height: "800px" }}>
                    <button onClick={handleOnclickAdd} className="AddTask">Add Random Task</button>
                    <h2 className="TaskQueue">Task Queue</h2>
                    <div className="RandomTask">
                        {tasks.map((task, i) => (
                            <li>{task}</li>
                        ))}
                    </div>
                    <button onClick={handleOnclickAdmit} className="AdmitTask">Admit Task</button>
                </Grid>
                <Grid item container size={5} spacing={2} sx={{ maxHeight: "800px" }}>
                    <Grid item size={12} sx={{ border: "2px solid red", padding: "0px 5px" }}>
                        <h3>High PriorityQueue 1</h3>
                        <p>Queue List:</p>
                        <Grid className="QueueList">
                            {highPrio.map((task, i) => (
                                <li>{task}</li>
                            ))}
                        </Grid>
                        <p>Duration:</p>
                        <Grid item size={count} className="Duration" />
                    </Grid>
                    <Grid item size={12} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", padding: "0px 5px" }}>
                        <h3>High PriorityQueue 1</h3>
                        <p>Queue List:</p>
                        <Grid className="QueueList" />
                        <p>Duration:</p>
                        <Grid className="Duration" />
                    </Grid>
                    <Grid item size={12} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", padding: "0px 5px" }}>
                        <h3>High PriorityQueue 1</h3>
                        <p>Queue List:</p>
                        <Grid className="QueueList" />
                        <p>Duration:</p>
                        <Grid className="Duration" />
                    </Grid>
                    <Grid item size={12} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", padding: "0px 5px" }}>
                        <h3>High PriorityQueue 1</h3>
                        <p>Queue List:</p>
                        <Grid className="QueueList" />
                        <p>Duration:</p>
                        <Grid className="Duration" />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}