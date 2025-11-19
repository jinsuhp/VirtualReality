class Wall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-box");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        this.obj.setAttribute("src","#hay");
        scene.append(this.obj);
    }
}