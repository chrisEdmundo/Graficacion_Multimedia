var container, stats;
var camera,scene,renderer;
var group;
var mouseX=0, mouseY=0;
var windowHalfX= window.innerWidth/2;
var windowHalfY= window.innerHeight/2;

function init(){
    container=document.getElementById('container');
    
    camera= new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,2000);
    camera.position.z=500;
    
    scene= new THREE.Scene();
    group=new THREE.Object3D();
    scene.add(group);
    
    
    tierra = new THREE.Object3D();
    scene.add(tierra);
    
    marte= new THREE.Object3D();
    scene.add(marte);

    sol= new THREE.Object3D();
    scene.add(sol);

    venus= new THREE.Object3D();
    scene.add(venus);

    mercurio= new THREE.Object3D();
    scene.add(mercurio);

    saturno= new THREE.Object3D();
    scene.add(saturno);

    jupiter= new THREE.Object3D();
    scene.add(jupiter);

    urano= new THREE.Object3D();
    scene.add(urano);

    neptuno= new THREE.Object3D();
    scene.add(neptuno);

    pluton= new THREE.Object3D();
    scene.add(pluton);

    
    
    //////////////////////////////////////////////


var light = new THREE.DirectionalLight(0XFFFFFF, 2);
light.position.set(1,1,1).normalize();
    scene.add(light);


    var loader = new THREE.TextureLoader();
    loader.load('img/sol.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(200,20,20);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 100;

        sol.add(mesh);

    })
    loader.load('img/mercurio.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(4,20,20);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -260;

        mercurio.add(mesh);

    })
    loader.load('img/venus.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(12,20,20);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -450;

        venus.add(mesh);

    })
    loader.load('img/tierra.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(12,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -650;

        tierra.add(mesh);

    })
    loader.load('img/marte.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(6,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -850;

        marte.add(mesh);

    })
    loader.load('img/jupiter.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(142,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -1050;

        jupiter.add(mesh);

    })
    loader.load('img/saturno.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(108,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -1250;

        saturno.add(mesh);

    })
    loader.load('img/urano.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(51,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -1500;

        urano.add(mesh);

    })
    loader.load('img/neptuno.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(49,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = -1500;

        neptuno.add(mesh);

    })
    loader.load('img/pluton.jpg', function(texture)
    {
        var geometry = new THREE.SphereGeometry(2,10,10);
        var material= new THREE.MeshBasicMaterial({map:texture, overdraw:0.5});
        var mesh= new THREE.Mesh(geometry, material);
        mesh.position.x = 0;
        mesh.position.y = 60;
        mesh.position.z = -2000;

        pluton.add(mesh);

    })

    
    for( var i=0; i<200; i++)
    {
        
        
        
    var estrella = new THREE.SphereGeometry(10,10,10);
    var object = new THREE.Mesh(estrella, new THREE.MeshLambertMaterial( {color: 0xffffff} ));
    object.position.x = Math.random() * 2000 - 1000;
    object.position.y = Math.random() * 2000 - 1000;
    object.position.z = Math.random() * 2000 - 1000;
    scene.add(object);
    
    }
            
            
    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor(0x000000);
    renderer.setSize( window.innerWidth,window.innerHeight);

    container.appendChild(renderer.domElement);
    document.addEventListener('mousemove',onDocumentMouseMove, false);
}

function onDocumentMouseMove(event){
    mouseX=(event.clientX-windowHalfX);
    mouseY=(event.clientY-windowHalfY);
    
}

function animate()
{
    requestAnimationFrame(animate);
    render();
}


function render(){
    camera.position.x+=(mouseX-camera.position.x)*0.05;
    camera.position.y+=(-mouseY-camera.position.y)*0.05;
    camera.lookAt(scene.position);
    group.rotation.y-=0.005;
    renderer.render(scene,camera);
}
init();
animate();

