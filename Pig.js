class Pig {

    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.xPosition=x;
        this.yPosition=y;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER);
        rect(this.xPosition, this.yPosition, 50,50);
        pop();
      }

}