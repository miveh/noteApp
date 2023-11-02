import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import Input from "../components/Input";

const AddContainer = styled(Container)`
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

function AddNote({ items, setItems }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const HandleTitleInput = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const HandleDescritionInput = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const HandleSave = () => {
    if (!title) {
      return;
    }
    const ID = "_" + Math.random().toString(36).substr(2, 9);

    //handle state
    const tempItems = [...items];
    tempItems.push({ id: ID, title: title, description: description });
    setItems(tempItems);

    //handle localstorage
    const tempLocalItems = JSON.parse(localStorage.getItem("items")) || [];
    tempLocalItems.push({ id: ID, title: title, description: description });
    localStorage.setItem("items", JSON.stringify(tempLocalItems));

    console.log(tempItems);
    console.log(tempLocalItems);
    navigate("/home");
  };

  const HandleBackToHome = () => {
    navigate("/home");
  };

  return (
    <AddContainer>
      <Header>
        <Button $onClick={HandleBackToHome}>
          <img src="./images/editorPage/chevron_left.svg" alt="" />
        </Button>
        <Button $onClick={HandleSave}>
          <img src="./images/editorPage/save.svg" alt="" />
        </Button>
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
    </AddContainer>
  );
}

export default AddNote;
