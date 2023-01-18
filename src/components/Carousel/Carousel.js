import React from "react";
import "./Carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CaseCard from "../case-card/CaseCard";
import Heading from "../heading/Heading";

const Carousel = () => {
  return (
    <div className="carousel-wrapper">
      {/* <Heading heading="Some of my" /> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <CaseCard
            class="images"
            heading="This"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource1={require("../../assets/Case1-2.png")}
            imageSource2={require("../../assets/Case1-1.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            heading="That"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource1={require("../../assets/Case2-1.png")}
            imageSource2={require("../../assets/Case2-2.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            heading="Something"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource1={require("../../assets/Case3-2.png")}
            imageSource2={require("../../assets/Case3-1.png")}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
