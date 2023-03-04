let btn = document.querySelectorAll('input[type="range"]')
let amt = document.querySelector("#amt")
let interest = document.querySelector("#interest")
let month = document.querySelector("#month")
let mnbtn = document.querySelector("#mnth")
let year = document.querySelector("#year")


let range = document.querySelectorAll('input[type="range"]')
let inputs = document.querySelectorAll('input[type="text"]')

for(let j=0;j<range.length;j++){
    range[j].addEventListener("input",()=>{
        inputs[j].value = range[j].value
    })
}


year.classList.add("colors")

let inp = document.querySelector("#amt")
inp.addEventListener("keyup", () => {
  document.querySelector("#amtrange").value = inp.value
})


for(let l=0;l<btn.length;l++){
    btn[l].addEventListener("click", (e) => {

        e.preventDefault()
        let principleAmounts = amt.value
        let interestss = interest.value
        let monthss = month.value

        checking(principleAmounts,interestss,monthss)
    
    })

}

year.addEventListener("click",(e)=>{
    e.preventDefault()
    if(month.value > 1){
        month.value = month.value / 12
    }

    year.classList.add("colors")
    mnbtn.classList.remove("colors")
})

mnbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    month.value = month.value * 12

    year.classList.remove("colors")
    mnbtn.classList.add("colors")
})

function checking(principleAmounts,interestss,monthss){

    let year = document.querySelector("#year")
    if(year.classList.contains("colors")){
     YearWork(principleAmounts,interestss,monthss)
    }else{
     monthWork(principleAmounts,interestss,monthss)
    }

    mnbtn.addEventListener("click",()=>{
        let year = document.querySelector("#year")
        if(year.classList.contains("colors")){
         YearWork(principleAmounts,interestss,monthss)
        }else{
         monthWork(principleAmounts,interestss,monthss)
        }
    })

}


function monthWork(principleAmount,interests,months){
    
    if(amt.value != "" && interest.value != "" && month.value != ""){

        if(amt.value == 0 || interest.value == 0 || month.value == 0){
            alert("Please put greater than 1")
        }
        else{
            let finalR = interests / (12 * 100)

            let result = (principleAmount * finalR)
        
            let result1 = (Math.pow(1 + finalR, months))
            let result2 = result1 - 1
        
            let FinelResult = result * result1
        
            let Answer = FinelResult / result2
    
            let TotalAmount = months * Answer
            let interestsss = TotalAmount - principleAmount
            console.log(interestsss)
        
            document.querySelector("#answer").innerHTML = "₹" + Math.floor(Number(Answer))
            document.querySelector("#amount").innerHTML = "₹" + Math.floor(Number(TotalAmount))
            document.querySelector("#interst").innerHTML = "₹" + Math.floor(Number(interestsss))
        }
    }
    else{
        alert("Please enter value")
    }
}




function YearWork(principleAmount,interests,months){
let monthss = months * 12
if(amt.value != "" && interest.value != "" && month.value != ""){
    let finalR = interests / (12 * 100)

    let result = (principleAmount * finalR)

    let result1 = (Math.pow(1 + finalR, monthss))
    let result2 = result1 - 1

    let FinelResult = result * result1

    let Answer = FinelResult / result2

    let TotalAmount = months * Answer
    let interestsss = TotalAmount - principleAmount

    document.querySelector("#answer").innerHTML = "₹" + Math.floor(Number(Answer))
    document.querySelector("#amount").innerHTML = "₹" + Math.floor(Number(TotalAmount))
    document.querySelector("#interst").innerHTML = "₹" + Math.floor(Number(interestsss))
}else{
alert("Please enter value")
}
}




