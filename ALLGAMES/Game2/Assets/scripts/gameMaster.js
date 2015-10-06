#pragma strict
static var currentScore : int = 0;
var offsetY : float = 40; 
var sizeX : float = 100;
var sizeY : float = 40;
var musicPrefab : Transform;
var gameOverSound : AudioClip;
var player : Transform;
static var isRestarting = false;
function Start(){
currentScore = 0;
	if(GameObject.FindGameObjectsWithTag("MM"))
	{
		var mManager = Instantiate(musicPrefab,transform.position,Quaternion.identity);
		mManager.name = musicPrefab.name;
		DontDestroyOnLoad(mManager);
		
	}
}
function OnGUI () {
	//GUI.Label(new Rect(Screen.height*0.5,Screen.width/2,200,200),"Score");
	GUI.Label(new Rect(Screen.width/2,offsetY,sizeX,sizeY),"Score : " + currentScore);
}
function RestartLevel(){
	isRestarting = true;
	GetComponent.<AudioSource>().pitch = 1;
	GetComponent.<AudioSource>().clip = gameOverSound;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds(GetComponent.<AudioSource>().clip.length);
	//Application.LoadLevel("level01"); 
	//Debug.Log(gameMaster.currentScore);
	 player.position = checkpoint.ReachedPoint;
	 isRestarting = false;
}
