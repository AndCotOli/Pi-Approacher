import React, { Component } from "react";

import Form from "./form";
import Formula from "./formula";

import styleClasses from "./app.module.css";

class App extends Component {
  render() {
    return (
      <div className={styleClasses.app}>
        <h1 className={styleClasses.header}>Pi Approacher Project</h1>
        <main className={styleClasses.content}>
          <Form />
          <Formula />
        </main>
      </div>
    );
  }
}

export default App;
