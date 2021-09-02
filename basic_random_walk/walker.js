class Walker {
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
    }

    update() {
        var num = random(4);
        num = floor(num);
        switch (num) {
            case 0:
                this.positionX--;
                break;
            case 1:
                this.positionY--;
                break;
            case 2: 
                this.positionX++;
                break;
            case 3:
                this.positionY++;
                break;
            default:
                break;
        }
    }


    draw() {
        fill(51);
        noStroke();
        rect(this.positionX, this.positionY, 2, 2);
    }
    
}