import React from "react";
import "./AmberSectionLista.css";
import { dados } from "./dados";
import AmberCard from "./Cards/AmberCard";

const AmberSectionLista: React.FC = () => {
  return (
    <section className="amber-section">
      <h2>Lista Amber</h2>
      <div className="amber-grid">
        {dados.map((item, index) => (
          <AmberCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default AmberSectionLista;
