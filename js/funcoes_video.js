var ativo = false;

function playPause(elem) {
    if(ativo==false){
        elem.play();
        ativo = true;
    }else{
        elem.pause();
        ativo = false;
    }
    
}

function stopVideo(elem){
    elem.pause();
    elem.currentTime = 0;
}