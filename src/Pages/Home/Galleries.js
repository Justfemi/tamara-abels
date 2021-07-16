import React from "react";
import styled from "styled-components";
import Images from "../../Assets/Images/images";

const {
  gps,
  rectangle1,
  rectangle2,
  rectangle3,
  rectangle4,
  prev,
  next,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  patternBg,
  square1,
  square2,
  square3,
  square4,
  square5,
  square6,
  square7,
  square8,
  square9,
  box1,
  box2,
  box3,
  box4,
  box5,
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
} = Images;

const FirstGallery = () => {
  return (
    <>
      <GalleryStyles id="sp">
        {/* <div
          className="uk-position-relative uk-visible-toggle uk-light mobile"
          tabIndex="-1"
          uk-slider="center: true"
        >
          <ul className="uk-slider-items uk-grid">
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={gps} alt="gps" />
              </div>
            </li>
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={rectangle2} alt="gps" />
              </div>
            </li>
            <li className="uk-width-3-4">
              <div className="uk-panel">
                <img src={rectangle2} alt="gps" />
              </div>
            </li>
            b
          </ul>
        </div> */}
        <div className="first-left web">
          <aside>
            <div className="left1">
              <img src={gps} alt="gps" />
            </div>
            <div className="left2" style={{ marginTop: "1rem" }}>
              <img src={rectangle4} alt="rectangle4" />
            </div>
          </aside>
          <aside>
            <div className="left3">
              <img src={rectangle2} alt="rectangle2" />
            </div>
            <div className="left4" style={{ marginTop: "1rem" }}>
              <img src={rectangle3} alt="rectangle3" />
            </div>
          </aside>
        </div>
        <div className="first-right">
          <img className="lg" src={rectangle1} alt="rectangle1" />
        </div>
        <div className="absolute">
          <img className="lg" src={rectangle1} alt="rectangle1" />
          <p>jijeirj</p>
        </div>
        <div className="slide">
          <div className="prev">
            <img src={prev} alt="prev" />
          </div>
          <div className="slide-item">
            <img src={avatar1} alt="avatar" />
          </div>
          <div className="slide-item">
            <img src={avatar2} alt="avatar" />
          </div>
          <div className="slide-item">
            <img src={avatar3} alt="avatar" />
          </div>
          <div className="slide-item">
            <img src={avatar4} alt="avatar" />
          </div>
          <div className="slide-item">
            <img src={avatar5} alt="avatar" />
          </div>
          <div className="slide-item">
            <img src={avatar6} alt="avatar" />
          </div>
          <div className="slide-item">
            <img src={avatar7} alt="avatar" />
          </div>

          <div className="next">
            <img src={next} alt="next" />
          </div>
        </div>
      </GalleryStyles>
    </>
  );
};

const SecondGallery = () => {
  return (
    <GalleryStyles>
      <main className="second">
        <div className="second-top">
          <div>
            <img src={gps} className="gps" alt="frame" />
          </div>
          <div>
            <img src={frame1} alt="frame1" />
          </div>
          <div>
            <img src={frame2} alt="frame2" />
          </div>
          <div>
            <img src={frame3} alt="frame3" />
          </div>
        </div>
        <div className="second-bottom">
          <div>
            <img src={frame4} alt="frame4" />
          </div>
          <div>
            <img src={frame5} alt="frame5" />
          </div>
        </div>
      </main>
      <div className="absolute">
        <img className="lg" src={rectangle1} alt="rectangle1" />
        <p>jijeirj</p>
      </div>
      <div className="slide">
        <div className="prev">
          <img src={prev} alt="prev" />
        </div>
        <div className="slide-item">
          <img src={avatar1} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar2} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar4} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar5} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar6} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar7} alt="avatar" />
        </div>
        <div className="next">
          <img src={next} alt="next" />
        </div>
      </div>
    </GalleryStyles>
  );
};

const ThirdGallery = () => {
  const images = [
    square1,
    square2,
    square3,
    square4,
    square5,
    square6,
    square7,
    square8,
    square9,
  ];
  return (
    <GalleryStyles>
      <main className="third">
        <div>
          <img src={gps} className="gps" alt="frame" />
        </div>
        {images.map((image, index) => (
          <div key={image + index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </main>
      <div className="slide">
        <div className="prev">
          <img src={prev} alt="prev" />
        </div>
        <div className="slide-item">
          <img src={avatar1} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar2} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar4} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar5} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar6} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar7} alt="avatar" />
        </div>
        <div className="next">
          <img src={next} alt="next" />
        </div>
      </div>
    </GalleryStyles>
  );
};

const FourthGallery = () => {
  const images = [box1, box2, box3, box4, box5];
  return (
    <GalleryStyles>
      <main className="third fourth">
        <div>
          <img src={gps} className="gps" alt="frame" />
        </div>
        {images.map((image, index) => (
          <div key={image + index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </main>
      <div className="slide">
        <div className="prev">
          <img src={prev} alt="prev" />
        </div>
        <div className="slide-item">
          <img src={avatar1} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar2} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar4} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar5} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar6} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar7} alt="avatar" />
        </div>
        <div className="next">
          <img src={next} alt="next" />
        </div>
      </div>
    </GalleryStyles>
  );
};

const FifthGallery = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  return (
    <GalleryStyles>
      <main className="third fifth">
        <div>
          <img src={gps} className="gps" alt="frame" />
        </div>
        {images.map((image, index) => (
          <div key={image + index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </main>
      <div className="slide">
        <div className="prev">
          <img src={prev} alt="prev" />
        </div>
        <div className="slide-item">
          <img src={avatar1} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar2} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar3} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar4} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar5} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar6} alt="avatar" />
        </div>
        <div className="slide-item">
          <img src={avatar7} alt="avatar" />
        </div>
        <div className="next">
          <img src={next} alt="next" />
        </div>
      </div>
    </GalleryStyles>
  );
};

export {
  FirstGallery,
  SecondGallery,
  ThirdGallery,
  FourthGallery,
  FifthGallery,
};

const GalleryStyles = styled.div`
  width: 100%;
  background: url(${patternBg});
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  img {
    transition: transform 0.5s ease-in-out;
  }

  @media screen and (max-width: 800px) {
    display: block;
    padding: 2rem;
  }

  &#sp {
    @media screen and (max-width: 1100px) {
      display: block;
    }
  }

  .first-left {
    width: 40%;
    display: flex;
    justify-content: space-between;

    div {
      width: 240px;
      height: 240px;
      background: #ffffff;
      border-radius: 20px;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.2);
        }
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }

      &.left1 {
        img {
          width: 90px;
          margin: auto;
          object-fit: contain;
        }
      }
    }

    @media screen and (max-width: 1100px) {
      width: 100%;
      display: block;

      div {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }

  .first-right {
    width: 55%;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    @media screen and (max-width: 1100px) {
      width: 100%;
      height: auto;
      display: block;
    }
    &:hover {
      img {
        transform: scale(1.03);
      }
    }
    img.lg {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .absolute {
    position: absolute;
    right: 3%;
    top: 2%;
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #f2f2f2 0%, #ffffff 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      display: block;
      width: 40px;
      height: 40px;
      border: 1px solid #f2f2f2;
      border-radius: 100%;
      object-fit: cover;
      margin-top: 1rem;
    }

    p {
      font-size: 12px;
      line-height: 18px;
      color: #213f5c;
    }
  }

  .slide {
    position: absolute;
    bottom: -16%;
    left: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 1.2rem;
    @media screen and (max-width: 1100px) {
      bottom: -5%;
      left: 10%;
    }

    @media screen and (max-width: 800px) {
      position: static;
      margin-top: 2rem;
      display: none;
    }
    .slide-item {
      width: 70px;
      height: 70px;
      margin: 0 1rem;

      @media screen and (max-width: 800px) {
        width: 100%;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  .second {
    width: 100%;

    .second-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      @media screen and (max-width: 800px) {
        display: block;
      }
      div {
        width: 24%;
        height: 150px;
        background: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden;

        @media screen and (max-width: 800px) {
          width: 100%;
          height: 200px;
          margin-bottom: 1rem;
        }

        &:hover {
          img {
            transform: scale(1.2);
          }
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;

          &.gps {
            width: 60px;
            margin: auto;
            object-fit: contain;
            @media screen and (max-width: 800px) {
              width: 100%;
              height: 200px;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .second-bottom {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      div {
        width: 48%;
        height: 420px;
        background: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden;

        img {
          width: 100%;
        }

        &:hover {
          img {
            transform: scale(1.2);
          }
        }

        @media screen and (max-width: 800px) {
          width: 100%;
          margin-bottom: 1rem;
        }
      }
    }
  }

  .third {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
    grid-gap: 1.2rem;
    grid-auto-flow: dense;

    @media (max-width: 800px) {
      display: block;
      width: 100%;
    }

    &.fourth {
      grid-template-columns: repeat(auto-fill, minmax(14%, 1fr));

      div {
        height: 180px;
      }
    }

    &.fifth {
      grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));

      div {
        height: 190px;
      }
    }

    div {
      width: 100%;
      height: 220px;
      background: #ffffff;
      border-radius: 20px;
      cursor: pointer;
      overflow: hidden;

      @media screen and (max-width: 800px) {
        margin-bottom: 1rem;
      }

      &:hover {
        img {
          transform: scale(1.2);
        }
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;

        &.gps {
          width: 80px;
          margin: auto;
          object-fit: contain;
        }
      }
    }
  }
`;
