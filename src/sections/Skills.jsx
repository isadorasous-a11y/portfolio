import Section from '../components/Section'
import SkillTag from '../components/SkillTag'
import styled from 'styled-components'

const Wrap = styled.div` display:flex; flex-wrap:wrap; gap: 10px; `

export default function Skills(){
  const core = [
    'Python','FastAPI','JavaScript','React','TypeScript','HTML5','CSS3',
    'Git','GitHub','Docker','Docker Compose','APIs REST','UX/UI','Responsividade'
  ]
  const plus = [
    'SQLAlchemy','PostgreSQL','Pytest','CI/CD','Acessibilidade Web','Scrum'
  ]
  return (
    <Section id="habilidades" title="Habilidades">
      <p>Principais tecnologias e competências que venho praticando em projetos reais.</p>
      <h3>Core</h3>
      <Wrap>{core.map(s => <SkillTag key={s}>{s}</SkillTag>)}</Wrap>
      <h3 style={{marginTop:24}}>Conhecimentos</h3>
      <Wrap>{plus.map(s => <SkillTag key={s}>{s}</SkillTag>)}</Wrap>
    </Section>
  )
}
