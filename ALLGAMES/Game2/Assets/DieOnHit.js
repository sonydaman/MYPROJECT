#pragma strict

function OnTriggerEnter () {
	var d = transform.GetComponentInParent(enemy);
	d.Die();
}

