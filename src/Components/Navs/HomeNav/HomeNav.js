import React, { useState } from "react";
import styled from "styled-components";
import { useDisclosure } from "@chakra-ui/react";
import Images from "../../../Assets/Images/images";
import ModalComponent from "../../Modal/Modal";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";

const HomeNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // configure with component the modal should display
  const [activeContent, setActiveContent] = useState("login");
  const renderLogin = () => {
    setActiveContent("login");
    onOpen();
  };

  const renderRegister = () => {
    setActiveContent("register");
    onOpen();
  };

  return (
    <>
      <HomeNavStyles>
        <div className="flex-btw">
          <div className="logo">
            {/* eslint-disable-next-line */}
            <img src={Images.icon} />
          </div>
          <div className="cta">
            <button className="outline" onClick={renderRegister}>
              sign up
            </button>
            <button className="filled" onClick={renderLogin}>
              login
            </button>
          </div>
        </div>
      </HomeNavStyles>
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        title="Join Us"
        img={Images.icon}
      >
        {activeContent === "login" ? <Login /> : <Register />}
      </ModalComponent>
    </>
  );
};

export default HomeNav;
const HomeNavStyles = styled.div`
  width: 100%;
  height: 14vh;
  background: url(${Images.navBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0.5rem 4rem;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

  .logo {
    img {
      width: 53px;
      height: 53px;
      object-fit: cover;
    }
  }

  .flex-btw {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    button {
      width: 100px;
      height: 30px;
      padding: 0.3rem;
      margin-right: 1rem;
      border: 1.2px solid var(--dark-color);
      border-radius: 15px;
      transition: all 1s ease-in-out;
      font-size: 1rem;

      &.outline {
        background: none;
        color: var(--off-color);

        &:hover {
          background: var(--dark-color);
        }
      }

      &.filled {
        background: var(--dark-color);
        color: var(--off-color);

        &:hover {
          background: none;
        }
      }
    }
  }
`;
