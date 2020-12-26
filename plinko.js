class Plinko
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		if(framCount%60===0){
            particles.push(new Particles(random(width/2-10, width/2+10), 10,10))
        }
		World.add(world, this.body);

    }
}