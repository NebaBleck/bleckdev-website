document.querySelector('.video-cont').addEventListener('mouseover',function(){
    this.querySelector('.hover-video').play();
});
document.querySelector('.video-cont').addEventListener('mouseout',function(){
    this.querySelector('.hover-video').pause();
});