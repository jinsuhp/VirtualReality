/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/
let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let maze = [
  "xx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", 
  "xx------------------------------x",
  "xx--xxxxx---xxxxxxxxxx-x--xxxxx-x",
  "xx--x-x-x-xu--xxxxxxx--x--xxxxx-x",
  "xxu-x-x-x-xxx--xxxxx---x--xxxxx-x",
  "xx--x-x-x------xxxx--x-x---xxx--x",
  "xx--x---xxxxxxxxxxx--xxxxxxxxxxxx",
  "xx-------xxxxxxxxxx--xxxxxxxxxxxx",
  "xxxxxxu--xxxxxxxxxx--xxxxxxxxxxxx",
  "xxxxxxxx-xxxxxxx--------------xxx",
  "xxxxxxxx---xxxx-u-xxxxxxxxxxxuxxx",  
  "xxxxxxxxxx-xxxx---xxxxxxxxxx--xxx",    
  "x-----xxxx-xxx----xxxxxxxxxx--xxx",
  "x--xx-xxxx-xxx-xxxxxx--xxxxx--xxx",
  "x--xx-xxxx-xx-----xxx--xxxxx--xxx",
  "x--xx-xxxx----uxx-xxx--xxxxx--xxx",
  "x--xx-xxxx---xxxx-xxx---------xxx",
  "x--xx-xxxx---xxxx-xxx--xxxx--xxxx",
  "x-uxx-xxxx---xxxx-xxx--xxxxxuxxxx",
  "x--xx-xxxx---xxxxxxxxx-xxxxx-xxxx",
  "x--xx-xxxx---xxxxxxxxxuxxxxx-xxxx",
  "x--xx-xxxx---------xxx-xxxxx-xxxx",
  "x--xxuxxxx---xxxxxxx---xxxxx-xxxx",
  "x--xx-xxxx-uxxxxxxxx-xxxxxxx-xxxx",
  "x--xx-xxxx-xxxxxxxxxuxxxxxxx--xxx",
  "x--xx-xxxx-xxxxxxxxx------xxx-xxx",
  "x-----------xxxxx----xxxx-xxx-xxx",
  "xxxx-xxxxxx-xxxxxxxxxxxxx------xx",
  "x---uxxxxxx-xxxxxxxxxx----xxxxxxx",
  "x--xxxxxxxx-xxxxxxxxxx----xxxxxxx",
  "x--xxxxxxxx-xxxxxxxxxx-x-uxxxxxxx",
  "x------xxxx--xxxxxxx------------x",
  "xxxxx--xxxxxxxxxxxxx-u-xxxxxxx--x",
  "x------xxxxxxxxxxxxx--------xx--x",
  "x-xxxxxxxxxxxxxxxxxxxxxxxxx-xx--x",
  "x------xxxx-----------------xxxxx",
  "xxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxx",
  "---------------------------------",
  "---------------r-----------------"
];
/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene, ufos = [], rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Wall(c,1,r);
      }
      if(cols[c] == "u"){
        let ufo = new UFO(c,7,r);
        ufos.push(ufo);
      }
      if(cols[c] == "r"){
        let rocket = new Rocket(c,12.5,r);
        rockets.push(rocket);
      }
    
  }
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
}
  loop();

})

function loop(){
  for (let ufo of ufos){
    ufo.invade();
  }
  window.requestAnimationFrame(loop);
}