function todark(){
    let lg=document.querySelector('#moon');
    var bd=document.querySelector('body');
    bd.classList.toggle('darkmode1');
    if(lg.src.match('black-crescent-moon-png-2.png'))
    {
        lg.src='./images/bright.png';
    }
    else{ 
        lg.src='./images/black-crescent-moon-png-2.png';
    }
   
}