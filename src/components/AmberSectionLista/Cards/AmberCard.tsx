import React from "react";
import "./AmberCard.css";

type AmberCardProps = {
  empresa: string;
  descricao: string;
  repositorio: string;
  githubPages: string;
};

const AmberCard: React.FC<AmberCardProps> = ({
  empresa,
  descricao,
  repositorio,
  githubPages,
}) => {
  return (
    <div className="amber-card">
      <h3>{empresa}</h3>
      <p>{descricao}</p>
      <div>
        <a href={githubPages} target="_blank" rel="noopener noreferrer">
          Site
        </a>
        <a href={repositorio} target="_blank" rel="noopener noreferrer">
          Repositório
        </a>
      </div>
    </div>
  );
};

export default AmberCard;
