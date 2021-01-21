class chain {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:2,
            length:50


        }
        this.chain=constraint.create(options)
        World.add(world,this.chain)
    }
display()
{
    var a = this.chain.bodyA.position
    var b = this.chain.bodyB.position
    strokeWeight(5)
    line(a.x,a.y,b.x,b.y)
}
    
}