window.onload = function(){ 
    criar();
    animate();
}

var num = 7;

var scene;
var camera;
var renderer;

var geometryExt
var materialExt
var circleExt
var geometryInt
var materialInt
var circleInt

var valWidthExt = num;
var valWidthInt = num * 0.9;

function criar(){
    if(scene == null){
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    
        geometryExt = new THREE.CircleBufferGeometry( valWidthExt, 92 );
        materialExt = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        circleExt = new THREE.Mesh( geometryExt, materialExt );
        scene.add( circleExt );
    
        geometryInt = new THREE.CircleBufferGeometry( valWidthInt, 92 );
        materialInt = new THREE.MeshBasicMaterial( { color: 0xfff } );
        circleInt = new THREE.Mesh( geometryInt, materialInt );
        scene.add( circleInt );
    }else{
        scene.remove(circleExt);
        scene.remove(circleInt);
        geometryExt = new THREE.CircleBufferGeometry( valWidthExt, 92 );
        materialExt = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        circleExt = new THREE.Mesh( geometryExt, materialExt );
        scene.add( circleExt );
    
        geometryInt = new THREE.CircleBufferGeometry( valWidthInt, 92 );
        materialInt = new THREE.MeshBasicMaterial( { color: 0xfff } );
        circleInt = new THREE.Mesh( geometryInt, materialInt );
        scene.add( circleInt );
    }
    camera.position.z = 5;
    animate();
}

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

function atualizarVal(num){  
    if(num.value < 1 || num.value > 16){
        alert('Insira valores de 1 a 16');
        num.value = 7;
        document.getElementById('val').value = '';
    }else{
        valWidthExt = num.value;
        valWidthInt = num.value * 0.9;
        criar();
    }
    
}