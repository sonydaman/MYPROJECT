#pragma strict

var rotationSpeed	=	100;
var jumpHeight = 8;
private var playOnce =  true ;
//private var isFalling = false; 
var hit01 : AudioClip;
var hit02 : AudioClip;
var hit03 : AudioClip;
var disToGround : float;

function Start(){
		// Getting from the distance the center to the ground
		//disToGround = collider.bounds.extends.y ;
		disToGround = 1.0;

		}
function Update () {
	//Handle ball rotation.
	var rotation : float = Input.GetAxis("Horizontal") * rotationSpeed;
	rotation *= Time.deltaTime;
	GetComponent.<Rigidbody>().AddRelativeTorque(Vector3.back * rotation);
	//rigidbody.AddRelativeTorque(Vector3.back * rotation);
	// w is not press again
	if(Input.GetKeyDown(KeyCode.W) &&  IsGrounded())
	{
	//rigidbody.velocity.y = jumpHeight;
	GetComponent.<Rigidbody>().velocity.y = jumpHeight;
	
	}
	//isFalling = true;
	
}
function IsGrounded() : boolean {
	//return Physics.Raycast(transform.position,-Vector3.up,disToGround+0.1);
	return Physics.Raycast(transform.position, -Vector3.up, disToGround + 0.1);
}
// w is not press again
/*
function OnCollisionStay(){
	isFalling = false;
}*/
function OnCollisionEnter(){
			var theHit = Random.Range(0,4);
			if(theHit == 0)
				{GetComponent.<AudioSource>().clip = hit01; }
			else if(theHit == 1)
				{GetComponent.<AudioSource>().clip = hit02; }
			else
				{GetComponent.<AudioSource>().clip = hit03; }
				
			GetComponent.<AudioSource>().pitch = Random.Range(0.9,1.1);
			GetComponent.<AudioSource>().Play();
			
}