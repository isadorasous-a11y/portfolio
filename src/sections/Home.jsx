import styled from 'styled-components'
import perfil from '../assets/perfil.png'

const Hero = styled.section`
  padding: 96px 0 24px;
  display:flex; align-items:center;
  .grid{ display:grid; grid-template-columns: 1.2fr .8fr; gap: 24px; }
  @media (max-width: 900px){ .grid{ grid-template-columns: 1fr; } }
`
const Title = styled.h1`
  font-size: clamp(28px, 3.6vw + 12px, 44px);
  margin: 0 0 12px;
`
const Lead = styled.p`
  color: ${({theme})=>theme.colors.mute};
  font-size: 18px; margin: 8px 0 24px;
`
const Photo = styled.img`
  width: 100%; border-radius: ${({theme})=>theme.radius.md};
  border: 1px solid ${({theme})=>theme.colors.outline};
`

export default function Home(){
  return (
    <Hero id="home" aria-label="Início">
      <div className="container grid">
        <div>
          <Title>Desenvolvedora Full-Stack Python / Front-end</Title>
          <Lead>
            Formação EBAC e foco em interfaces acessíveis, responsivas e bem testadas.
            Experiência prática com React, TypeScript, FastAPI e integrações REST.
          </Lead>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <a className="primary" href="#projetos" style={{
              padding:'12px 16px', borderRadius:'999px',
              background:'#2dd4bf', color:'#0a0a0a', fontWeight:700
            }}>Ver projetos</a>
            <a href="#contato" className="secondary" style={{padding:'12px 16px'}}>Falar comigo</a>
          </div>
        </div>
        <div>
          <Photo src={perfil} alt="Foto de perfil de Isadora" />
        </div>
      </div>
    </Hero>
  )
}
