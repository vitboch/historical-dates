import styled from 'styled-components'

const Container = styled.main`
  position: relative;
  margin: 0 auto;
  padding-top: 15.7vh;
  max-width: 1440px;
  min-height: 100vh;
  border-right: 1px solid var(--black-blue-1);
  border-left: 1px solid var(--black-blue-1);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: var(--black-blue-1);
  }

  @media (max-width: 1024px) {
    padding-top: 5.7vh;
    max-width: 320px;
    border: none;

    &::after {
      width: 0;
    }
  }
`

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  min-height: 616px;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: var(--black-blue-1);
  }

  @media (max-width: 1024px) {
    min-height: 252px;

    &::after {
      margin: 0 20px;
      top: 92%;
      width: 87.5%;
      background-color: var(--bg-color-line);
    }
  }
`

const Wrap = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-right: 33px;
  gap: 95px;
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    padding-right: 9px;
    gap: 26px;
    font-size: 56px;
    line-height: 72px;
  }
`

const Title = styled.h1`
  margin: 0;
  max-width: 428px;
  padding-left: 75px;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: var(--black-blue);
  border-left: 5px solid;
  border-image: linear-gradient(180deg, #3877ee, #ef5da8) 1;

  @media (max-width: 1024px) {
    padding-left: 20px;
    max-width: 190px;
    font-size: 20px;
    line-height: 120%;
    border: none;
  }
`

export {Container, Wrapper, Wrap, Title}
