import React from "react";
import Stats from "../Components/Stats";
import Carousel from "../Components/Carousel";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { Helmet } from "react-helmet-async";
import Client from "../Components/Client";
import News from "../Components/News";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="grid grid-cols-1 justify-center items-center">
      <Helmet>
        <title>Home | BD Career</title>
        <meta
          name="description"
          content="Get in touch with BD Career. Contact us for inquiries or support."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Carousel></Carousel>
      <Stats></Stats>
      <div>
        <h1 className="text-center text-2xl font-semibold pt-5">
          Our Services
        </h1>
        <h2 className="text-center text-3xl font-bold py-5">
          Empower Your Career Journey for <br /> Greater{" "}
          <span className="text-green-500">Success</span>{" "}
        </h2>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 px-3">
          {data.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))}
        </div>
       
        <div className="text-center">
          <Link
            to="/services"
            className=" btn text-xl  bg-blue-500 text-white px-5 py-2"
          >
            See All
          </Link>
        </div>
      </div>
      <News></News>
      <div>
        <h1 className="text-center text-3xl font-semibold pt-5 ">
          Satisfied Customers
        </h1>
        <Client></Client>
      </div>
    </div>
  );
};

export default Home;
