import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;400;500;600;700&family=Zen+Loop&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 2rem;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    transition: all 0.25s linear;
  }
  textarea:focus {
    outline: none;
  }
  .wrapper {
   width: 80%;
   max-width: 1200px;
   margin: auto;
   padding-top: 5rem;
   margin-bottom: 5rem;
  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
    outline: none;
    font-size: 1.2rem;
    padding: 16px;
    text-transform: uppercase;
    font-weight: 600;
    background-color: ${({ theme }) => theme.bgContactBtn};
    color: ${({ theme }) => theme.text};
    border: solid 3px;
    border-color: ${({ theme }) => theme.text};
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  button:hover {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.link};
  }
  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    font-weight: 500;
  }
  a:hover {
    color: ${({ theme }) => theme.text};
  }
  h1 {
    font-size: 4rem;
    margin: 0.5rem 0;
    background: #1597E5;
    background: -webkit-linear-gradient(to bottom right, #1597E5 27%, #69DADB 53%, #1597E5 85%);
    background: -moz-linear-gradient(to bottom right, #1597E5 27%, #69DADB 53%, #1597E5 85%);
    background: linear-gradient(to bottom right, #1597E5 27%, #69DADB 53%, #1597E5 85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1.marion {
    
    margin-bottom: 1rem;
    background: linear-gradient(-60deg, #1597E5 20%, #69DADB 40%, #1597E5 60%, #69DADB 80%);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    animation: shine 5s ease-in-out infinite;
  }
  @keyframes shine {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
  h3 {
    color: ${({ theme }) => theme.text};
  }
  h2 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.textSecondary};
  }
  h2.hello {
   
    margin: 0;
  }
  .about h2 {
    color: ${({ theme }) => theme.textThird};
  }
  .content-text {
    color: ${({ theme }) => theme.contentTxt};
  }
  .toggleLangBtn {
    position: absolute;
    bottom: 0;
    left: 2rem;
    padding: 2rem 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.toggleBorder};
    background-color: ${({ theme }) => theme.buttonColor};
    cursor: pointer;
  }
  .switch_slider {
    background-color: ${({ theme }) => theme.buttonColor};
  }
  .switch_slider:before {
    background-color: ${({ theme }) => theme.toggleBorder} ;
  }
  input[type='checkbox']:checked + .switch_slider {
    background-color:${({ theme }) => theme.text};
  }
  .chevron1, .chevron2 {
    color: ${({ theme }) => theme.textThird};
  }
  figure.project_fig h2 {
    background-color:${({ theme }) => theme.bgContactBtn};
    color: ${({ theme }) => theme.text};
  }
  .social_icon {
    color: ${({ theme }) => theme.text};
  }
  .socials a {
    color: ${({ theme }) => theme.text};
  }
  .socials a:hover {
    color: ${({ theme }) => theme.link};
  }
  .form-text textarea {
    border-color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .contact input[type='text'] {
    border-bottom: solid 1px;
    border-color: ${({ theme }) => theme.text};
  }

  
`
