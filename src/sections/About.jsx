import Section from '../components/Section'
import styled from 'styled-components'

const Grid = styled.div`
  display:grid; grid-template-columns: 1fr 1fr; gap: 24px;
  @media (max-width: 900px){ grid-template-columns: 1fr; }
`
const Card = styled.div`
  background: ${({theme})=>theme.colors.surface};
  border: 1px solid ${({theme})=>theme.colors.outline};
  border-radius: ${({theme})=>theme.radius.md};
  padding: 20px;
  p{ margin: 0 0 8px; color: ${({theme})=>theme.colors.mute}; }
  strong{ color: ${({theme})=>theme.colors.text}; }
`

export default function About(){
  return (
    <Section id="sobre" title="Sobre Mim" ariaLabel="Sobre a Isadora">
      <Grid>
        <div>
          <p>
            Sou a <strong>Isadora Sousa</strong>, desenvolvedora em formação pela EBAC, com experiência prática
            em projetos de front-end e back-end. Tenho perfil colaborativo, empático e foco em
            aprendizado contínuo, aplicando boas práticas de código e acessibilidade.
          </p>
          <p>
            Atuei no <em>Tarefas EBAC</em> (React/TypeScript), no <em>Diário de Bordo</em> (JS puro/CRUD) e construí a <em>Mini-Poke API</em> (FastAPI + PostgreSQL).
          </p>
        </div>
        <Card aria-label="Informações de contato">
          <p><strong>Cidade:</strong> Salvador/BA</p>
          <p><strong>E-mail:</strong> <a href="mailto:isadorasous@gmail.com">isadorasous@gmail.com</a></p>
          <p><strong>Telefone:</strong> <a href="tel:+5571992513454">+55 71 99251-3454</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/isadorasols/" target="_blank" rel="noreferrer">linkedin.com/in/isadorasols</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/isadorasous-a11y" target="_blank" rel="noreferrer">github.com/isadorasous-a11y</a></p>
        </Card>
      </Grid>
    </Section>
  )
}
