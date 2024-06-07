const summPrev = document.querySelector("#summPrev") 
const timePrev = document.querySelector("#timePrev") 
const ratePrev = document.querySelector("#ratePrev")
const selectPrev = document.querySelector("#fieldSelect")
const checkBox = document.querySelector("#checkbox")
function sendData(data){
    if(data.summ != "" && !isNaN(data.summ) && data.time !== "" && !isNaN(data.time) && data.rate !== "" && !isNaN(data.rate)){
        console.log(data)
    }
}

let temp = {
    summ: 1000,
    time: 365,
    rate: 10,
    capitalise: 0
}
summPrev.addEventListener("input", (e) =>{
    temp.summ = Number(summPrev.value)
    sendData(temp)
})
timePrev.addEventListener("input", (e) =>{
    temp.time = Number(timePrev.value)
    sendData(temp)
})
ratePrev.addEventListener("input", (e) =>{
    temp.rate = Number(ratePrev.value)
    sendData(temp)
})
checkBox.addEventListener("change", (e)=>{
    console.log(checkBox.checked)
    if(checkBox.checked){
        temp.capitalise = Number(selectPrev.value)
        sendData(temp)
    }
    else{
        temp.capitalise = 0
        sendData(temp)
    }
})
selectPrev.addEventListener("change", (e) =>{
    temp.capitalise = Number(selectPrev.value)
    sendData(temp)
})