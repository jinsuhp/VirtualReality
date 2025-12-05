let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, balls = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  gem = document.getElementById("gem");


  /*
    Challenge 1
    Add an eventlistener that associates user pressing the keys with the following actions.
    1) Rotate the gem in the positively on the z-axis
    2) Rotate the gem in the negatively on the z-axis
    3) Rotate the gem in the positively on the x-axis
    4) Rotate the gem in the negatively on the x-axis
    5) Rotate the gem in the positively on the y-axis
    6) Rotate the gem in the negatively on the y-axis
    Note: Copy and paste!
  */
  window.addEventListener("keypress",function(e){
    console.log(e.key);
  if(e.key == "d"){
    gem.object3D.rotation.z += 2.5;
  }
  else if(e.key == "a"){
    gem.object3D.rotation.z -= 2.5;
  }
  else if(e.key == "w"){
    gem.object3D.rotation.x += 2.5;
  }
  else if(e.key == "s"){
    gem.object3D.rotation.x -= 2.5;
  }
  else if(e.key == "q"){
    gem.object3D.rotation.y += 2.5;
  }
  else if(e.key == "r"){
    gem.object3D.rotation.y -= 2.5;
  }

  })
  /*  Challenge 2
     When the user clicks in the window, resets the gem rotation to (0,0,0)
  */ 
 window.addEventListener("click", function(){
  gem.object3D.rotation.z = 0;
  gem.object3D.rotation.x = 0;
  gem.object3D.rotation.y = 0;
 })
})
