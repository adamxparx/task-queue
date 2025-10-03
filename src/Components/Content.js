import Grid from '@mui/material/Grid';

export function QueueContent1(props) {

    return (
        <Grid item size={7} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", height: "800px" }}>
            <button onClick={props.handleOnclickAdd} className="AddTask">Add Random Task</button>
            <h2 className="TaskQueue">Task Queue</h2>
            <div className="RandomTask">
                {props.tasks.map((task, i) => (
                    <li>{task}</li>
                ))}
            </div>
            <button onClick={props.handleOnclickAdmit} className="AdmitTask">Admit Task</button>
        </Grid>
    );
}

export function QueueContent2(props) {

    return (
        <Grid item size={12} sx={{ border: "2px solid red", padding: "0px 5px" }}>
            <h3>{props.title}</h3>
            <p>Queue List:</p>
            <Grid className="QueueList">
                {props.prio.map((task, i) => (
                    <li>{task}</li>
                ))}
            </Grid>
            <p>Duration:</p>
            <Grid item size={props.count} className="Duration" />
        </Grid>
    );
}