import styled from 'styled-components'

const Container = styled.div`
  user-select: none;
  padding: 20px;
  opacity: 1;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0;
  }
`

const Wrap = styled.div`
  position: relative;
  padding: 0 60px;

  @media (max-width: 1024px) {
    padding: 0;
  }
`

const Item = styled.li`
  margin-right: 0;
  overflow: hidden;
  display: -webkit-box;
  padding-top: 36px;
  max-height: 190px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  @media (max-width: 1024px) {
    padding: 0;
    min-height: 192px;
    width: 193px;
  }
`

const Subtitle = styled.h2`
  margin: 0;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 25px;
  line-height: 120%;
  color: var(--blue);

  @media (max-width: 1024px) {
    margin: 0;
    padding-left: 20px;
    font-size: 16px;
  }
`

const Text = styled.p`
  margin: 0;
  padding-top: 15px;
  font-size: 20px;
  line-height: 30px;
  color: var(--black-blue);

  @media (max-width: 1024px) {
    padding-left: 20px;
    font-size: 14px;
    line-height: 145%;
  }
`

const Navigate = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 60%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    display: none;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 40px;
  opacity: ${props => (props['isHidden'] ? 0 : 1)};
  visibility: ${props => (props['isHidden'] ? 'hidden' : 'visible')};
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background: var(--white);
  box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);

  & svg {
    width: 8px;
    height: 12px;
    fill: none;
  }

  & svg g path {
    stroke: var(--blue);
    stroke-width: 2;
  }
`

export {Container, Wrap, Item, Subtitle, Text, Navigate, Button}
