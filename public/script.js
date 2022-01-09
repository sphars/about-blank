function setBackgroundColor(color) {
    let bodyEl = document.querySelector('body');
    bodyEl.style.backgroundColor = '#' + color;
}

function getURLParams() {
    let params = new URLSearchParams(window.location.search);
    
    if (params.has('color')){
        setBackgroundColor(params.get('color'));
    }
    else{
        console.log('no color specified');
    }
}

window.addEventListener('load', getURLParams(), false);
