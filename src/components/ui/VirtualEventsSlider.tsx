"use client";

import React, { useState } from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCoins, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SelectUI from "./SelectUI";
import { DateRangePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

const VirtualEventsSlider = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 4 slides at a time
    slidesToScroll: 3,
    lazyLoad: "progressive" as LazyLoadTypes,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2, // Show 3 slides at a time for smaller screens
          slidesToScroll: 2,
        },
      },
    ],
  };
  const arr = [
    {
      title: "Kenya Tech Summit",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Global Startup Ecosystem",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg4.jpeg",
    },
    {
      title: "Cyber Security Expo",
      startDate: "Aug 19",
      endDate: "Aug 21",
      startTime: "8:00 AM",
      location: "Kilimanjaro cafe",
      price: "Ksh. 1050",
      organizer: "@iLabAfrica",
      endTime: "6:00 PM",
      image: "/assets/images/event-bg3.webp",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
    {
      title: "Data management and analysis",
      startDate: "Jun 24",
      endDate: "Jun 27",
      startTime: "10:00 AM",
      location: "The Sarit Expo Center",
      price: "Ksh. 850",
      organizer: "Fifin",
      endTime: "12:00 PM",
      image: "/assets/images/event-bg2.jpeg",
    },
  ];
  return (
    <section className="mb-10">
      <div className="flex mt-16  mx-10 justify-between items-center">
        <h2 className=" text-3xl font-serif text-primary-500">
          Virtual Events in Nairobi
        </h2>
        <Button className="bg-primary-500 text-white">View more</Button>
      </div>
      <div className="px-10">
        <Divider className="mt-5 mb-10 " />
      </div>
      <Slider {...settings}>
        {arr.map((item, index) => (
          <div
            className="cursor-grab pt-1 mx-2"
            key={index}
            onClick={() => console.log("clicked")}
          >
            <CardContainer className="cursor-pointer">
              <CardBody className=" relative group/card border-primary-100 lg:w-[28rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-primary-500"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-primary-300 w-full  flex items-center justify-between text-sm mt-2"
                >
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faCalendar}
                    />
                    <div>
                      <time>{item.startDate}</time> -
                      <time> {item.endDate}</time>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faLocationDot}
                    />
                    <span>{item.location}</span>
                  </div>
                </CardItem>
                <CardItem
                  as="div"
                  translateZ="60"
                  className="text-primary-300 w-full  flex items-center justify-between text-sm mt-2"
                >
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faClock}
                    />
                    <div>
                      <time>{item.startTime}</time> -<time>{item.endTime}</time>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center basis-1/2">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      icon={faCoins}
                    />
                    <span>{item.price}</span>
                  </div>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                  <CardItem
                    translateZ={80}
                    as="p"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className=" text-primary-500 "
                  >
                    {item.organizer}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default VirtualEventsSlider;
