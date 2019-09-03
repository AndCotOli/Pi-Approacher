import React, { Component } from "react";

import Animation from "./animation";

import styleClasses from "./form.module.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sides: 0,
      err: Infinity,
      pi: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let { value, name } = e.target;

    if (value === "") value = 0;
    value = parseInt(value.toString());
    this.setState({
      [name]: value
    });
  }

  getPi() {
    let r = 1;
    let n = this.state.sides;
    let a = 4 * Math.sqrt(2) * r;
    let b = 8 * r;
    let m = 4;
    while (m * 2 <= n) {
      b = (2 * a * b) / (a + b);
      a = Math.sqrt(a * b);

      m = m * 2;
    }

    let pi = (a / 2 / r + b / 2 / r) / 2;
    let err = Math.abs(a / 2 / r - b / 2 / r) / 2;

    this.setState({ pi, err });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.inputRef.current.value++;
      this.setState({ sides: this.inputRef.current.value++ });
      this.getPi();
    }, 1);
  }

  render() {
    this.inputRef = React.createRef();
    return (
      <div className={styleClasses.form_container}>
        <section className="form-container">
          <label>Maximum sides number </label>
          <input
            type="number"
            value={this.state.sides}
            onChange={this.handleChange}
            min="0"
            name="sides"
            ref={this.inputRef}
          />
          <button onClick={() => clearInterval(this.interval)}>
            Stop Animation
          </button>
        </section>
        <section className="result">
          <h1>In a {this.state.sides} sides polygon</h1>
          <p>
            The value of <b>PI</b> is {this.state.pi}
          </p>
          <p>With an error of {this.state.err}</p>
        </section>
        <Animation sides={this.state.sides} err={this.state.err} />
      </div>
    );
  }
}

export default Form;
