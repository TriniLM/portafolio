var btnDark = document.getElementById('btn-dark');

function modoDark() {
  document.documentElement.style.setProperty('--primary-color', '#080202');
  document.documentElement.style.setProperty('--secondary-color', '#fff');
  document.documentElement.style.setProperty('--fondo-oscuro' , '#141414');
  document.documentElement.style.setProperty('--box-shadow', 'none');
  document.documentElement.style.setProperty('--box-shadow', 'none');

}
function ligthMode(){
  document.documentElement.style.setProperty('--primary-color', '#fff');
  document.documentElement.style.setProperty('--secondary-color', '#080202');
  document.documentElement.style.setProperty('--fondo-oscuro' , '#eeeeee');
  document.documentElement.style.setProperty('--box-shadow', ' 1px 1px 3px rgb(110, 110, 110), -1px -1px 3px rgb(255, 255, 255)');
}
btnDark.addEventListener('click',()=>{
     btnDark.classList.toggle('btn__dark-activo');

     if(btnDark.classList.contains('btn__dark-activo')){
     localStorage.setItem('dark', 'true');
     modoDark();
  
  }
    else{
    localStorage.setItem('dark', 'false');
    ligthMode()
  }
})

if(localStorage.getItem('dark') === 'true'){ 
    btnDark.classList.add('btn__dark-activo')
    modoDark()
}
else{
    btnDark.classList.remove('btn__dark-activo')
    ligthMode()
}
