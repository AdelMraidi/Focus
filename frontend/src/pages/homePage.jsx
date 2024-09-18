import React from "react";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import ButtonAfficher from "../components/buttonAfficher";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="bgimage">
        <h2 className="text-center">Bienvenue sur Freelancer Focus</h2>
        <ButtonAfficher />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
