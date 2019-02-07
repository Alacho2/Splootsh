function Bird(){
    this.y = height/2;
    this.x = 200;

    this.gravity = 0.8;
    this.lift = -20;
    this.velocity = 0;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 25, 25);
    }

    this.fly = function(){
        this.velocity += this.lift;
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;
        
        if(this.y > height){
            this.y = height;
            this.velocity = 0;
            this.gameover();
        }
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
            this.gameover();
        }
    }
    
    this.gameover = function(){
        fill(255, 0, 0);
        textAlign(CENTER);
        text("Game Over", width/2, height/2);
        location.reload();
    }

    
}