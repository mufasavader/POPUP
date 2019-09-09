const button=document.querySelector('button');
const cloxe=document.querySelector('.popup-close')

const popup=document.querySelector('.popup-wrapper');
button.addEventListener('click',()=>
{
    popup.style.display='block';
}
)
cloxe.addEventListener('click',()=>{
    popup.style.display = 'none';
})
popup.addEventListener('click', ()=>{
    popup.style.display='none';
}
)