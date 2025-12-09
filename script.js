let arr = []
let btn = document.querySelectorAll(".btn")
console.log("Buttons", btn)
let ism =""
let yosh =""
let manzil =""
let shahar =""
btn[0].addEventListener("click", () => {
     ism = prompt("Ismingizni kiriting")
    arr.push(ism)
})
btn[1].addEventListener("click", () => {
     yosh = prompt("yoshingizni kiriting")
    arr.push(yosh)
})
btn[2].addEventListener("click", () => {
     manzil = prompt("Manzilingizni kiriting")
    arr.push(manzil)
})
btn[3].addEventListener("click", () => {
     shahar = prompt("Shahringizni kiriting")
    arr.push(shahar)
})
btn[4].addEventListener("click",() => {
    alert(`${ism}`)
})
btn[5].addEventListener("click",() => {
    alert(`${yosh}`)
})
btn[6].addEventListener("click",() => {
  alert(`${manzil}`)
})
btn[7].addEventListener("click",() => {
    alert(`${shahar}`)
})
let buttondiv = document.querySelector(".buttondiv")
buttondiv.style.display ="flex"
buttondiv.style.justifyContent ="center"
buttondiv.style.gap ="40px"
let buttondiv2 = document.querySelector(".buttondiv2")
buttondiv2.style.display ="flex"
buttondiv2.style.justifyContent ="center"
buttondiv2.style.gap ="40px"
buttondiv2.style.marginTop ="40px"
btn[0].style.width ="100px"
btn[0].style.height ="60px"
btn[0].style.borderRadius ="30px"
btn[0].style.color ="white"
btn[0].style.backgroundColor ="blue"
btn[0].style.borderStyle ="none"
btn[0].style.boxShadow = "0 0 20px blue"
btn[1].style.width ="100px"
btn[1].style.height ="60px"
btn[1].style.borderRadius ="30px"
btn[1].style.color ="white"
btn[1].style.backgroundColor ="red"
btn[1].style.borderStyle ="none"
btn[1].style.boxShadow = "0 0 20px red"
btn[2].style.width ="100px"
btn[2].style.height ="60px"
btn[2].style.borderRadius ="30px"
btn[2].style.color ="white"
btn[2].style.backgroundColor ="violet"
btn[2].style.borderStyle ="none"
btn[2].style.boxShadow = "0 0 20px violet"
btn[3].style.width ="100px"
btn[3].style.height ="60px"
btn[3].style.borderRadius ="30px"
btn[3].style.color ="white"
btn[3].style.backgroundColor = "green"
btn[3].style.borderStyle ="none"
btn[3].style.boxShadow = "0 0 20px green"
btn[4].style.width ="100px"
btn[4].style.height ="60px"
btn[4].style.borderRadius ="30px"
btn[4].style.color ="white"
btn[4].style.backgroundColor ="blue"
btn[4].style.borderStyle ="none"
btn[4].style.boxShadow = "0 0 20px blue"
btn[5].style.width ="100px"
btn[5].style.height ="60px"
btn[5].style.borderRadius ="30px"
btn[5].style.color ="white"
btn[5].style.backgroundColor ="red"
btn[5].style.borderStyle ="none"
btn[5].style.boxShadow = "0 0 20px red"
btn[6].style.width ="100px"
btn[6].style.height ="60px"
btn[6].style.borderRadius ="30px"
btn[6].style.color ="white"
btn[6].style.backgroundColor ="violet"
btn[6].style.borderStyle ="none"
btn[6].style.boxShadow = "0 0 20px violet"
btn[7].style.width ="100px"
btn[7].style.height ="60px"
btn[7].style.borderRadius ="30px"
btn[7].style.color ="white"
btn[7].style.backgroundColor = "green"
btn[7].style.borderStyle ="none"
btn[7].style.boxShadow = "0 0 20px green"
let btndiv3 =document.querySelector(".btndiv3")
btndiv3.style.marginTop ="320px"
console.log(arr);