"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import data from "@/data/data";
// import "./slider.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ImageSlider({ images, params }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerRow = 5;
  const [region, setRegion] = useState("ar");

  useEffect(() => {
    params.params.locales === "us" && setRegion("us");
    // const slideShowInterval = setInterval(() => {
    //   if (currentIndex < images.length - itemsPerRow) {
    //     setCurrentIndex((prevIndex) => prevIndex + 1);
    //   } else {
    //     setCurrentIndex(0);
    //   }
    // }, 2000); // Change the interval as needed (in milliseconds)

    return () => {
      // clearInterval(slideShowInterval);
    };
  }, [currentIndex]);

  const handleNextClick = () => {
    if (currentIndex < images.length - itemsPerRow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      style={{
        marginTop: "50px",
        // border: "1px solid black",
      }}
    >
      <div>
        <Carousel
          showDots={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          rewind={true}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
        >
          {data.map((course, index) => {
            return (
              <Link href={`${region}/courses/${course.path}`} key={index + 9}>
                <div
                  key={"landing-carousel-image-" + index}
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "400px",
                    aspectRatio: "3/4",
                    background: course.bg,
                  }}
                >
                  <Image src={course.image} fill />
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
