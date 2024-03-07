const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        if(event.target.id) {
            body.style.backgroundColor=event.target.id;
        }
    })
})