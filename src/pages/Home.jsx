import React from "react";
import Stats from "../Components/Stats";
import Carousel from "../Components/Carousel";
import Services from "./Services";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Carousel></Carousel>
      <Stats></Stats>
      {
        data.map(data=><Card data={data}></Card>)
      }

      
     
    </div>
  );
};

export default Home;
