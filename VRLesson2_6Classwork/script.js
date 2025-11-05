let scene, mechs = [], mechTemplate;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  
  for(let i = 0; i < 25; i++){
    x = rnd(-100,100);
    z = rnd(-100,100);

    let m = new Mech(x,0,z);
    mechs.push(m);
  }
  
 
  loop();
})


function loop(){


  window.requestAnimationFrame( loop );
}
