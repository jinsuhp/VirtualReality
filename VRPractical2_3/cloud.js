class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let sphere1 = document.createElement("a-sphere");
        sphere1.setAttribute("color", "white");
        sphere1.setAttribute("position", "0 7 0");
        sphere1.setAttribute("radius", "1");
        this.obj.append(sphere1);

        let sphere2 = document.createElement("a-sphere");
        sphere2.setAttribute("color", "white");
        sphere2.setAttribute("position", "1.6 7 0");
        sphere2.setAttribute("radius", "1");
        this.obj.append(sphere2);

        let sphere3 = document.createElement("a-sphere");
        sphere3.setAttribute("color", "white");
        sphere3.setAttribute("position", "-1.6 7 0");
        sphere3.setAttribute("radius", "1");
        this.obj.append(sphere3);

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj)
  }
  
}