import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Activities from "./Pages/Activities";
import GuiderProfile from "./Pages/GuiderProfile";
import Home from "./Pages/Home/Home";
import TravelerProfile from "./Pages/TravelerProfile";
import GlobalStyles from "./Styles/GlobalStyle";
import AddSpace from "./Pages/AddSpace/AddSpace";

function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/activities">
              <Activities />
            </Route>
            <Route path="/traveler-profile">
              <TravelerProfile />
            </Route>
            <Route path="/guider-profile">
              <GuiderProfile />
            </Route>
            <Route path="/add-space">
              <AddSpace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
