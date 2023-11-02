import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import InfoModal from "./InfoModal";
import { useNavigate } from "react-router-dom";

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 115px;
  margin-top: 47px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 43px;
  font-family: Nunito;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const modalContainerStyle = {
  width: "inherit",
};

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const HandleInfo = () => {
    setModalOpen(!modalOpen);
  };

  const HandleSearch = () => {
    navigate("/search");
  };

  return (
    <HeaderBox>
      <Title>Notes</Title>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button $onClick={HandleSearch}>
          <img src="./images/HomePage/search.svg" alt="" />
        </Button>
        <div id="infoportal"></div>
        <Button $onClick={HandleInfo}>
          <img src="./images/HomePage/info_outline.svg" alt="" />
        </Button>
        {modalOpen && (
          <InfoModal closeModal={() => setModalOpen(false)}></InfoModal>
        )}
      </div>
    </HeaderBox>
  );
}

export default Header;
