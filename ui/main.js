console.log('Loaded!');
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRIght (){
    marginLeft+=5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};