class Raindrop{
    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.z = random(0,20);
       // this.len = 20;
    }
    fall(){
        this.y = this.y + 10;
        if(this.y>height){
            this.y = -10;
        }
    }
    display(){
        strokeWeight(4);
        line(this.x,this.y,this.x,this.y + 20);
    }
}