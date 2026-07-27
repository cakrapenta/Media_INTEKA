function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6odxSNAPdMg":
        Script1();
        break;
      case "6YmQmr2V3M2":
        Script2();
        break;
      case "5WMVRIPFyok":
        Script3();
        break;
      case "5zWSeWTTCAW":
        Script4();
        break;
      case "6lp3o2wXhLw":
        Script5();
        break;
      case "5zzu9t4p9vM":
        Script6();
        break;
      case "62zfrDjA3kd":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.load();
audio.play();


}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.0;

}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.2;

}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.4;

}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.6;

}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume= 0.8;

}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume= 1.0;

}

