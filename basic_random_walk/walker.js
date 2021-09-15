class Walker {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.lastX = x;
        this.lastY = y;
        this.size = 10;
        this.velocity = createVector(1, 1);
    }

    update() {

        // this.velocity.x += random(-0.5, 0.5);
        // this.velocity.y += random(-0.5, 0.5);

        this.velocity.x += map(noise(this.x * 0.4, millis() * 0.005), 0, 1, -0.5, 0.5);
        this.velocity.y += map(noise(this.y * 0.01, millis() * 0.005), 0, 1, -0.5, 0.5);

        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

    draw() {
        line(this.lastX, this.lastY, this.x, this.y);
        this.lastX = this.x;
        this.lastY = this.y;
        // noStroke();
        // fill('rgba(0, 0, 0, 0.1)');
        // ellipse(this.x, this.y, this.size);
    }

}