import Grid from '@mui/material/Grid';

export default function QueueGrid() {
    return (
        <>
            <Grid container spacing={2} sx={{ border: "1px solid black", width: "1000px", height: "auto", padding: "20px"}}>
                <Grid item size={7} sx={{ border: "2px solid rgba(0, 0, 0, 0.3)", height: "800px" }}>
                    <button className="AddTask">Add Random Task</button>
                    <h2 className="TaskQueue">Task Queue</h2>
                    <div className="RandomTask" />
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