import Section from '../components/Section'
import styled from 'styled-components'
import { useState } from 'react'

const Form = styled.form`
  display:grid; gap: 12px; max-width: 560px;
  input, textarea {
    background: ${({theme})=>theme.colors.surface};
    border: 1px solid ${({theme})=>theme.colors.outline};
    border-radius: ${({theme})=>theme.radius.sm};
    color: ${({theme})=>theme.colors.text};
    padding: 12px;
  }
  button{
    justify-self: start;
    padding: 12px 16px; border: 0;
    border-radius: ${({theme})=>theme.radius.pill};
    background: ${({theme})=>theme.colors.primary}; color:#0a0a0a;
    font-weight: 700; cursor: pointer;
  }
`

export default function Contact(){
  const [status, setStatus] = useState(null)

  function onSubmit(e){
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    // Simplesmente abre o e-mail do usuário (sem backend).
    const mailto = `mailto:isadorasous@gmail.com?subject=Contato%20via%20Portfólio%20-%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`
    window.location.href = mailto
    setStatus('Abrindo seu cliente de e-mail...')
  }

  return (
    <Section id="contato" title="Contato">
      <p>Prefere redes? <a href="https://www.linkedin.com/in/isadorasols/" target="_blank" rel="noreferrer">LinkedIn</a> • <a href="https://github.com/isadorasous-a11y" target="_blank" rel="noreferrer">GitHub</a></p>
      <Form onSubmit={onSubmit} aria-label="Formulário de contato">
        <label>
          Nome
          <input name="name" type="text" required placeholder="Seu nome" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required placeholder="seu@email.com" />
        </label>
        <label>
          Mensagem
          <textarea name="message" rows="5" required placeholder="Como posso ajudar?" />
        </label>
        <button type="submit">Enviar</button>
        {status && <small aria-live="polite">{status}</small>}
      </Form>
    </Section>
  )
}
