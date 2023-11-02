import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const modalStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "330px",
  height: "236px",
  width: "80%",
  flexShrink: "0",
  borderRadius: "20px",
  background: "#252525",
};

const backdropStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  maxWidth: "428px",
  background: "rgb(196, 196, 196, 0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
};

const pStyles = {
  color: "#CFCFCF",
  textAlign: "center",
  fontFamily: "Nunito",
  fontSize: "23px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
};

const ModalButtonStyles = styled.button`
  background: ${(props) => props.$bgColor};
  width: 93px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 5px;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function ModalButton({ text, action, bgColor }) {
  return (
    <ModalButtonStyles $bgColor={bgColor} onClick={action}>
      {text}
    </ModalButtonStyles>
  );
}

function Backdrop({ children, closeModal }) {
  return ReactDOM.createPortal(
    <div style={backdropStyle} className="backdrop" onClick={closeModal}>
      {children}
    </div>,
    document.getElementById("infoportal")
  );
}

function InfoModal({ closeModal }) {
  return (
    <Backdrop closeModal={closeModal}>
      <div
        style={modalStyles}
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <p>Designed by - pourya</p>
        <p>app version - 1.0.0</p>
        <p>Made by zahra</p>
      </div>
    </Backdrop>
  );
}

export default InfoModal;
