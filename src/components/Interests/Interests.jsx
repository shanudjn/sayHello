import React from "react";
import LinkButton from "../LinkButton/LinkButton";

function Interests({ interests }) {

  return (
    <div className="flex flex-col my-8">
      {interests.map((interest) => (
        <LinkButton title={interest.name} id={interest.id}/>
      ))}
    </div>
  );
}

export default Interests;
