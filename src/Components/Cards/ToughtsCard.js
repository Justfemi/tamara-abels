import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";
import { AiFillCamera } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { CgFilm } from "react-icons/cg";

const ThoughtsCard = () => {
  return (
    <>
      <ThoughtsCardStyles>
        <div className="tops">
          <img src={Images.user} alt="User" />
          <input type="text" placeholder="Post your adventure" />
        </div>
        <div className="bottoms">
          <p>
            <span>
              <AiFillCamera />
            </span>
            Click
          </p>
          <p>
            <span>
              <BsNewspaper />
            </span>
            Write
          </p>
          <p>
            <span>
              <CgFilm />
            </span>
            Film
          </p>
        </div>
      </ThoughtsCardStyles>
    </>
  );
};

export default ThoughtsCard;
const ThoughtsCardStyles = styled.div`
  background: #fff;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;

  .tops {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 60px;
      height: 60px;
      border: 2px solid #3f3d56;
      border-radius: 100%;

      @media screen and (max-width: 450px) {
        width: 45px;
        height: 45px;
      }
    }

    input {
      width: 85%;
      background: #ffffff;
      border: 1px solid #3f3d56;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 0.7rem;
      color: rgba(63, 61, 86, 0.38);
      font-size: 1.2rem;

      @media screen and (max-width: 450px) {
        width: 77%;
        padding: 0.5rem;
      }
    }
  }
  .bottoms {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    @media screen and (max-width: 450px) {
      width: 100%;
    }

    p {
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 27px;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

      @media screen and (max-width: 450px) {
        font-weight: 300;
      }

      span {
        margin-right: 0.5rem;
        @media screen and (max-width: 450px) {
          margin-right: 0;
        }
      }
      &:nth-child(1) {
        padding-left: 1.5rem;
        color: #0693a0;
        @media screen and (max-width: 450px) {
          padding-left: 0.3rem;
        }
      }
      &:nth-child(2) {
        padding-left: 1.5rem;
        border-left: 2px solid #3f3d56;
        color: #f58642;
      }
      &:nth-child(3) {
        padding-left: 1.5rem;
        border-left: 2px solid #3f3d56;
        color: #2c66b8;
      }
    }
  }
`;
