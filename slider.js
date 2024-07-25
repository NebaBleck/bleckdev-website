var slider_img=document.querySelector('.slider-img');
var images=['ENTT5652.PNG','DPFD3815.PNG','DODS0476.PNG','SHZJ0248.PNG'];
var i=0;

function prev(){
    if( i<=0 ) i=images.length;
    i--;
    return settings();
}

function next(){
    if( i<=0 ) i=images.length;
    i--;
    return settings();
}
function settings(){
    return slider_img.setAttribute('src','images/'+images[i]);
    
}