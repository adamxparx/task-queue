import Grid from '@mui/material/Grid';
import { useEffect, useState, useRef } from 'react';
import { QueueContent1, QueueContent2 } from './Content';

export default function QueueGrid() {
    
    // Randomizer
    const min = 50;
    const max = 300;
    const initialRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    const [randomNumber, setRandomNumber] = useState(initialRandom);

    const [timer, setTimer] = useState(12);
    const [count, setCount] = useState(12);

    // Timer Ref
    const timerRef = useRef(null);
    const countRef = useRef(null);

    // Arrays
    const [tasks, setTasks] = useState([]);
    const [highPrio, setHighPrio] = useState([]);
    const [regPrio1, setRegPrio1] = useState([]);
    const [regPrio2, setRegPrio2] = useState([]);
    const [regPrio3, setRegPrio3] = useState([]);


    // Functions
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
            const [firstNum, ...rest] = tasks;

            setHighPrio([...highPrio, firstNum]);
        
            setTasks(rest);
        }
    }


    useEffect(() => {
        if (highPrio.length > 0) {
            const [firstNum, ...rest] = highPrio;

            timerRef.current = setTimeout(() => {
                setHighPrio(rest);
            }, 2000);

            return () => {
                clearTimeout(timerRef.current);
            };
        }

    })

    return (
        <Grid container spacing={2} sx={{ border: "1px solid black", width: "1000px", height: "auto", padding: "20px"}}>
            <QueueContent1 tasks={tasks} handleOnclickAdd={handleOnclickAdd} handleOnclickAdmit={handleOnclickAdmit} />
            <Grid item container size={5} spacing={2} sx={{ maxHeight: "800px" }}>
                <QueueContent2 prio={highPrio} count={timer} title={"High Priority Queue"} />
                <QueueContent2 prio={regPrio1} count={count} title={"Regular Queue 1"} />
                <QueueContent2 prio={regPrio2} count={count} title={"Regular Queue 2"} />
                <QueueContent2 prio={regPrio3} count={count} title={"Regular Queue 3"} />
            </Grid>
        </Grid>
    );
}