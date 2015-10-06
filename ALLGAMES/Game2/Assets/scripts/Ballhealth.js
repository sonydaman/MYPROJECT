#pragma strict

var maxFallDistance = -10;
//private var isRestarting =false; 

var gameMaster :gameMaster;
function Update () {
	if(transform.position.y <= maxFallDistance)
	{
		if(gameMaster.isRestarting ==false)
		{
		//isRestarting = true;
		gameMaster.RestartLevel();
		//isRestarting = false;
		}
		
	}
}
