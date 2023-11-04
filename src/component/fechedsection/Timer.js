import React, { useState, useEffect } from 'react';
import { IoCaretUpSharp } from 'react-icons/io5';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0); 

  useEffect(() => {
    setRemainingTime(hours * 3600 + minutes * 60 + seconds);
  }, [hours, minutes, seconds]);

  const incrementHours = () => {
    setHours((hours) => hours + 1);
  };

  const incrementMinutes = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };

  const incrementSeconds = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };

  const decreaseHours = () => {
    if (hours > 0) {
      setHours((Hours) => Hours - 1);
    }
  };

  const decreaseMinutes = () => {
    if (minutes > 0) {
      setMinutes((min) => min - 1);
    }
  };

  const decreaseSeconds = () => {
    if (seconds > 0) {
      setSeconds((sec) => sec - 1);
    }
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  function toHoursandMinutes(totalseconds) {
    const totalMinutes = Math.floor(totalseconds / 60);
    const remainingSeconds = totalseconds % 60;
    const remainingHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    return `${String(remainingHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  return (
    <div
      style={{
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        color: 'white',
        letterSpacing:'2px',
        width: '59%',
        height: '24vh',
        position: 'absolute',
        bottom: '13%',
        left: '4%',
      }}
    >
      <div style={{borderRadius:'12px', padding:'10px 10px 10px 40px', backgroundColor:'#1E2343'}}>
        <CountdownCircleTimer
          isPlaying={isRunning}
          duration={remainingTime}
          colors={[['#FFA500', 0.33], ['#FF0000', 0.33], ['#0000FF']]}
          onComplete={() => {
            setIsRunning(false); 
          }}
        >
          {({ remainingTime }) => (
            <span style={{ color: 'white', fontSize: '1.5rem' }}>
              {toHoursandMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        fontSize:'25px',
          color: '#949494',
          width: '65%',
          height: '24vh',
          position: 'absolute',
                    bottom: '-3%',
          left: '32%',
        }}
      >
        <div style={{
          textAlign: 'center',
          padding: '6px',
        }}>
          <p style={{marginBottom:'10px'}}>Hours</p>
          <IoCaretUpSharp onClick={incrementHours} />
          <p style={{fontSize:'30px'}}>{String(hours).padStart(2, '0')}</p>
          <AiOutlineCaretDown onClick={decreaseHours} />
        </div>
        <div style={{
          textAlign: 'center',
          padding: '6px',
        }}>
          <p style={{marginBottom:'10px'}}>Minutes</p>
          <IoCaretUpSharp onClick={incrementMinutes} />
          <p style={{fontSize:'30px'}} >{String(minutes).padStart(2, '0')}</p>
          <AiOutlineCaretDown onClick={decreaseMinutes} />
        </div>
        <div style={{
          textAlign: 'center',
          padding: '6px',
        }}>
          <p style={{marginBottom:'10px'}}>Seconds</p>
          <IoCaretUpSharp onClick={incrementSeconds} />
          <p style={{fontSize:'30px'}}>{String(seconds).padStart(2, '0')}</p>
          <AiOutlineCaretDown onClick={decreaseSeconds} />
        </div>
      </div>
      <button
        style={{
          position: 'absolute',
          backgroundColor:'#FF6A6A',
          bottom: '-16%',
          right: '13%',
          width: '45%',
        }}
        onClick={toggleTimer}
      >
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Timer;
