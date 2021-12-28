import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as AuthProvider } from "./context/AuthContext";

// Scroll to top
import ScrollToTop from "./components/ScrollToTop";

// Pages
import LandingPage from "./components/pages/landingPage/LandingPage";
import Construction from "./components/pages/constructionPage/Construction";
import Interior from "./components/pages/interiorPage/Interior";
import Renovation from "./components/pages/renovationPage/Renovation";
import About from "./components/pages/aboutPage/About";
import Gallery from "./components/pages/gallery/Gallery";
import Login from "./components/pages/admin/Login";
// import Admin from "./components/pages/admin/Admin";
import Orders from "./components/pages/admin/Orders";
// Footer
import Footer from "./components/Footer";

// Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={Login} />
        <Route path="/admin/orders" exact component={Orders} />
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
      </Switch>
    </Router>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
