let scene, clouds = [], ufos = [];
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);

window.addEventListener("DOMContentLoaded",function(){
  scene = document.querySelector("a-scene")
 
  for(let i = 0; i < 25; i++){
      let x = rnd(-100,100);
      let y = rnd(30,45);
      let z = rnd(-100,100);
      let ufo = new UFO(x,y,z);
      ufos.push(ufo);
    }
  


  loop();
})

function loop(){
  for(let ufo of ufos){
    ufo.invade()
  }
    
  window.requestAnimationFrame(loop);
}