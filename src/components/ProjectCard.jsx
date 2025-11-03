import styled from 'styled-components'

const Card = styled.article`
  background: ${({theme})=>theme.colors.surface};
  border: 1px solid ${({theme})=>theme.colors.outline};
  border-radius: ${({theme})=>theme.radius.md};
  box-shadow: ${({theme})=>theme.shadow.sm};
  overflow: hidden;
  display:flex; flex-direction:column;
`

const Thumb = styled.div`
  aspect-ratio: 16/9;
  background: linear-gradient(180deg, rgba(45,212,191,0.2), rgba(15,22,32,0.3));
  display:flex; align-items:center; justify-content:center;
  font-weight:700; letter-spacing:.5px; color: ${({theme})=>theme.colors.primary};
`

const Body = styled.div`
  padding: 18px;
  display:flex; flex-direction:column; gap: 10px;
  p{ color: ${({theme})=>theme.colors.mute}; margin:0; }
  ul{ margin: 0; padding: 0; list-style: none; display:flex; flex-wrap:wrap; gap:8px; }
  a.primary{
    align-self: flex-start;
    padding: 10px 14px;
    border-radius: ${({theme})=>theme.radius.pill};
    background: ${({theme})=>theme.colors.primary};
    color: #0a0a0a; font-weight:600;
  }
  a.secondary{ color: ${({theme})=>theme.colors.primary}; }
`

export default function ProjectCard({title, description, techs, repo, demo, imageAlt}){
  return (
    <Card>
      <Thumb aria-label={imageAlt || title}>{title}</Thumb>
      <Body>
        <h3 style={{margin:'0 0 2px'}}>{title}</h3>
        <p>{description}</p>
        <ul aria-label="Tecnologias utilizadas">
          {techs.map(t=> <li key={t}><code>{t}</code></li>)}
        </ul>
        <div style={{display:'flex', gap:12}}>
          {demo && <a className="primary" href={demo} target="_blank" rel="noreferrer">Demo</a>}
          {repo && <a className="secondary" href={repo} target="_blank" rel="noreferrer">Repositório</a>}
        </div>
      </Body>
    </Card>
  )
}
