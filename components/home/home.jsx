import React from "react";
import "./home.css";
import Image from "next/image";
import ImageSlider from "./slider";
import Carousel from "./Carousel";

const HomePage = ({ params }) => {
  const images = [
    { src: "/course.jpg", bg: "#552273" },
    { src: "/course2.jpg", bg: "#272c6c" },
    { src: "/course3.jpg", bg: "#194c24" },
    { src: "/course4.jpg", bg: "#194c24" },
    { src: "/course5.jpg", bg: "#194c24" },
    { src: "/course6.jpg", bg: "#f6a03c" },
    { src: "/course7.jpg", bg: "#194c24" },
    { src: "/course8.jpg", bg: "#542272" },
    { src: "/course9.jpg", bg: "#542272" },
    { src: "/course10.jpg", bg: "#272c6c" },
    { src: "/course11.jpg", bg: "#f6a03c" },
  ];
  return (
    <div className="home">
      <video id="background-video" autoPlay loop muted poster="/UGDVposter.png">
        <source src="UGDvideo.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <h1>Bienvenidos a UGD Virtual</h1>
      </div>
      {/* <h2>Liberando conocimientos, potenciando futuros</h2> */}

      <main>
        <div
          style={{
            // padding: "50px",
            paddingBottom: "100px",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#1C3564",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "38px",
              padding: "50px",
            }}
          >
            Carreras de UGD Virtual <br /> Educación que se adapta a vos{" "}
          </p>
          <ImageSlider params={params} images={images} />
          {/* <Carousel images={images} params={params} /> */}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
