import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 72px 0;
  scroll-margin-top: 88px; /* evita sobrepor o header fixo */
  @media (max-width: 768px){
    padding: 56px 0;
  }
`

const Title = styled.h2`
  margin: 0 0 24px;
  font-size: clamp(24px, 2.2vw + 12px, 36px);
  letter-spacing: 0.5px;
`

export default function Section({ id, title, children, ariaLabel }) {
  return (
    <Wrapper id={id} aria-label={ariaLabel || title}>
      <div className="container">
        {title && <Title>{title}</Title>}
        {children}
      </div>
    </Wrapper>
  )
}
