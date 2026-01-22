// import('@dimforge/rapier3d-compat').then(RAPIER => 

import RAPIER from'@dimforge/rapier3d-compat';


	console.log("init rapier...");
	RAPIER.init().then(() =>
	{
		console.log("loaded rapier",RAPIER);
		window.RAPIER=RAPIER;
	});

console.log("loading rapier...");
