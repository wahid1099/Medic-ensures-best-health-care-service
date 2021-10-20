import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import ServiceDetails from "./Component/Services/ServiceDetails";
import AboutPage from "./Pages/Aboutpage/AboutPage";
import Service from "./Component/Services/Service";
import Services from "./Component/Services/Services";
import ContactPage from "./Pages/Contact/ContactPage";
import NoteFound from "./Pages/NotFound/NoteFound";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/Login/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/Home'>
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>

        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
        <PrivateRoute exact path="/:serviceid">
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>
        <Route path="*">
          <NoteFound></NoteFound>
        </Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
