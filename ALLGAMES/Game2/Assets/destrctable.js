#pragma strict
var ballrigidbody : Rigidbody;
var ballcollider : SphereCollider;
var pieces : GameObject;
var wholeBall : GameObject;
//var piecesParent : Transform;
//var piecesPrefeb : Transform;

function Destruct () {
	ballrigidbody.isKinematic = true;
	ballcollider.enabled = false;
	pieces.SetActive(true);
	//var clone = Instantiate(piecesPrefeb,piecesParent.position,piecesParent.rotation);
	//clone.parent = piecesParent;
	wholeBall.SetActive(false); 
}
