import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Welcome from "./Components/WelCome";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/quiz' component={Quiz} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
