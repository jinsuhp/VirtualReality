class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-box");
        base.setAttribute("position", "0 1 0");
        base.setAttribute("color", "brown");
        base.setAttribute("height", "1.8");
        base.setAttribute("width", "1.8");
        base.setAttribute("depth", "1.8");
        this.obj.append(base);

        let roof = document.createElement("a-cylinder");
        roof.setAttribute("color", "black");
        roof.setAttribute("position", "0 2.65 0");
        roof.setAttribute("segments-Radial", "3");
        roof.setAttribute("rotation", "-90 0 0")
        roof.setAttribute("height", "2");
        roof.setAttribute("radius", "1.5");
        this.obj.append(roof);

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj)

    }
}