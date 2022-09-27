const welcome = document.querySelector('.welcome h2');
typeWrite(welcome);



function typeWrite(element){
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';

    textoArray.forEach((letra,i) =>{
        setTimeout(()=>{
            element.innerHTML += letra;
        }, 75*i);
    })
}
