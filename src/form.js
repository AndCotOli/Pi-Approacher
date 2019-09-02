import React, { Component } from "react";

import styleClasses from "./form.module.css";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sides: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let { value } = e.target;

    if (value === "") value = 0;
    value = parseInt(value.toString());
    this.setState({
      sides: value
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

    let data = {
      r,
      n,
      a,
      b,
      m,
      pi,
      err
    };

    return data;
  }

  render() {
    const { pi, err } = this.getPi();
    return (
      <aside className={styleClasses.form_container}>
        <section className="form-container">
          <label>Maximum sides number</label>
          <input
            type="number"
            value={this.state.sides}
            onChange={this.handleChange}
          />
        </section>
        <section className="result">
          <h1>In a {this.state.sides} sides polygon</h1>
          <p>
            The value of <b>PI</b> is {pi}
          </p>
          <p>With an error of {err}</p>
        </section>
      </aside>
    );
  }
}

export default Form;
