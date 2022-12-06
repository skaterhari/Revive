function todark(){
    let lg=document.querySelector('#moon');
    if(lg.src.match('black-crescent-moon-png-2.png'))
    {
        var bd=document.querySelector('body');
        bd.classList.toggle('darkmode1');
        lg.src='bright.png';
    }
    else{ 
        lg.src='./black-crescent-moon-png-2.png';
    }
   
}