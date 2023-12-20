const tiltImages = document.querySelectorAll('.sarah, .amy, .lurie');
const windowHeight = window.innerHeight;
console.log('were gonna tilt!')
function checkPosition() {
    for (let img of tiltImages) {
        const topOfElement = img.getBoundingClientRect().top;
        console.log('tilting')
        // Check if the image is in view otherwise the animation stops
        if (topOfElement < windowHeight && topOfElement + img.clientHeight > 0) {
            img.classList.add('startTilt');
        } else {
            img.classList.remove('startTilt');
        }
    }
}


checkPosition();
