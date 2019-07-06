var ativo = false;

function openFullscreen(elem,btn_play,btn_pause) {
    if(ativo==false){
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            elem.play();
            ativo = true;
            btn_play.style.display = "none";
            btn_pause.style.display = "initial";
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
            elem.play();
            ativo = true;
            btn_play.style.display = "none";
            btn_pause.style.display = "initial";
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
            elem.play();
            ativo = true;
            btn_play.style.display = "none";
            btn_pause.style.display = "initial";
        }
    }else{
        elem.pause();
        btn_play.style.display = "initial";
        btn_pause.style.display = "none";
        ativo = false;
    }
    
}