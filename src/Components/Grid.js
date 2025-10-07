import Grid from '@mui/material/Grid';
import { useEffect, useState, useRef } from 'react';
import { QueueContent1, QueueContent2 } from './Content';

export default function QueueGrid() {
    
    // Randomizer
    const maxValue = 300;
    const minValue = 50;
    const initialValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    const maxKey = 4;
    const minKey = 1;
    const initialKey = Math.floor(Math.random() * (maxKey - minKey + 1)) + minKey;
    const [randomValue, setRandomValue] = useState(initialValue);
    const [randomKey, setRandomKey] = useState(initialKey);

    // Timer Ref
    const timerRefHigh = useRef(null);
    const timerRefReg1 = useRef(null);
    const timerRefReg2= useRef(null);
    const timerRefReg3 = useRef(null);
    const [timerHigh, setTimerHigh] = useState(12);
    const [timerReg1, setTimerReg1] = useState(12);
    const [timerReg2, setTimerReg2] = useState(12);
    const [timerReg3, setTimerReg3] = useState(12);

    // Arrays
    const [tasks, setTasks] = useState([{ key: null, value: null }]);
    const [highPrio, setHighPrio] = useState([]);
    const [regPrio1, setRegPrio1] = useState([]);
    const [regPrio2, setRegPrio2] = useState([]);
    const [regPrio3, setRegPrio3] = useState([]);



    // Functions
    const generateRandomNumber = () => {
        const newValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        setRandomValue(newValue);
        const newKey = Math.floor(Math.random() * (maxKey - minKey + 1)) + minKey;
        setRandomKey(newKey);

    }

    const handleOnclickAdd = () => {
        generateRandomNumber();
        setTasks(prev => [...prev, { key: randomKey, value: randomValue }]);
    }

    const handleOnclickAdmit = () => {
        if (tasks.length > 0) {
            const [firstNum, ...rest] = tasks;

            if (firstNum.key === 1) {
                setHighPrio(prev => [...prev, firstNum.value]);
            }
            else if (firstNum.key === 2) {
                setRegPrio1(prev => [...prev, firstNum.value]);
            }
            else if (firstNum.key === 3) {
                setRegPrio2(prev => [...prev, firstNum.value]);
            }
            else {
                setRegPrio3(prev => [...prev, firstNum.value]);
            }

        
            setTasks(rest);
        }
        else console.log(tasks.length);
    }

    useEffect(() => {
        if (highPrio.length === 0) return;
        const [firstNum, ...rest] = highPrio;
        const totalTime = firstNum; // ms duration
        const totalGrid = 12;
        const updateRate = 100; // ms per interval update
        const steps = totalTime / updateRate;
        const decrement = totalGrid / steps;
        setTimerHigh(totalGrid);
        clearInterval(timerRefHigh.current);
        timerRefHigh.current = setInterval(() => {
            setTimerHigh((prev) => {
                const newVal = prev - decrement;
                if (newVal <= 0) {
                    clearInterval(timerRefHigh.current);
                    setHighPrio(rest); // move to next item
                    return 0;
                }
                return newVal;
            });
        }, updateRate);
        return () => clearInterval(timerRefHigh.current);
    }, [highPrio]);

    useEffect(() => {
        if (regPrio1.length === 0) return;
        const [firstNum, ...rest] = regPrio1;
        const totalTime = firstNum; // ms duration
        const totalGrid = 12;
        const updateRate = 100; // ms per interval update
        const steps = totalTime / updateRate;
        const decrement = totalGrid / steps;
        setTimerReg1(totalGrid);
        clearInterval(timerRefReg1.current);
        timerRefReg1.current = setInterval(() => {
            setTimerReg1((prev) => {
                const newVal = prev - decrement;
                if (newVal <= 0) {
                    clearInterval(timerRefReg1.current);
                    setRegPrio1(rest); // move to next item
                    return 0;
                }
                return newVal;
            });
        }, updateRate);
        return () => clearInterval(timerRefReg1.current);
    }, [regPrio1]);

    useEffect(() => {
        if (regPrio2.length === 0) return;
        const [firstNum, ...rest] = regPrio2;
        const totalTime = firstNum; // ms duration
        const totalGrid = 12;
        const updateRate = 100; // ms per interval update
        const steps = totalTime / updateRate;
        const decrement = totalGrid / steps;
        setTimerReg2(totalGrid);
        clearInterval(timerRefReg2.current);
        timerRefReg2.current = setInterval(() => {
            setTimerReg2((prev) => {
                const newVal = prev - decrement;
                if (newVal <= 0) {
                    clearInterval(timerRefReg2.current);
                    setRegPrio2(rest); // move to next item
                    return 0;
                }
                return newVal;
            });
        }, updateRate);
        return () => clearInterval(timerRefReg2.current);
    }, [regPrio2]);

    useEffect(() => {
        if (regPrio3.length === 0) return;
        const [firstNum, ...rest] = regPrio3;
        const totalTime = firstNum; // ms duration
        const totalGrid = 12;
        const updateRate = 100; // ms per interval update
        const steps = totalTime / updateRate;
        const decrement = totalGrid / steps;
        setTimerReg3(totalGrid);
        clearInterval(timerRefReg3.current);
        timerRefReg3.current = setInterval(() => {
            setTimerReg3((prev) => {
                const newVal = prev - decrement;
                if (newVal <= 0) {
                    clearInterval(timerRefReg3.current);
                    setRegPrio3(rest); // move to next item
                    return 0;
                }
                return newVal;
            });
        }, updateRate);
        return () => clearInterval(timerRefReg3.current);
    }, [regPrio3]);

    return (
        <Grid container spacing={2} sx={{ border: "1px solid black", width: "1000px", height: "auto", padding: "20px"}}>
            <QueueContent1 tasks={tasks} handleOnclickAdd={handleOnclickAdd} handleOnclickAdmit={handleOnclickAdmit} />
            <Grid item container size={5} spacing={2} sx={{ maxHeight: "800px" }}>
                <QueueContent2 prio={highPrio} count={timerHigh} title={"High Priority Queue"} />
                <QueueContent2 prio={regPrio1} count={timerReg1} title={"Regular Queue 1"} />
                <QueueContent2 prio={regPrio2} count={timerReg2} title={"Regular Queue 2"} />
                <QueueContent2 prio={regPrio3} count={timerReg3} title={"Regular Queue 3"} />
            </Grid>
        </Grid>
    );
}