import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppTheme from "./component/theme";
import Toolbar from "./component/toolbar";
import Main from "./component/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={AppTheme}>
          <Toolbar />
          <Main />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
