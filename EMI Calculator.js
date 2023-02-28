let btn = document.querySelector("#submit")
let amt = document.querySelector("#amt")
let interest = document.querySelector("#interest")
let month = document.querySelector("#month")
let value = document.querySelector("#yandm")
console.log(value)

btn.addEventListener("click", (e) => {

    e.preventDefault()
    let principleAmounts = amt.value
    let interestss = interest.value
    let monthss = month.value

    if(value.value == "month"){
        monthWork(principleAmounts,interestss,monthss)
    }else{
        YearWork(principleAmounts,interestss,monthss)
    }



})

function monthWork(principleAmount,interests,months){
    if(amt.value != "" && interest.value != "" && month.value != "" && value.value){
        let finalR = interests / (12 * 100)

        let result = (principleAmount * finalR)
        let result1 = (Math.pow(1 + finalR, months))
        let result2 = result1 - 1
    
        let FinelResult = result * result1
    
        let Answer = FinelResult / result2

        let fixedNum = parseFloat(Answer).toFixed( 2 );
    
        document.querySelector("#answer").innerText = `Your EMI Amount is:${fixedNum}`
    }else{
        alert("Please enter value")
    }
}


function YearWork(principleAmount,interests,months){
    let month = months * 12
    if(amt.value != "" && interest.value != "" && value.value != ""){
        let finalR = interests / (12 * 100)

        let result = (principleAmount * finalR)
        let result1 = (Math.pow(1 + finalR, month))
        let result2 = result1 - 1
    
        let FinelResult = result * result1
    
        let Answer = FinelResult / result2

        let fixedNum = parseFloat(Answer).toFixed( 2 );
    
        document.querySelector("#answer").innerText = `Your EMI Amount is:${fixedNum}`
    }else{
        alert("Please enter value")
    }
}



