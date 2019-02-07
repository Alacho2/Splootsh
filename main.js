var bird;
var pointCount;
var pipes = [];

function setup() {
    createCanvas(600, 400);
    bird = new Bird();
    pipes.push(new Pipe());
    pointCount = new Point();
}

function draw(){
    background(0);
    
    for(var i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            bird.gameover();
            location.reload();
        }
        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }
    }
    bird.update();
    bird.show();

    if(frameCount % 45 == 0){
        pipes.push(new Pipe());
    }

    

    pointCount.show();
}

function keyPressed() {
    if(key == ' '){
        bird.fly();
    }
}