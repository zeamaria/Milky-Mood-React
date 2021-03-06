import styled from "styled-components";

export const Image = styled.div`
  background-image: url("/image1.jpeg");
  background-size: 400px 600px;
  height: 100px;
  width: 100px;
  position: relative;
  background-position: ${({ $initalX, $initalY }) =>
    `-${$initalX * 100}px -${$initalY * 100}px`};
`;
