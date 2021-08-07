import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return robots.map((robo, index) => {
    return (
      <Card key={index} id={robo.id} name={robo.name} email={robo.email} />
    );
  });
};

export default CardList;
