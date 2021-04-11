import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styles
import "./tailwind.output.css";
//components
import Header from "./components/ui/Header";
import Movies from "./components/movies/Movies";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/:movieType" component={Movies} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
