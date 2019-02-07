function Point(){
    this.point = 0;

    this.show = function() {
        textSize(50);
        fill(0, 255, 0);
        text(this.point, width/2, 50);
    }

    this.addPoint = function() {
        this.point++;
    }
}