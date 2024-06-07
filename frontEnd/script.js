const summPrev = document.querySelector("#summPrev") 
const timePrev = document.querySelector("#timePrev") 
const ratePrev = document.querySelector("#ratePrev")

function sendData(data){
    if(data.summ != "" && !isNaN(data.summ) && data.time !== "" && !isNaN(data.time) && data.rate !== "" && !isNaN(data.rate)){
        console.log(data.summ !== NaN)
    }
}

let temp = {
    summ: 1000,
    time: 365,
    rate: 10,
    capitalise: 1
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