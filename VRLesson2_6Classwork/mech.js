class Mech{
    constructor(x,y,z){
        this.x;
        this.y;
        this.z;
        this.obj = mechs.cloneNode(true);

        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});

        scene.append(this.obj)
    }
}