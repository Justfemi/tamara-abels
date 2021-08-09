import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import Experience from "../../Components/Cards/Experience";
import FeatureCard from "../../Components/Cards/FeatureCard";
import GridCard from "../../Components/Cards/GridCard";
import Spaces from "../../Components/Cards/Spaces";
import { IoAddCircleOutline } from "react-icons/io5";
// import ModalNew from "../../Components/Modal/ModalNew";
// import { IoAddCircleOutline } from "react-icons/io5";

const LeftCard = () => {
  // import grid images
  const {
    connect1,
    connect2,
    connect3,
    connect4,
    connect5,
    connect6,
    connect13,
    connect14,
    connect15,
    connect16,
    connect17,
    connect18,
    space1,
    space2,
    space3,
    space4,
  } = Images;

  //   pass them as props
  const firstGridImages = [
    connect1,
    connect2,
    connect3,
    connect4,
    connect5,
    connect6,
  ];

  const ThirdGridImages = [
    connect13,
    connect14,
    connect15,
    connect16,
    connect17,
    connect18,
  ];

  const spaces1 = [
    {
      title: "Nest by Pool",
      imgUrl: space1,
      location: "Las Vegas, USA",
      bedrooms: "1",
      bathrooms: "2",
      price: "36",
      moreFx: () => {
        return;
      },
      editFx: () => {
        return;
      },
    },
    {
      title: "House on Mount",
      imgUrl: space2,
      location: "Montana, USA",
      bedrooms: "3",
      bathrooms: "2",
      price: "49",
      moreFx: () => {
        return;
      },
      editFx: () => {
        return;
      },
    },
  ];

  const spaces2 = [
    {
      title: "Close to ",
      imgUrl: space3,
      location: "Las Vegas, USA",
      bedrooms: "2",
      bathrooms: "1",
      price: "35",
      moreFx: () => {
        return;
      },
      editFx: () => {
        return;
      },
    },
    {
      title: "House on Mount",
      imgUrl: space4,
      location: "Montana, USA",
      bedrooms: "3",
      bathrooms: "2",
      price: "49",
      moreFx: () => {
        return;
      },
      editFx: () => {
        return;
      },
    },
  ];

  return (
    <>
      <LeftCardStyles>
        <Experience />
        <GridCard
          title="Group Tours"
          smallText="See All"
          images={ThirdGridImages}
        />
        <GridCard
          title="Travel Connections"
          smallText="See All"
          images={firstGridImages}
        />
        <FeatureCard cta noSub title="Skill/Knowledge Share Service" />
        <Spaces heading="Stay Spaces" allData={spaces1} button1="Add New" icon={<IoAddCircleOutline />}/>
        <Spaces heading="Business Spaces" allData={spaces2} button2="Add New" icon={<IoAddCircleOutline />} />
      </LeftCardStyles>
    </>
  );
};

export default LeftCard;
const LeftCardStyles = styled.div`
  width: 49%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
