var ativo = false;

function playPause(elem,btn_play,btn_pause) {
    if(ativo==false){
        elem.play();
        ativo = true;
        /*btn_play.style.display = "none";
        btn_pause.style.display = "initial";*/
    }else{
        elem.pause();
        /*btn_play.style.display = "initial";
        btn_pause.style.display = "none";*/
        ativo = false;
    }
    
}

function stopVideo(elem){
    elem.pause();
    elem.currentTime = 0;
}