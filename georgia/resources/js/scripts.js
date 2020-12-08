

/* This is to open and close the nav */
function openNav () {
    let toggler  = document.querySelector('.nav-prompt');
    let navigation = document.querySelector ('.nav-inner' );

    toggler.onclick = function (){
        navigation.classList.toggle('open');
    };
}

openNav();


// This is for the gallery 

var lightbox = new SimpleLightbox('.gallery a', { /* options */ }); 