import React, { Component } from "react";
import p5 from "p5";

// import styleClasses from "./animation.module.css";

class Animation extends Component {
  componentDidMount() {
    this.sketch = new p5(p => {
      p.setup = () => {
        p.createCanvas(p.windowWidth / 2, p.windowHeight / 2).parent(
          this.canvasRef.current
        );
      };

      p.draw = () => {
        p.background(0);
        if (this.props.err === 0) p.noLoop();

        p.push();
        p.translate(p.width / 2, p.height / 2);
        polygon(0, 0, 100, this.props.sides);
        p.pop();
      };

      let polygon = (x, y, radius, points) => {
        let angle = p.TWO_PI / points;

        p.beginShape();
        for (let i = 0; i < p.TWO_PI; i += angle) {
          let sx = x + p.cos(i) * radius;
          let sy = y + p.sin(i) * radius;
          p.vertex(sx, sy);
        }
        p.endShape(p.CLOSE);
      };
    });
  }

  render() {
    this.canvasRef = React.createRef();
    return (
      <div>
        <h3>My animation</h3>
        <p>{this.props.sides}</p>
        <p>{this.props.err}</p>
        <div ref={this.canvasRef} />
      </div>
    );
  }
}

export default Animation;
