
const emoji = document.getElementById('emoji');

const movement = 10
let x=0
let y=0

document.addEventListener('keydown',(event)=>{
    if(event.key.startsWith('Arrow'))
    {
        event.preventDefault()
          switch(event.key)
          {
             case "ArrowUp":
                y = y-movement
                break;
             case "ArrowDown":
                y = y+movement
                break
             case "ArrowLeft":
                x = x-movement
                break
             case "ArrowRight":
                x=x+movement
                break
          }
         emoji.style.top = `${y}px`;
         emoji.style.left = `${x}px`;
    }
})