import React from "react";
import styled from "styled-components";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ModalComponent = ({ isOpen, onClose, img, title, children }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ModalStyles>
              <div className="head">
                <img src={img} alt="img" />
                <h1>{title}</h1>
              </div>
              <hr />
              {children}
            </ModalStyles>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
const ModalStyles = styled.div`
  width: 100%;
  height: 100%;
  min-height: 300px;
  .head {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      display: block;
      width: 45px;
      height: 45px;
      margin-right: 1rem;
    }

    h1 {
      font-weight: bold;
      font-size: 3rem;
      line-height: 72px;
      color: #3f3d56;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }

  hr {
    border: none;
    border-bottom: 5px solid #3f3d56;
    opacity: 1;
  }
`;
