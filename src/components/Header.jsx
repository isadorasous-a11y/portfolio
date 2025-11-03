import styled from 'styled-components'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Bar = styled.header`
  position: sticky; top: 0; z-index: 40;
  background: rgba(15,22,32,0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({theme})=>theme.colors.outline};
`
const Inner = styled.div`
  display:flex; align-items:center; justify-content:space-between;
  height: 64px;
`
const Brand = styled.a`
  font-weight: 700;
  letter-spacing: .5px;
  color: ${({theme})=>theme.colors.text};
`
const Nav = styled.nav`
  display:flex; align-items:center; gap: 16px;
  a{
    color: ${({theme})=>theme.colors.mute};
    padding: 8px 12px;
    border-radius: ${({theme})=>theme.radius.pill};
  }
  a:hover{ background: ${({theme})=>theme.colors.outline}; color: ${({theme})=>theme.colors.text}; }
`
const Icons = styled.div`
  display:flex; gap: 12px;
  a{ color: ${({theme})=>theme.colors.mute}; }
  a:hover{ color: ${({theme})=>theme.colors.primary}; }
`

export default function Header(){
  return (
    <Bar role="banner">
      <div className="container">
        <Inner>
          <Brand href="#home" aria-label="Voltar ao início">Isadora Sousa</Brand>
          <Nav aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#contato">Contato</a>
          </Nav>
          <Icons aria-label="Redes profissionais">
            <a href="https://github.com/isadorasous-a11y" target="_blank" rel="noreferrer" aria-label="GitHub de Isadora">
              <FiGithub size={22}/>
            </a>
            <a href="https://www.linkedin.com/in/isadorasols/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Isadora">
              <FiLinkedin size={22}/>
            </a>
          </Icons>
        </Inner>
      </div>
    </Bar>
  )
}
