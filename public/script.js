function setBackgroundColor(color) {
    let bodyEl = document.querySelector('body');
    bodyEl.style.backgroundColor = '#' + color;
}

function getRandomHexCode(){
    let letters = '0123456789ABCDEF';
    let color = '';
    for(let i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
}

function getURLParams() {
    let params = new URLSearchParams(window.location.search);
    
    if (params.has('color')){
        if(params.get('color') == 'random'){
            setBackgroundColor(getRandomHexCode());
        } else {
            setBackgroundColor(params.get('color'));
        }
    }
    else{
        console.log('no color specified');
    }
}

window.addEventListener('load', getURLParams(), false);
