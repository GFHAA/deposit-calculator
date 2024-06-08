const summPrev = document.querySelector("#summPrev")
const timePrev = document.querySelector("#timePrev")
const ratePrev = document.querySelector("#ratePrev")
const selectPrev = document.querySelector("#fieldSelect")
const checkBox = document.querySelector("#checkbox")



async function sendData(data) {
    if (data.summ != "" && !isNaN(data.summ) && data.time !== "" && !isNaN(data.time) && data.rate !== "" && !isNaN(data.rate)) {
        const response = await fetch("http://127.0.0.1:5000/digits", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        re = response.json()
        return re
    }
}

async function editData() {
    const response = await sendData(temp)
    const income = response.income
    const profit = response.profit
    const effective_rate = response.effective_rate
    const total = income + temp.summ

    document.querySelector("#summ").innerHTML  = `${temp.summ}`
    document.querySelector("#income").innerHTML = `${income}`
    document.querySelector("#total").innerHTML = `${total}`
    document.querySelector("#effective-rate").innerHTML = `${effective_rate*100}`
    document.querySelector("#profit").innerHTML = `${profit*100}`
    document.querySelector("#progres-total").style.width = `${temp.summ/total*100}%`
    document.querySelector("#progres-income").style.width = `${100 - temp.summ/total*100}%`
}

let temp = {
    summ: 1000,
    time: 365,
    rate: 10,
    capitalise: 0
}
summPrev.addEventListener("input", (e) => {
    temp.summ = Number(summPrev.value)
    editData()
})

timePrev.addEventListener("input", (e) => {
    temp.time = Number(timePrev.value)
    editData()
})
ratePrev.addEventListener("input", (e) => {
    temp.rate = Number(ratePrev.value)
    editData()
})

checkBox.addEventListener("change", (e) => {
    if (checkBox.checked) {
        temp.capitalise = Number(selectPrev.value)
        editData()
    }
    else {
        temp.capitalise = 0
        editData()
    }
})
selectPrev.addEventListener("change", async (e) => {
    temp.capitalise = Number(selectPrev.value)
    editData()
})