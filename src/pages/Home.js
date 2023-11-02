import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Add from "../components/Add";
import Container from "../components/Container";
import NoContent from "../components/NoContent";
import ItemList from "../components/ItemList";

const HomeContainer = styled(Container)`
  gap: 1rem;
  min-height: 100vh;
  height: auto;
`;

const Image = styled.img`
  width: 90%;
`;

function Home({ items, setItems }) {
  const localItems = JSON.parse(localStorage.getItem("items"));
  return (
    <HomeContainer>
      <Header />
      {localItems ? (
        <ItemList items={items} setItems={setItems} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <Image src="./images/HomePage/rafiki.svg" alt="" />
          <NoContent>Create your first note !</NoContent>
        </div>
      )}
      <Add />
    </HomeContainer>
  );
}

export default Home;
