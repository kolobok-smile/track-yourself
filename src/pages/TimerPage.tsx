import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import Time from "../components/Time";
import TimerContent from "../components/TimerContent";
// import TimerFooter from "../components/TimerFooter";
import TimerHeader from "../components/TimerHeader";
import { secondsToTime, zeroBefore } from "../utils/utils";

function TimerPage() {
  const period = 1000;
  const [timer, setTimer] = useState(0);
  const [isGoing, setIsGoing] = useState(false);
  const time = secondsToTime(timer);
  
  useEffect(() => {
    if(!isGoing) return;
    const interval = setInterval(() => setTimer((timer) => timer + 1), period);
    return () => clearInterval(interval);
  }, [isGoing, timer]);
  
  return (
    <Grid container sx={{ mt: '2rem' }} columnSpacing={6} rowSpacing={6}>
      <Grid item xs={12}>
        <Box sx={{textAlign: 'center'}}>
          <Time time={time} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{textAlign: 'center', '& button': { mr: 2, ml:2 }}}>
          <Button variant="contained" size="large" onClick={() => setIsGoing(true)}>Run</Button>
          <Button variant="contained" size="large" onClick={() => setIsGoing(false)}>Stop</Button>
          <Button variant="contained" size="large" onClick={() => setTimer(0)}>Reset</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TimerPage