document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bgvideo');
    if (video) {
        video.playbackRate = 0.9;
    }
});


new Typed("#auto-type", {
    strings: [" Join the movement ➜"], 
    typeSpeed: 80,
    backSpeed: 65,
    startDelay: 500,       
    backDelay: 4000,    
    loop: true
});

