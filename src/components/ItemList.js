import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledItemList = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 20px 90px 20px;
`;

const StyledNote = styled.div`
  width: inherit;
  background: ${(props) => {
    if (props.counter <= 6) {
      return props.colors[props.counter];
    } else {
      return props.colors[props.counter % 6];
    }
  }};
  color: #000;
  padding: 30px 60px;
  font-family: Nunito;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 10px;
`;

function ItemList({ items, setItems }) {
  const colors = {
    1: "#FD99FF",
    2: "#FF9E9E",
    3: "#91F48F",
    4: "#FFF599",
    5: "#9EFFFF",
    6: "#B69CFF",
  };
  let counter = 0;

  const navigate = useNavigate();

  const HandleNote = (e) => {
    console.log(e.target.id);
    navigate(`/note`, { state: { id: e.target.id } });
  };

  const localItems = JSON.parse(localStorage.getItem("items"));
  return (
    <StyledItemList>
      {localItems.map((item) => {
        counter++;
        return (
          <StyledNote
            onClick={HandleNote}
            colors={colors}
            id={item.id}
            key={item.id}
            counter={counter}
          >
            {item.title}
          </StyledNote>
        );
      })}
    </StyledItemList>
  );
}

export default ItemList;
