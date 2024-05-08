

function diceRoll()
{
    let value = document.getElementById('dice-input').value
    let resValue = document.getElementById('result-values')
    let resImage = document.getElementById('result-images')
    
    const values=[]
    const images=[]

    for(let i=0; i<value;i++)
    {
        let x = Math.floor(Math.random()*6) +1 
        values.push(x)
        images.push(`<img src="diceImages/${x}.png">`)
    }
    
    resValue.textContent = values.join(',') 
    resImage.innerHTML = images.join('') 
}