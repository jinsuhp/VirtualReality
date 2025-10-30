class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,4) /20 ;

        
        this.obj = document.createElement("a-entity");


        let base = document.createElement("a-cone");
        base.setAttribute("position", "0 1 -3")
        base.setAttribute("color", "8807B");
        base.setAttribute("radius", "2");
        this.obj.append(base);

        let tip = document.createElement("a-cone");
        tip.setAttribute("position", "0 3 -3");
        tip.setAttribute("segments-Radical", "3");
        tip.setAttribute("rotation", "-90 0 0");
        this.obj.append(tip);
    
        
        scene.append(this.obj)
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z})
    }
}