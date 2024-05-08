let display = document.getElementById('clock')

let timer = null;
let startTime = 0;
let elapsedTime=0;
let isRunning = false;

function start()
{
    if(!isRunning)
    {
        startTime = Date.now()-elapsedTime;
        isRunning=true
        timer = setInterval(update,10);
    }
}

function stop()
{
    if(isRunning)
    {
        clearInterval(timer)
        elapsedTime = Date.now()-startTime;
        isRunning=false
    }
}

function reset()
{
    clearInterval(timer)
    startTime=0;
    elapsedTime=0;
    timer=null;
    isRunning=false;
    display.textContent = "00:00:00:00"
}

function update()
{
    elapsedTime = Date.now()-startTime
    
    

    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60) % 60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let millisec = Math.floor(elapsedTime%1000 /10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    millisec = String(millisec).padStart(2,"0")

    display.textContent = `${hours} ${minutes} ${seconds} ${millisec}`;
}