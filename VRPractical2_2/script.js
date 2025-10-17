let scene;
let car;
let poke;
let rocket;
let dude;
let sun;


window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    poke = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");

    car.x = 0;
    car.xd = 0.01;

    poke.x = 0;
    poke.xs = 1;
    
    rocket.y = 0;
    rocket.ys = 0.05;

    dude.s = 0;
    dude.sg = 0.01;

    sun.s = 0;
    sun.sg = 0.005;
    loop();
})

function loop(){
    car.x += car.xd;
    car.setAttribute("position",{x:-car.x, y:0, z:0});

    poke.x += poke.xs;
    poke.setAttribute("rotation",{x:poke.x, y:0, z:0});

    rocket.y += rocket.ys;
    rocket.setAttribute("position", {x:0, y:rocket.y, z:0});

    dude.s += dude.sg;
    dude.setAttribute("scale", {x:dude.s,y:dude.s,z:dude.s});

    sun.s += sun.sg;
    sun.setAttribute("opacity", sun.s);
  window.requestAnimationFrame(loop);
}