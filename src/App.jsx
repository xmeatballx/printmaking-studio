import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import { Upload } from "./pages/upload";
import { Studio } from "./pages/studio";
import { ImageEditor } from "./pages/ImageEditor";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/image">
          <ImageEditor />
        </Route>
        <Route path="/studio">
          <Studio />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
