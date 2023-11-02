import React from "react";
import styled from "styled-components";
import Container from "../components/Container";

const SearchContainer = styled(Container)`
  gap: 1rem;
  min-height: 100vh;
  height: auto;
`;

function Search() {
  const items = JSON.parse(localStorage.getItem("items"));

  function search(e) {
    let input = e.target.value;

    items.forEach((note) => {
      !note.title.includes(input) ? (
        ""
      ) : (
        <div>
          <p>{note.title}</p>
          <p>{note.description}</p>
        </div>
      );
    });
  }

  return (
    <SearchContainer>
      <input type="search" placeholder="Search..." onChange={search} />
      <img src="./images/cuate.svg" alt="notfind" />
    </SearchContainer>
  );
}

export default Search;
