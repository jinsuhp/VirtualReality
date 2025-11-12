class UFO{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,4) /20 ; 

        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-torus");
        base.setAttribute("position", "0 1 -3");
        base.setAttribute("rotation","90 0 0");
        base.setAttribute("color", "black");
        base.setAttribute("radius", "4");
        base.setAttribute("depth", "2");
        this.obj.append(base);

        let inside = document.createElement("a-sphere");
        inside.setAttribute("position", "0 1 -3");
        inside.setAttribute("radius", "2");
        inside.setAttribute("color", "cyan");
        this.obj.append(inside);

        let outer = document.createElement("a-torus");
        outer.setAttribute("position", "0 1 -3");
        outer.setAttribute("radius", "3")
        outer.setAttribute("radius-tubular", "0.5");
        outer.setAttribute("rotation", "90 0 0");
        outer.setAttribute("color", "white");
        this.obj.append(outer);

        
        let light = document.createElement("a-cone");
        light.setAttribute("position", "0 -5 -3");
        light.setAttribute("radius-top", "1")
        light.setAttribute("height", "10");
        light.setAttribute("color", "green");
        light.setAttribute("opacity", "0.60");
        this.obj.append(light);
    

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj);
    }
    invade(){
        this.y -= this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        if(this.y < 0){
          this.y = 0;  
    }
    }
    
}