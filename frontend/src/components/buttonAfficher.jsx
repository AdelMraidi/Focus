import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ButtonAfficher = () => {
  return (
    <p className="text-center">
      <Link to={"/Taches"} variant="primary" size="lg" active>
        Afficher les tâches
      </Link>
    </p>
  );
};

export default ButtonAfficher;
