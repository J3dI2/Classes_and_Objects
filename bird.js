class Bird {

    constructor(x, y) {
        var options = {
            'restitution':0.5,
            'friction':1,
            'density':1.5
        };
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.xPosition=x;
        this.yPosition=y;
        this.width=50;
        this.height=50;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke("blue");
        fill("green");
        rectMode(CENTER);
        rect(this.xPosition, this.yPosition, this.width,this.height);
        pop();
      }

}