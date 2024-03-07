const clock=document.getElementById('clock')
const today=document.getElementById('date')
setInterval(()=>{
    let date=new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    clock.innerHTML=date.toLocaleTimeString("en-IN");
    today.innerHTML=date.toLocaleDateString("en-IN",options);
},1000)     //1s=1000ms