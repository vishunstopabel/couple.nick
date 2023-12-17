let form =document.querySelector("form")

let result =document.querySelector(".results");
let presult=document.querySelector(".presults");
let resultbox=document.querySelector("#box");
let reset=document.querySelector(".reset")
//   name printing algorithum
form.addEventListener("submit",function(e){
e.preventDefault()
const FristName=document.querySelector("#fristname").value;
const ParterName=document.querySelector("#secoundname").value;
if(FristName==""||ParterName==""){
 document.querySelector("#fristname").className="changcolor"
  document.querySelector("#secoundname").className="changcolor"
 console.log(a)
}
 else if(FristName===ParterName){
 let image=document.createElement("img")
 image.className="singleimg"
 image.src="single1.jpg"
 console.log(image)
 document.body.appendChild(image)  
    }
else if(FristName.length<ParterName.length)
{    
    let mid=((Math.round(FristName.length))/2)+1
    let mid2=((Math.round(ParterName.length))/2)+1
    let max_secound= ParterName.length
    let nick_name=FristName.slice(0,mid)+ParterName.slice(mid2,max_secound)
    result.textContent=`Your nick name is ${nick_name}`
    resultbox.className="resultbox"
    presult.innerHTML= "your probable nickname are"
    //  probable printing
    let random=Math.round((Math.random()*10)+1)
    console.log(random)
    for (let i=0;i<=FristName.length;i++){
        let mid=((Math.round(ParterName.length))/random)+i
        let mid2=((Math.round(FristName.length))/random)+i
        let max_frist= FristName.length
        let nick_name=ParterName.slice(0,mid)+FristName.slice(mid2,max_frist)
        var newdiv=document.createElement("li")
        newdiv.className=`new div${i}`
        newdiv.textContent=nick_name
        document.body.querySelector(".pli").appendChild(newdiv)
        console.log(newdiv)
}
}
else if(FristName.length>ParterName.length|| FristName.length==ParterName.length)
{
    let mid=((Math.round(ParterName.length))/2)+1
    let mid2=((Math.round(FristName.length))/2)+1
    let max_frist= FristName.length
    let nick_name=ParterName.slice(0,mid)+FristName.slice(mid2,max_frist)
    result.textContent=`your nick name is ${nick_name}`
    resultbox.className="resultbox"
    presult.innerHTML= "your probable nickname are"
    //for printing probabel nick name
   let random=Math.round((Math.random()*10)+1)
    for (let i=0;i<=ParterName.length;i++){
        let mid=((Math.round(ParterName.length))/random)+i
        let mid2=((Math.round(FristName.length))/random)+i
        let max_frist= FristName.length
        let nick_name=ParterName.slice(0,mid)+FristName.slice(mid2,max_frist)
        var newdiv=document.createElement("li")
        newdiv.className=`new div${i}`
        newdiv.textContent=nick_name
        document.body.querySelector(".pli").appendChild(newdiv)
        console.log(newdiv)
}
}
})
// reset button
reset.addEventListener("click",(e)=>{
 e.preventDefault()
 window.location.reload()
})
