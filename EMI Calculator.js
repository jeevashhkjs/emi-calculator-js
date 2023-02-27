let btn = document.querySelector("#submit")
let amt = document.querySelector("#amt")
let interest = document.querySelector("#interest")
let month = document.querySelector("#month")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    let principleAmount = amt.value
    let interests = interest.value
    let months = month.value

    if(amt.value != "" && interest.value != "" && month.value != ""){
        let finalR = interests / (12 * 100)

        let result = (principleAmount * finalR)
        let result1 = (Math.pow(1 + finalR, months))
        let result2 = result1 - 1
    
        let FinelResult = result * result1
    
        let Answer = FinelResult / result2

        let fixedNum = parseFloat(Answer).toFixed( 2 );
    
        document.querySelector("#answer").innerText = "Your EMI Amount is " + fixedNum
    }
})

