let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createTree(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,30);
    let y = rnd(5,20);
    let z = rnd(-20,20);
    createCloud(x,y,z);
  }
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
   for(let i = 0; i<50; i++){
    let x = rnd(-20,30);
    let z = rnd(-20,20);
    createHouse(x,0,z)
   }
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
function createCloud(x, y, z){
  let cloud = document.createElement("a-entity");

  let sphere1 = document.createElement("a-sphere");
  sphere1.setAttribute("color", "lightblue");
  sphere1.setAttribute("position", "0 7 0");
  sphere1.setAttribute("radius", "1");
  cloud.append(sphere1);

  let sphere2 = document.createElement("a-sphere");
  sphere2.setAttribute("color", "lightblue");
  sphere2.setAttribute("position", "1.5 7 0");
  sphere2.setAttribute("radius", "1");
  cloud.append(sphere2);

  let sphere3 = document.createElement("a-sphere");
  sphere3.setAttribute("color", "lightblue");
  sphere3.setAttribute("position", "-1.5 7 0");
  sphere3.setAttribute("radius", "1");
  cloud.append(sphere3);

  cloud.setAttribute("position", {x:x, y:y, z:z});
  scene.append(cloud)
}
/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createHouse(x, y, z){
  let house = document.createElement("a-entity");

  let base = document.createElement("a-box");
  base.setAttribute("color", "brown");
  base.setAttribute("position", "0 1 0");
  base.setAttribute("height", "2");
  base.setAttribute("width", "3");
  base.setAttribute("depth", "3")
  house.append(base);

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("color", "red");
  roof.setAttribute("position", "0 2.85 0");
  roof.setAttribute("segments-Radial", "3");
  roof.setAttribute("rotation", "-90 0 0")
  roof.setAttribute("height", "3");
  roof.setAttribute("radius", "1.7");
  house.append(roof);

  house.setAttribute("position", {x:x, y:y, z:z});
  scene.append(house)
}

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



