function Pipe() {
    this.space = 50;
    this.top = random(height/2);
    //this.bottom = height - (this.top + 100);
    this.bottom = (height- this.top) - 100;
    this.x = width;
    this.w = 20;
    this.speed = 5;
    this.highlight = false;

    this.hits = function(bird){
        if(bird.y <= this.top || bird.y >= height-this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight = true;
                return true;
            }
        }
        return false;
    }
    
    this.show = function() {
        fill(255);
        if(this.highlight){
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.positionPoint = function() {
        if(this.x == 180){
            pointCount.addPoint();
        }
    }

    this.update = function() {
        this.x -= this.speed;
        this.positionPoint();
    }

    this.offscreen = function() {
        if(this.x < -this.w){
            return true;
        } else {
            return false;
        }
    }
}