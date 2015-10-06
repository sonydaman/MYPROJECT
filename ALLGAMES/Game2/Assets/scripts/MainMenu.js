#pragma strict
var music : AudioSource;
function QuitGame(){
	Debug.Log("Game is exist");
	Application.Quit();
}
function startGame(level : String){
Application.LoadLevel(level);

} 
function SetGameVol( vol : float){
	music.volume = vol;
}