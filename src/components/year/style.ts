import styled from 'styled-components'

const Container = styled.span`
  padding-top: 25px;
  color: ${props =>
    props['place'] === 'first' ? 'var(--iris)' : 'var(--fuschia)'};

  @media (max-width: 1440px) {
    font-size: 60px;
  }
`

export default Container
