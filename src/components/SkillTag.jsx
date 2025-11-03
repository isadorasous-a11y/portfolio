import styled from 'styled-components'

const Pill = styled.span`
  display:inline-block;
  padding: 8px 12px;
  border-radius: ${({theme})=>theme.radius.pill};
  border: 1px solid ${({theme})=>theme.colors.outline};
  color: ${({theme})=>theme.colors.text};
  font-size: 14px;
`

export default function SkillTag({children}){ return <Pill>{children}</Pill> }
