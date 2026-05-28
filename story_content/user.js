function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eCOjtBImMh":
        Script1();
        break;
      case "5dCffA1kGqX":
        Script2();
        break;
      case "5y6p0oRKsRl":
        Script3();
        break;
      case "614TvrO3TYg":
        Script4();
        break;
  }
}

function Script1()
{
  if (!window.globalAudio) {
    window.globalAudio = new Audio("story_content/audio/zalora.mp3");
    window.globalAudio.loop = true;
    window.globalAudio.volume = 0.1;
}
}

function Script2()
{
  window.globalAudio.play();
}

function Script3()
{
  if (window.globalAudio) {
    window.globalAudio.play();
}
}

function Script4()
{
  if (window.globalAudio) {
    window.globalAudio.pause();
}
}

