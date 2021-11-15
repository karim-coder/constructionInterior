import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Scroll to top
import ScrollToTop from "./components/ScrollToTop";

// Pages
import LandingPage from "./components/pages/landingPage/LandingPage";
import Construction from "./components/pages/constructionPage/Construction";
import Interior from "./components/pages/interiorPage/Interior";
import Renovation from "./components/pages/renovationPage/Renovation";
import About from "./components/pages/aboutPage/About";
import Gallery from "./components/pages/gallery/Gallery";
import Admin from "./components/pages/admin/Admin";
// Footer
import Footer from "./components/Footer";

// import SignIn from "./components/pages/signupPage/signIn";
// import SignUp from "./components/pages/signupPage/signUp";

import Navbar1 from "./components/Navbar1";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState("user");
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/login/login" exact component={Admin} />
        <div>
          <ScrollToTop />
          <Navbar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/construction" exact component={Construction} />
          <Route path="/interior-design" exact component={Interior} />
          <Route path="/renovation" exact component={Renovation} />
          <Route path="/about" exact component={About} />
          <Route path="/interior-design/gallery" exact component={Gallery} />
          <Footer />
        </div>
        {/* <Route exact path="/" exact component={SignIn} />
            <Route exact path="/" exact component={SignUp} /> */}
      </Switch>
    </Router>
  );
}

export default App;
