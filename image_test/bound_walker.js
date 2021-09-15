class BoundWalker {
    constructor(startX, startY, squareSize, col) {
        this.positionX = startX + squareSize / 2;
        this.positionY = startY + squareSize / 2;
        this.startX = startX;
        this.startY = startY;
        this.endX = startX + squareSize;
        this.endY = startY + squareSize;
        this.speed = map(col, 0, 255, 1, 20);
        this.speed = -this.speed;
        this.velocity = createVector(0, 0, 0)
        this.fillColor = col;
        this.totalSteps = 3600;
        this.stepsTaken = 0;
    }

    update() {
        if (this.stepsTaken < this.totalSteps) {
            var vX = 0;
            var vY = 0;
            var num = random(2);
            num = floor(num);
            switch (num) {
                case 0:
                    vX = this.speed;
                    break;
                case 1:
                    vX = -this.speed;
                    break;
            }

            num = random(2);
            num = floor(num);
            switch (num) {
                case 0:
                    vY = this.speed;
                    break;
                case 1:
                    vY = -this.speed;
                    break;
            }
            this.velocity.x = vX;
            this.velocity.y = vY;

            this.collideBounds();

            this.move();
            this.stepsTaken++;
        } 

    }

    collideBounds() {
        if (this.positionX <= this.startX || this.positionX >= this.endX) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.positionY <= this.startY || this.positionY >= this.endY) {
            this.velocity.y = -this.velocity.y;
        }
    }

    move() {
        this.positionX += this.velocity.x;
        this.positionY += this.velocity.y;
    }

    draw() {
        fill(this.fillColor);
        noStroke();
        rect(this.positionX, this.positionY, 1, 1);
    }

}