let btn = document.querySelectorAll('input[type="range"]')
let amt = document.querySelector("#amt")

let interest = document.querySelector("#interest")
let month = document.querySelector("#month")
let mnbtn = document.querySelector("#mnth")
let year = document.querySelector("#year")

let range = document.querySelectorAll('input[type="range"]')
let inputs = document.querySelectorAll('input[type="number"]')

let rsbtn = document.querySelector("#rs")
let interestbtn = document.querySelector("#inter")
let notification = document.querySelector("#notify")

for (let j = 0; j < range.length; j++) {
    range[j].addEventListener("input", () => {
        inputs[j].value = range[j].value
        inputs[j].value = inputs[j].value.toLocaleString()
    })
}


year.classList.add("colors")

rsbtn.addEventListener("click", (e) => {
    let amouts = amt.value
    let intrs = interest.value
    let mnths = month.value
    e.preventDefault()
    checking(amouts, intrs, mnths)
})
interestbtn.addEventListener("click", (e) => {
    let amouts = amt.value
    let intrs = interest.value
    let mnths = month.value
    e.preventDefault()
    checking(amouts, intrs, mnths)
})

for (let l = 0; l < btn.length; l++) {
    btn[l].addEventListener("click", (e) => {

        e.preventDefault()
        let principleAmounts = amt.value
        let interestss = interest.value
        let monthss = month.value

        checking(principleAmounts, interestss, monthss)

    })

}

year.addEventListener("click", (e) => {
    e.preventDefault()
    if (month.value > 1) {
        month.value = month.value / 12
    }

    let amouts = amt.value
    let intrs = interest.value
    let mnths = month.value
    e.preventDefault()
    checking(amouts, intrs, mnths)

    year.classList.add("colors")
    mnbtn.classList.remove("colors")
})

mnbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (mnbtn.classList.contains("colors") == false) {
        month.value = month.value * 12
    }

    let amouts = amt.value
    let intrs = interest.value
    let mnths = month.value
    e.preventDefault()
    checking(amouts, intrs, mnths)

    year.classList.remove("colors")
    mnbtn.classList.add("colors")
})

function checking(principleAmounts, interestss, monthss) {

    let year = document.querySelector("#year")
    if (year.classList.contains("colors")) {
        YearWork(principleAmounts, interestss, monthss)
    } else {
        monthWork(principleAmounts, interestss, monthss)
    }

    mnbtn.addEventListener("click", () => {
        let year = document.querySelector("#year")
        if (year.classList.contains("colors") == true) {
            YearWork(principleAmounts, interestss, monthss)
        } else {
            monthWork(principleAmounts, interestss, monthss)
        }
    })

}

function monthWork(principleAmount, interests, months) {

    if (amt.value != "" && interest.value != "" && month.value != "") {

        if (amt.value == 0 || interest.value == 0 || month.value == 0) {
            notification.style.display = "block"
            setInterval(() => {
                notification.style.display = "none"
            },1000);
        }
        else {
            let finalR = interests / (12 * 100)

            let result = (principleAmount * finalR)

            let result1 = (Math.pow(1 + finalR, months))
            let result2 = result1 - 1

            let FinelResult = result * result1

            let Answer = FinelResult / result2

            let TotalAmount = months * Answer
            let interestsss = TotalAmount - principleAmount

            let finalAnswer = Answer.toFixed(2)
            let finalInterest = interestsss.toFixed(2)
            let resTotalamount = TotalAmount.toFixed(2)


            document.querySelector("#answer").innerHTML = "₹" + finalAnswer.toLocaleString()
            document.querySelector("#amount").innerHTML = "₹" + resTotalamount.toLocaleString()
            document.querySelector("#interst").innerHTML = "₹" + finalInterest.toLocaleString()
        }
    }
    else {
        alert("Please enter value")
    }
}




function YearWork(principleAmount, interests, months) {
    let monthss = months * 12
    if (amt.value != "" && interest.value != "" && month.value != "") {

        if (amt.value == 0 || interest.value == 0 || month.value == 0) {
            notification.style.display = "block"
            setInterval(() => {
                notification.style.display = "none"
            },1000);
        }
        else {
            let finalR = interests / (12 * 100)

            let result = (principleAmount * finalR)

            let result1 = (Math.pow(1 + finalR, monthss))
            let result2 = result1 - 1

            let FinelResult = result * result1

            let Answer = FinelResult / result2

            let TotalAmount = monthss * Answer
            let interestsss = TotalAmount - principleAmount

            let finalAnswer = Answer
            let finalInterest = interestsss
            let resTotalamount = TotalAmount


            document.querySelector("#answer").innerHTML = "₹" + Math.round(finalAnswer).toLocaleString()
            document.querySelector("#amount").innerHTML = "₹" + Math.round(resTotalamount).toLocaleString()
            document.querySelector("#interst").innerHTML = "₹" + Math.round(finalInterest).toLocaleString()
        }

    } else {
        alert("Please enter value")
    }
}




