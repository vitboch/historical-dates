import styled from 'styled-components'

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6px;
  height: 6px;
  margin: -3px;
  padding: 0;
  font-size: 0;
  font-weight: 400;
  line-height: 30px;
  color: var(--black-blue);
  background: var(--black-blue);
  border: none;
  border-radius: 50%;

  &:nth-child(1) {
    transform: rotate(60deg) translate(calc(265px)) rotate(60deg);
    rotate(120deg);
  }

  &:nth-child(2) {
    transform: rotate(120deg) translate(calc(265px)) rotate(120deg);
    rotate(120deg);
  }

  &:nth-child(3) {
    transform: rotate(180deg) translate(calc(265px)) rotate(180deg);
    rotate(120deg);

  }

  &:nth-child(4) {
    transform: rotate(240deg) translate(calc(265px)) rotate(240deg);
    rotate(120deg);
  }

  &:nth-child(5) {
    transform: rotate(300deg) translate(calc(265px)) rotate(300deg);
    rotate(120deg);
  }

  &:nth-child(6) {
    transform: rotate(360deg) translate(calc(265px)) rotate(360deg);
    rotate(120deg);
  }
`

const Category = styled.span`
  position: absolute;
  top: 50%;
  left: 76px;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: 700;
  opacity: 0;
`

export {Button, Category}
