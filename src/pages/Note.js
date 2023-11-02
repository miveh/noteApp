import React, { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";

const NoteContainer = styled(Container)`
  gap: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 115px;
  margin-top: 47px;
`;

const modalContainerStyle = {
  width: "inherit",
};

function Note({ items, setItems }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = state; // Read values passed on state

  const [title, setTitle] = useState(
    JSON.parse(localStorage.getItem("items")).find((item) => item["id"] === id)
      .title
  );
  const [description, setDescription] = useState(
    JSON.parse(localStorage.getItem("items")).find((item) => item["id"] === id)
      .description
  );

  const HandleTitleInput = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const HandleDescritionInput = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const HandleBackToHome = () => {
    navigate("/home");
  };

  //State to open and close modal
  const [modalOpen, setModalOpen] = useState(false);

  //Function to toggle state for opening and closing modal
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <NoteContainer>
      <Header>
        <Button $onClick={HandleBackToHome}>
          <img src="./images/editorPage/chevron_left.svg" alt="" />
        </Button>
        <Button $onClick={handleModal}>
          <img src="./images/editorPage/trash.svg" alt="" />
        </Button>
        {modalOpen && <Modal closeModal={() => setModalOpen(false)}></Modal>}
      </Header>

      <Input
        required
        $placeHolder="Title"
        $size="48px"
        value={title}
        onChange={HandleTitleInput}
      />
      <Input
        value={description}
        onChange={HandleDescritionInput}
        as="textarea"
        rows="14"
        cols="50"
        $placeHolder="Type something..."
        $size="23px"
      />

      <div data-noteid={id} style={modalContainerStyle} id="portal"></div>
    </NoteContainer>
  );
}

export default Note;
