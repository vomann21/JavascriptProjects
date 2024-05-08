//for in label and name in input should be same

inputTemp = document.getElementById('temp_input')

toCelcius = document.getElementById('FtoC')
toForenhiet = document.getElementById('CtoF')

result = document.getElementById('result')

let temp;

function convertion(){
    if(toCelcius.checked)
    {
        let f = Number(inputTemp.value)
        temp = (f-32)*(5/9)
        result.textContent=temp.toFixed(2) + "°C"
        result.classList.remove('res')
        result.classList.add('ans')
    }
    else if(toForenhiet.checked)
    {
        let c = Number(inputTemp.value)
        temp = c*(9/5) +32
        result.textContent=temp.toFixed(2) + "°F"  
        result.classList.remove('res')
        result.classList.add('ans')
    }
    else{
        result.textContent = "Select a unit"
    }
}