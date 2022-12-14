import React from "react";
import "./Carousel.scss";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CaseCard from "../case-card/CaseCard";

const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <CaseCard
            class="images"
            heading="This"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource1={require("../../assets/case1.png")}
            imageSource2={require("../../assets/case1.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            heading="That"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource1={require("../../assets/case1.png")}
            imageSource2={require("../../assets/case1.png")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CaseCard
            class="images"
            heading="Something"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource1={require("../../assets/case1.png")}
            imageSource2={require("../../assets/case1.png")}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
