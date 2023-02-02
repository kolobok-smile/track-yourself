import { Box, Button, Grid } from '@mui/material';
import { useEffect, useState } from 'react'
// import { Button } from '../components/Button';
import Time from '../components/Time';
import TimerContent from '../components/TimerContent';
import TimerFooter from '../components/TimerFooter';
import TimerHeader from '../components/TimerHeader';
import { secondsToTime, zeroBefore } from '../utils/utils';
// import Grid from '@mui/system/Unstable_Grid';

function PomodoraPage() {
  const period = 1000;
  const [isGoing, setIsGoing] = useState(false);
  const [counter, setCounter] = useState(1500);
  const time = secondsToTime(counter);
  const onStart = () => {
    setIsGoing(true);
  }
  const onStop = () => {
    setIsGoing(false);
  }
  const onReset = () => {
    setCounter(0);
  }
  const setCounterStart = (v: number) => {
    setCounter(v);
  }
  
  useEffect(() => {
    if(!isGoing || counter <= 0) return;
    const interval = setInterval(() => setCounter((counter) => counter - 1), period);
    return () => clearInterval(interval);
  }, [isGoing, counter]);
  return (
    <Grid container sx={{ mt: '2rem' }} columnSpacing={6} rowSpacing={6}>
      <Grid item xs={12}>
        {/* I'm need to think about this */}
        {/* <Box sx={{textAlign: 'center', '& button': { mr: 2, ml:2 }}}>
          <Button variant="contained" onClick={() => setCounterStart(1200)}>20</Button>
          <Button variant="contained" onClick={() => setCounterStart(1500)}>25</Button>
          <Button variant="contained" onClick={() => setCounterStart(1800)}>30</Button>
        </Box> */}
      </Grid>x
      <Grid item xs={12}>
        <Box sx={{textAlign: 'center'}}>
          <Time time={time} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{textAlign: 'center', '& button': { mr: 2, ml:2 }}}>
          <Button variant="contained" size="large" onClick={onStart}>Start</Button>
          <Button variant="contained" size="large"  onClick={onStop}>Stop</Button>
          <Button variant="contained" size="large" onClick={onReset}>Reset</Button>
        </Box>
      </Grid>
      
    </Grid>
  )
}

export default PomodoraPage;




