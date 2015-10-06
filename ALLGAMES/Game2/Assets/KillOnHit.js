#pragma strict
var gameMaster : gameMaster;
function OnTriggerEnter (collinfo : Collider) {
	if(gameMaster.isRestarting == false)
	{
	if(collinfo.tag == "Player")
		{
		//var destructable : Destrctable = collinfo.GetComponent("destrctable") as Destrctable;  
		//destructable.Destruct();
		
		}
	gameMaster.RestartLevel();
	}
}