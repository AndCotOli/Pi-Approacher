import React, { Component } from "react";

import Form from "./form";

import styleClasses from "./app.module.css";

class App extends Component {
  render() {
    return (
      <div className={styleClasses.app}>
        <h1 className={styleClasses.header}>Pi Approacher Project</h1>
        <main className={styleClasses.content}>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
