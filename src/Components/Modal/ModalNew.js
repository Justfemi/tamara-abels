import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiVideoFill, RiImageAddFill } from "react-icons/ri";
import Images from "../../Assets/Images/images";


const Background = styled.div`
    background: rgba(0,0,0, 0.1);
    // position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalWrapper = styled.div`
    width: 600px;
    height: 450px;
    min-height: 300px;
    background: #fff;
    z-index: 10;
    border-radius: 5px;
    border: 1px solid red;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    padding: 30px auto;
`;

const ModalHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: bold;
        font-size: 3rem;
        line-height: 72px;
        color: #3f3d56;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    hr {
        border: none;
        border-bottom: 5px solid #3f3d56;
        opacity: 1;
        margin-bottom: 10px;
    }

`;

const ModalBody = styled.div`
    margin: 10px auto 0;
    width: 90%;
    border: 1px solid green;
`;

const ModalContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    select {
        background: grey;
        padding: 10px 30px;
    }
`;

const ModalImg = styled.img`
    width: 50px;
    height: 50px;
`;

const ModalCenter = styled.div`
    textarea {
        width: 400px;
        height: 250px;
        background: grey;
        position: relative;
    }
`;

const ModalIcons = styled.div`
    display: flex;
    position: absolute;
    bottom: 75px;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    // border: 1px solid red;
    margin-left: 20px;

    div {
        display: flex;
        width: 70px;
        justify-content: space-between;

        .media-icon {
            font-size: 30px;
            color: orange;
        }
    }
`

const ModalButton = styled.div`
    button {
        padding: 5px 18px;
        background: red;
        color: #fff;
    }
`;

const ModalBottom = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: space-around;

    button {
        padding: 5px 18px;
        background: red;
        color: #fff;
    }
`;

const CloseModalButton = styled(AiOutlineCloseCircle)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

const ModalNew = ({ showModal, setShowModal }) => {
    return ( 
        <>
            {showModal ? (
                <Background>
                    <ModalWrapper>
                        <ModalHead>
                            <h1>Share</h1>
                            <hr />
                        </ModalHead>
                        <CloseModalButton onClick={() => setShowModal(prev => !prev)}/>
                        <ModalBody>
                            <ModalContent>
                                <ModalImg src={Images.user} alt="User" />
                                <select>
                                    <option>Post as Traveler/Guide</option>
                                    <option>Post as Traveler/Guide</option>
                                    <option>Post as Traveler/Guide</option>
                                    <option>Post as Traveler/Guide</option>
                                </select>
                                <div></div>
                                <div></div>
                                <div></div>
                            </ModalContent>
                            <ModalCenter>
                                <textarea placeholder="Type Here"></textarea>

                                <ModalIcons>
                                    <div>
                                        <RiImageAddFill className="media-icon"/>
                                        <RiVideoFill className="media-icon"/>
                                    </div>

                                    <ModalButton>
                                        <button>POST</button>
                                    </ModalButton>
                                </ModalIcons>
                            </ModalCenter>
                            <ModalBottom>
                                <button>Add Location</button>
                                <button>Make this an Event</button>
                            </ModalBottom>
                        </ModalBody>
                    </ModalWrapper>
                </Background>
            ) : null }
        </>
    );
};

export default ModalNew;

