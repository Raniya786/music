var mysong=document.getElementById("Mysong");
  var icon=document.getElementById("icon");
  icon.onclick=function()
  {
    if(Mysong.paused)
    {
      Mysong.play();
icon.src="puase.png";    }
    else
    {
      Mysong.pause();
      icon.src="pmusic.jpeg";
    }
  }