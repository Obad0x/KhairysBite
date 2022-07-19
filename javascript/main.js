


window.addEventListener('scroll', reveal)

function reveal() {
    
    var reveals = document.getElementsByClassName('reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheights = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheights - revealpoint ) {
            reveals[i].classList.add('active');
           
            
        }else{
            reveals[i].classList.remove('active');
        }
        
    }
}