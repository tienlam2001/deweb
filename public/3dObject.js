const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			// const geometry = new THREE.BoxGeometry();
			// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			// const cube = new THREE.Mesh( geometry, material );
			// scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );
        //
				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();


      const loader = new THREE.GLTFLoader();

loader.load('forfun.glb',function(gltf){
  scene.add(gltf.scene);
})



function lightEffect(){
	var hlight = new THREE.AmbientLight (0x404040,100);
	scene.add(hlight);
	var directionalLight = new THREE.DirectionalLight(0xffffff,100);
	directionalLight.position.set(0,1,0);
	directionalLight.castShadow = true;
	scene.add(directionalLight);
	var delight = new THREE.PointLight(0x000000,10);
	delight.position.set(0,300,500);
	scene.add(delight);
	light2 = new THREE.PointLight(0x000000,10);
	light2.position.set(500,100,0);
	scene.add(light2);
	light3 = new THREE.PointLight(0x000000,10);
	light3.position.set(0,100,-500);
	scene.add(light3);
	light4 = new THREE.PointLight(0x000000,10);
	light4.position.set(-500,300,500);
	scene.add(light4);
}

lightEffect();
