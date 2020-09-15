import React from "react";
import PropTypes from "prop-types";

// Style
import styled from "styled-components";

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
};

Counter.defaultProps = {
  number: 0,
  color: "block",
  onIncrement: () => console.warn("onIncrement not defined"),
  onDecrement: () => console.warn("onDecrement not defined"),
  onSetColor: () => console.warn("onSetColor not defined"),
};

function Counter({ number, color, onIncrement, onDecrement, onSetColor }) {
  return (
    <Container
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{ backgroundColor: color }}
    >
      {number}
    </Container>
  );
}

export default Counter;

const Container = styled.div`
  /* 레이아웃 */
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  /* 색상 */
  background-color: black;
  color: white;

  /* 폰트 */
  font-size: 3rem;

  /* 기타 */
  border-radius: 100%;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.75s;
`;
