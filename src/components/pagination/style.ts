import styled from 'styled-components'

const List = styled.ul`
  position: absolute;
  top: 49.3%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6px;
  height: 6px;

  list-style-type: none;

  border-radius: 50%;
`

const Button = styled.button`
  cursor: pointer;

  width: 6px;
  height: 6px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;

  &_active {
    background-color: var(--black-blue);
  }
`

export {List, Item, Button}
