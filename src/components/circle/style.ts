import styled from 'styled-components'

const Container = styled.div`
  user-select: none;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1024px ) {
    .circle {
      display: none;
    }
`

const Wrap = styled.div`
  rotate: -120deg;
`

const List = styled.ul`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  width: 530px;
  height: 530px;
  list-style-type: none;
  border: 1px solid var(--black-blue-1);
  border-radius: 50%;
`

export {Container, Wrap, List}
