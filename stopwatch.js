//globals
let started = false;
let interval = undefined;
let c=0;
let text= undefined;

const start = function(){
  started = true;
  interval = setInterval(function(){
    c++;
    text  = (c/100).toFixed(2);
    document.getElementById('time').innerHTML=text;

  },100);
}

const stop = function(){
  started = false;
  clearInterval(interval);
}

const reset = function(){
  stop();
  started = false;
  c = 0;
  document.getElementById('time').innerHTML="0";
  document.getElementById('times').innerHTML="Past Times";

}
const recordTime = function(){
  const times = document.getElementById('times');
  times.innerHTML= `${times.innerHTML} <br> ${text}`;
}
//Event handlers
const handleStart = function(){
  if(started)
    stop();
  else
    start();
}

const handleReset = function(){
  reset();
}

const handleRecordTime = function(){
  recordTime();
}

const handleKeyPress = function(e){
  const keyPressed = e.key;
  if(keyPressed === 's')
    handleStart();
  else if(keyPressed === 'r')
    handleReset();
  else if(keyPressed === 't')
    handleRecordTime();
}

function setUp(){
  //adding listeners
  const start = document.getElementById('start');
  const reset = document.getElementById('reset');
  const record = document.getElementById('record');

  document.getElementById('time').innerHTML=0;

  start.addEventListener('click',handleStart);
  reset.addEventListener('click',handleReset);
  record.addEventListener('click',handleRecordTime);
  document.addEventListener('keypress',handleKeyPress);
}

setUp();
