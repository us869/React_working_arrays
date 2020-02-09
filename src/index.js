import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import ContactCard from "./ContactCard";

class App extends Component {
  state = {};

  render() {
    const contact = {
      id: 1,
      name: "Alysia D'Hooge",
      gender: "Female",
      email: "adhooge0@wikipedia.org",
      phone: "1571022046",
      picture: "http://kvinod.com/old_ci/randomdata/images/women/1.jpg"
    };

    const contacts = [
      {
        id: 2,
        name: "Ruby Tothe",
        gender: "Male",
        email: "rtothe1@usa.gov",
        phone: "1983800201",
        picture: "http://kvinod.com/old_ci/randomdata/images/men/2.jpg"
      },
      {
        id: 3,
        name: "Reinald Tace",
        gender: "Male",
        email: "rtace2@stanford.edu",
        phone: "7704172788",
        picture: "http://kvinod.com/old_ci/randomdata/images/men/3.jpg"
      },
      {
        id: 4,
        name: "Phoebe Kingsnod",
        gender: "Female",
        email: "pkingsnod3@yellowbook.com",
        phone: "8137639930",
        picture: "http://kvinod.com/old_ci/randomdata/images/women/4.jpg"
      },
      {
        id: 5,
        name: "Sharai Manach",
        gender: "Female",
        email: "smanach4@scientificamerican.com",
        phone: "9459000368",
        picture: "http://kvinod.com/old_ci/randomdata/images/women/5.jpg"
      }
    ];

    const contactCards = contacts.map(c => (
      <ContactCard key={c.id} contact={c} />
    ));

    return (
      <div className="container">
        <h1 className="alert alert-info">Working with arrays</h1>

        <ContactCard contact={contact} />
        {contactCards}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
