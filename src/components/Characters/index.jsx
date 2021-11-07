import React from "react";
import ChardCard from "../ChardCard";

function index({ characterList }) {
  return (
    <div>
      <p>Meus personagens: </p>
      <div className="list">
        {characterList.map((element) => (
          <ChardCard
            key={element.id}
            name={element.name}
            img={element.image}
            status={element.status}
          ></ChardCard>
        ))}
      </div>
    </div>
  );
}

export default index;
