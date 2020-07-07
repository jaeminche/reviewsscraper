import React from "react";
import {
  BrowserRouter as Router
  // Switch,
  // Route,
  // Redirect
} from "react-router-dom";
import { Navbar, Footer } from "./components/index";
// import { MainPage, DashboardPage, PostsPage, SinglePostPage } from "./pages";
import { deviceSize } from "./components/responsiveUtil/device";
import { useMediaQuery } from "react-responsive";
import routes from "./routes/index";

const App = () => {
  const ismobile = useMediaQuery({ maxDeviceWidth: deviceSize.mobile });
  // console.log("==002", ismobile);
  return (
    <Router>
      <Navbar ismobile={ismobile} />
      {routes(ismobile)}
      <Footer ismobile={ismobile} />
    </Router>
  );
};

export default App;
