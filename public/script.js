function getURLParams() {
    let params = new URLSearchParams(window.location.search);    
    let validHexCode = /^([0-9a-f]{3}){1,2}$/i;

    if (params.has('color')){
        let color = params.get('color');

        if(color == 'random'){
            setColors(getRandomHexCode());
        } else if (validHexCode.test(color)) {
            setColors(color);
        } else {
            return;
        }
    }
}

function getRandomHexCode(){
    let letters = '0123456789ABCDEF';
    let color = '';
    for(let i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))];
    }
    return color;
}

function setColors(color) {
    let bodyEl = document.querySelector('body');
    bodyEl.style.backgroundColor = '#' + color;

    let infoBtn = document.getElementById('info-btn');
    infoBtn.style.color = '#' + invertColor(color, 'bw');
}

function invertColor(hex, bw){
    // https://stackoverflow.com/a/35970186/

    // convert 3 digit hex to 6
    if(hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]; 
    }

    let r = parseInt(hex.slice(0,2), 16), 
        g = parseInt(hex.slice(2,4), 16),
        b = parseInt(hex.slice(4,6), 16);
    
    // set to dark/light
    if(bw){
        return(r * 0.299 + g * 0.587 + b * 0.114) > 186 ? '262626' : 'F2F2F2';
    }

    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);

    return padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len){
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

window.addEventListener('load', getURLParams(), false);
