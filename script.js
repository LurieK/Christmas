const tiltImages = document.querySelectorAll('.sarah, .amy, .lurie');

function startTilt() {
    for (let img of tiltImages) {
        img.classList.add('startTilt');      
       
    }
}


startTilt();
