import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components'
import projects from '../data/projects'

const Grid = styled.div`
  display:grid; gap: 18px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 900px){ grid-template-columns: 1fr; }
`

export default function Projects(){
  return (
    <Section id="projetos" title="Projetos">
      <Grid role="list">
        {projects.map(p => (
          <div role="listitem" key={p.title}>
            <ProjectCard {...p} />
          </div>
        ))}
      </Grid>
    </Section>
  )
}
