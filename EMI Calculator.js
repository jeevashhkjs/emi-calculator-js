let btn = document.querySelector("#submit")
let amt = document.querySelector("#amt")
let interest = document.querySelector("#interest")
let month = document.querySelector("#month")
let mnbtn = document.querySelector("#mnth")
let year = document.querySelector("#year")

year.classList.add("colors")

mnbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    month.value = month.value * 12

    year.classList.remove("colors")
    mnbtn.classList.add("colors")
})

year.addEventListener("click",(e)=>{
    e.preventDefault()
    let j = month.value
    if (j>1) {
        let jj=month.value/12
        month.value=jj
        
    }
   
    mnbtn.classList.remove("colors")
    year.classList.add("colors")
})

btn.addEventListener("click", (e) => {

    e.preventDefault()
    let principleAmounts = amt.value
    let interestss = interest.value
    let monthss = month.value

   let year = document.querySelector("#year")
   if(year.classList.contains("colors")){
    YearWork(principleAmounts,interestss,monthss)
   }else{
    monthWork(principleAmounts,interestss,monthss)
   }

})

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



