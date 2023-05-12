import React from "react";
import Image from "../../components/Image/Image";
import Interests from "../../components/Interests/Interests";
import './homepage.css'

function HomePage() {
  const interests = [
    {
      id: 1,
      name: "music",
    },
    {
      id: 2,
      name: "design",
    },
    {
      id: 3,
      name: "fiction books",
    },
    {
      id: 4,
      name: "writing",
    },
  ];
  return (
    <div className="homepage">
      <Image />
      <h1 className="text-3xl font-bold mt-8">shahazad</h1>
      <Interests interests={interests} />
    </div>
  );
}

export default HomePage;
