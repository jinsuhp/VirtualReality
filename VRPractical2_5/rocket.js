class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-cylinder");
        base.setAttribute("color", "gray");
        base.setAttribute("position", "0 -5 0");
        base.setAttribute("radius", "1");
        base.setAttribute("height", "5");
        this.obj.append(base);

        let tip = document.createElement("a-cone");
        tip.setAttribute("position", "0 0 0");
        tip.setAttribute("rotation", "0 90 0");
        tip.setAttribute("height", "5");
        this.obj.append(tip);

        let toptip = document.createElement("a-cylinder");
        toptip.setAttribute("position", "0 2 0");
        toptip.setAttribute("height", "5");
        toptip.setAttribute("radius", "0.05");
        toptip.setAttribute("color", "yellow");
        this.obj.append(toptip);

        let fire = document.createElement("a-cone");
        fire.setAttribute("color","orange");
        fire.setAttribute("position","0 -10 0");
        fire.setAttribute("rotation","-180 0 0");
        fire.setAttribute("radius-top", "0");
        fire.setAttribute("radius-bottom","0.5");
        fire.setAttribute("height","5");
        this.obj.append(fire);
    
        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj)
    }
}