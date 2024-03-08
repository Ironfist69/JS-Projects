const clock=document.getElementById('clock')
const today=document.getElementById('date')

const kol_en=document.getElementById('kolkata-en')
const kol_bn=document.getElementById('kolkata-bn')
const kol_hn=document.getElementById('kolkata-hn')
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



const elements = [kol_en, kol_hn, kol_bn];
let currentIndex = 0;
function resetColors() {
    elements.forEach(element => {
        element.style.color = 'grey';
    });
}
function updateColor() {
    resetColors();
    elements[currentIndex].style.color = 'rgb(255, 94, 0)';
    currentIndex = (currentIndex + 1) % elements.length;
}
setInterval(updateColor, 2000);