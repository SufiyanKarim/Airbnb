import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import icons from "../assets/pagesImages/icons.webp";
import rooms from "../assets/pagesImages/rooms.jpg";
import amazingView from "../assets/pagesImages/amazingView.jpg";
import arctic from "../assets/pagesImages/arctic.jpg";
import bedbreakfast from "../assets/pagesImages/bedbreakfast.jpg";
import cabins from "../assets/pagesImages/cabins.jpg";
import castles from "../assets/pagesImages/castles.jpg";
import cities from "../assets/pagesImages/cities.jpg";
import countryside from "../assets/pagesImages/countryside.jpg";
import mansions from "../assets/pagesImages/mansions.jpg";
import newImage from "../assets/pagesImages/new.jpg";
import OMG from "../assets/pagesImages/OMG.jpg";
import trending from "../assets/pagesImages/trending.jpg";
import surfing from "../assets/pagesImages/surfing.jpg";
import adepted from "../assets/pagesImages/adepted.jpg";
import aframes from "../assets/pagesImages/aframes.jpg";
import amazingPool from "../assets/pagesImages/amazingPool.jpg";
import barns from "../assets/pagesImages/barns.jpg";
import beach from "../assets/pagesImages/beach.jpg";
import beachfront from "../assets/pagesImages/beachfront.jpg";
import boats from "../assets/pagesImages/boats.jpg";
import campers from "../assets/pagesImages/campers.jpg";
import camping from "../assets/pagesImages/camping.jpg";
import casasparticulares from "../assets/pagesImages/casasparticulares.jpg";
import caves from "../assets/pagesImages/caves.jpg";
import chefsKitchens from "../assets/pagesImages/chefsKitchens.jpg";
import containers from "../assets/pagesImages/containers.jpg";
import creativespaces from "../assets/pagesImages/creativespaces.jpg";
import cyclandicHomes from "../assets/pagesImages/cyclandicHomes.jpg";
import dammusi from "../assets/pagesImages/dammusi.jpg";
import desert from "../assets/pagesImages/desert.jpg";
import Design from "../assets/pagesImages/Design.jpg";
import domes from "../assets/pagesImages/domes.jpg";
import earthhomes from "../assets/pagesImages/earthhomes.jpg";
import farms from "../assets/pagesImages/farms.jpg";
import golfing from "../assets/pagesImages/golfing.jpg";
import grandpianos from "../assets/pagesImages/grandpianos.jpg";
import hanoks from "../assets/pagesImages/hanoks.jpg";
import historicalHomes from "../assets/pagesImages/historicalHomes.jpg";
import houseboats from "../assets/pagesImages/houseboats.jpg";
import island from "../assets/pagesImages/island.jpg";
import lake from "../assets/pagesImages/lake.jpg";
import lakefront from "../assets/pagesImages/lakefront.jpg";
import luxe from "../assets/pagesImages/luxe.jpg";
import minses from "../assets/pagesImages/minses.jpg";
import nationalparks from "../assets/pagesImages/nationalparks.jpg";
import offTheGrid from "../assets/pagesImages/offTheGrid.jpg";
import play from "../assets/pagesImages/play.jpg";
import riads from "../assets/pagesImages/riads.jpg";
import ryokans from "../assets/pagesImages/ryokans.jpg";
import ski_inOut from "../assets/pagesImages/ski-inOut.jpg";
import skiing from "../assets/pagesImages/skiing.jpg";
import stepherdsHuts from "../assets/pagesImages/stepherdsHuts.jpg";
import tinyHomes from "../assets/pagesImages/tinyHomes.jpg";
import topOfWorld from "../assets/pagesImages/topOfWorld.jpg";
import towers from "../assets/pagesImages/towers.jpg";
import treehouses from "../assets/pagesImages/treehouses.jpg";
import tropical from "../assets/pagesImages/tropical.jpg";
import trulli from "../assets/pagesImages/trulli.jpg";
import vineyards from "../assets/pagesImages/vineyards.jpg";
import windmills from "../assets/pagesImages/windmills.jpg";
import yurts from "../assets/pagesImages/yurts.jpg";
import { useParams } from "react-router-dom";
import { PagesContext } from "../context/PagesContext";

const CustomPrevArrow = ({ onClick, isVisible }) =>
  isVisible && (
    <div
      className="absolute top-1/2 left-2 z-10 flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-colors duration-300 transform -translate-y-1/2"
      onClick={onClick}
    >
      <span className="text-lg text-white">
        <FaArrowLeft />
      </span>
    </div>
  );

const CustomNextArrow = ({ onClick, isVisible }) =>
  isVisible && (
    <div
      className="absolute top-1/2 right-2 z-10 flex items-center justify-center h-10 w-10 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-colors duration-300 transform -translate-y-1/2"
      onClick={onClick}
    >
      <span className="text-lg text-white">
        <FaArrowRight />
      </span>
    </div>
  );

const Pages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {setDataFilter,filteredArr} = useContext(PagesContext)

  const pagesDataName = [
    { img: icons, title: "Icons" },
    { img: rooms, title: "Rooms" },
    { img: cities, title: "Top Cities" },
    { img: amazingView, title: "Amazing Views" },
    { img: OMG, title: "OMG" },
    { img: surfing, title: "Surfing" },
    { img: bedbreakfast, title: "Bed Breakfasts" },
    { img: mansions, title: "Mansions" },
    { img: castles, title: "Castles" },
    { img: trending, title: "Trending" },
    { img: arctic, title: "Arctic" },
    { img: cabins, title: "Cabins" },
    { img: newImage, title: "New" },
    { img: countryside, title: "Countryside" },
    { img: luxe, title: "Luxe" },
    { img: dammusi, title: "Dammusi" },
    { img: desert, title: "Desert" },
    { img: Design, title: "Design" },
    { img: domes, title: "Domes" },
    { img: amazingPool, title: "Amazing Pools" },
    { img: barns, title: "Barns" },
    { img: beach, title: "Beach" },
    { img: beachfront, title: "Beachfront" },
    { img: boats, title: "Boats" },
    { img: campers, title: "Campers" },
    { img: camping, title: "Camping" },
    { img: casasparticulares, title: "Casas Particulares" },
    { img: caves, title: "Caves" },
    { img: adepted, title: "Adepted" },
    { img: aframes, title: "Aframes" },
    { img: chefsKitchens, title: "Chef’s Kitchens" },
    { img: containers, title: "Containers" },
    { img: creativespaces, title: "Creative Spaces" },
    { img: cyclandicHomes, title: "Cycladic Homes" },
    { img: earthhomes, title: "Earth Homes" },
    { img: farms, title: "Farms" },
    { img: golfing, title: "Golfing" },
    { img: grandpianos, title: "Grand Pianos" },
    { img: hanoks, title: "Hanoks" },
    { img: historicalHomes, title: "Historical Homes" },
    { img: houseboats, title: "Houseboats" },
    { img: island, title: "Island" },
    { img: lake, title: "Lake" },
    { img: lakefront, title: "Lakefront" },
    { img: minses, title: "Minses" },
    { img: nationalparks, title: "National Parks" },
    { img: offTheGrid, title: "Off The Grid" },
    { img: play, title: "Play" },
    { img: riads, title: "Riads" },
    { img: ryokans, title: "Ryokans" },
    { img: ski_inOut, title: "Ski-in/out" },
    { img: skiing, title: "Skiing" },
    { img: stepherdsHuts, title: "Shepherd’s Huts" },
    { img: tinyHomes, title: "Tiny Homes" },
    { img: topOfWorld, title: "Top of the World" },
    { img: towers, title: "Towers" },
    { img: treehouses, title: "Treehouses" },
    { img: tropical, title: "Tropical" },
    { img: trulli, title: "Trulli" },
    { img: vineyards, title: "Vineyards" },
    { img: windmills, title: "Windmills" },
    { img: yurts, title: "Yurts" },
  ];

 


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 10, // Default for extra-large screens
    slidesToScroll: 3,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: <CustomPrevArrow isVisible={currentSlide > 0} />,
    nextArrow: (
      <CustomNextArrow isVisible={currentSlide < pagesDataName.length - 1} />
    ),
    responsive: [
      {
        breakpoint: 1536, // Extra-large screens (xl)
        settings: {
          slidesToShow: 10,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1280, // Large screens (lg)
        settings: {
          slidesToShow: 9,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024, // Medium screens (md)
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (sm)
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className="fixed top-[186px] left-0 right-0 bg-white z-40 px-8 py-5 border-t-[1px] shadow-xl border-gray-300  ">
      <Slider {...settings}>
        {pagesDataName.map((page, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center flex-wrap cursor-pointer"
            onClick={() =>
              setDataFilter(page.title.toLowerCase().trim().replace(/\s+/g, ""))
            }
          >
            <img
              src={page.img}
              alt={page.title}
              className="h-8 w-8 object-cover"
            />
            <h1 className="text-gray-600 text-xs">{page.title}</h1>
          </div>
        ))}
      </Slider>
    </div>
  
  
  );
};

export default Pages;
