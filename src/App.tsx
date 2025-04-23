import React from "react";
import GreetingSection from "./components/greeting-section/greeting-section";
import SomethingAboutMe from "./components/something-about-me/something-about-me";
import SolveProblem from "./components/solve-problem/solve-problem";
import CreativeDevelopment from "./components/creative-development/creative-development";
import Systems from "./components/systems/systems";
import Communication from "./components/communication/communication";
import DataReport from "./components/data-report/data-report";
import MediumArticles from "./components/medium-articles/medium-articles";
import Contacts from "./components/contacts/contacts";
import "./styles/base.css";

const App: React.FC = () => {
  return (
    <main>
      <GreetingSection />
      <SomethingAboutMe />
      <SolveProblem />
      <CreativeDevelopment />
      <Systems />
      <Communication />
      <DataReport />
      <MediumArticles />
      <Contacts />
    </main>
  );
};

export default App;
