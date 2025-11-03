import styled from 'styled-components'

const Wrap = styled.footer`
  border-top: 1px solid ${({theme})=>theme.colors.outline};
  padding: 28px 0; color: ${({theme})=>theme.colors.mute};
`
export default function Footer(){
  return (
    <Wrap role="contentinfo">
      <div className="container">
        <small>© {new Date().getFullYear()} Isadora Sousa — Portfólio. Construído com React + Styled-Components.</small>
      </div>
    </Wrap>
  )
}
