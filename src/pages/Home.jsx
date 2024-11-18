import React, {  } from "react";
import Stats from "../Components/Stats";
import Carousel from "../Components/Carousel";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";


const Home = () => {
  

  const data = useLoaderData();
  return (
    <div>
      <Carousel></Carousel>
      <Stats></Stats>
      <div>
        <h1 className="text-center text-2xl font-semibold pt-5">Our Services</h1>
        <h2 className="text-center text-3xl font-bold py-5">Empower Your Career Journey for <br /> Greater <span className="text-green-500">Success</span> </h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
          {data.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
