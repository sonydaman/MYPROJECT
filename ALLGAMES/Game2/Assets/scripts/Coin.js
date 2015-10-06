#pragma strict
var CoinEffect : Transform;
var coinValue =  1;
function OnTriggerEnter (info : Collider) 
{
	if(info.tag=="Player")
	{
		//Debug.Log("coin picked up");
			gameMaster.currentScore += coinValue;
				var effect = Instantiate(CoinEffect,transform.position,transform.rotation);
				Destroy(effect.gameObject,3);
				 Destroy(gameObject); 
	}
}