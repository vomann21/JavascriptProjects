
function updateClock()
{
   let now = new Date()
   let hours = now.getHours()
   
   let unit;
   if(hours>=12)
        unit="PM"
   
   else
       unit="AM"
   
   hours = hours%12 != 0 ?  Math.floor(hours%12) : 12
   hours=hours.toString().padStart(2,0)
   let min = now.getMinutes().toString().padStart(2,0);
   let sec = now.getSeconds().toString().padStart(2,0);

   const timeString = `${hours}:${min}:${sec} ${unit}`
   document.getElementById('clock').textContent=timeString 
}

updateClock()
setInterval(updateClock,1000)