import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding-left: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--black-blue);

  @media (max-width: 1024px) {
    padding: 0 20px;
    font-size: 14px;
  }
`

const Wrap = styled.div`
  display: flex;
  padding-top: 20px;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 9px;
    padding-top: 6px;
  }
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: var(--bg-color);
  border: 1px solid rgba(66, 86, 122, 0.5);
  border-radius: 50%;
  transform: matrix(-1, 0, 0, 1, 0, 0) rotate(180deg);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  & svg {
    width: 10px;
    height: 14px;
    fill: none;
  }

  & svg path {
    stroke: var(--black-blue);
    stroke-width: 2;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    background-color: var(--white);
  }

  @media (max-width: 1024px) {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    border-color: var(--black-blue-1);

    & svg {
      transform: scale(0.5);
    }
  }
`

export {Container, Wrap, Button}
