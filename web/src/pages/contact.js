import React from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { useForm } from "react-hook-form"
import { navigate } from "gatsby"
// import ReCAPTCHA from "react-google-recaptcha"


const ContactContent = styled.div`
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.35em;
  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;


  
const StyledH1 = styled.h1`
color: ${props => props.theme.colors.black};
font-family: ${props => props.theme.fonts.sans};
`;
const StyledH2 = styled.h2`
color: ${props => props.theme.colors.black};
font-family: ${props => props.theme.fonts.sans};
`;

const client = require('@sanity/client')({
  projectId: 'qbktwchk',
  dataset: 'production',
  useCdn: true
})

const builder = imageUrlBuilder(client)
 
function urlFor(source) {
  return builder.image(source)
}

const serializers = {
  types: {
    code: ({node = {}}) => {
      const {code,language} = node;
      if (!code)
      {
        return null;
      }
      return <SyntaxHighlighter language= {language || 'text'} showLineNumbers = 'true' wrapLongLines = 'true'>
      {code}
    </SyntaxHighlighter>
    },
    block: props => {
      if (props.node.style === "h1")
      {
        return <StyledH1>{props.children}</StyledH1>
      }
      if (props.node.style === "h2")
      {
        return <StyledH2>{props.children}</StyledH2>
      }
      return <ContactContent>{props.children}</ContactContent>
   
    },
    image: ({ node }) => {
      return (
        <img
          className = "pictures"
          src={urlFor(node.asset).url()
            }
          alt = "Decriptive"
        />
      );
    },

  }
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const Contact = props =>  {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

      return(
        <div className = {props.className}>
            <Layout>
                <div className = "Content">
                  <PortableText blocks={props.body} serializers={serializers} />
                  <div className = "form-style-6">
                      <h1>Contact Me</h1>
                      <form
                          name="contact"
                          method="post"
                          action="/"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          onSubmit={handleSubmit}
                        >
                          <input type="hidden" name="form-name" value="contact" />
                          <p hidden>
                            <label>
                              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                            </label>
                          </p>
                          <p>
                            <label>
                              <input type="text" name="name" placeholder ="Name" onChange={handleChange} />
                            </label>
                          </p>
                          <p>
                            <label>
                              <input type="email" name="email" placeholder ="Email" onChange={handleChange} />
                            </label>
                          </p>
                          <p>
                            <label>
                              <textarea name="message" placeholder ="Say hello!" onChange={handleChange} />
                            </label>
                          </p>
                          <p>
                            <button className ="submitButton" type="submit">Send</button>
                          </p>
                        </form>
                    </div>
                </div> 
                
            </Layout>     
        </div>
      )
      
    
}

    const ContactStyled = styled(Contact)`

    .recapcha
    {
    }

    .form-style-6{
      max-width: 400px;
      margin: 30px auto;

      font: 95% sans-serif;
      padding: 16px;
      background: #F7F7F7;
    }
    .form-style-6 h1{
      background: #999;
      padding: 20px 0;
      font-size: 140%;
      font-weight: 300;
      text-align: center;
      color: #fff;
      margin: -16px -16px 16px -16px;
    }
    .form-style-6 input[type="text"],
    .form-style-6 input[type="date"],
    .form-style-6 input[type="datetime"],
    .form-style-6 input[type="email"],
    .form-style-6 input[type="number"],
    .form-style-6 input[type="search"],
    .form-style-6 input[type="time"],
    .form-style-6 input[type="url"],
    .form-style-6 textarea,
    .form-style-6 select 
    {
      -webkit-transition: all 0.30s ease-in-out;
      -moz-transition: all 0.30s ease-in-out;
      -ms-transition: all 0.30s ease-in-out;
      -o-transition: all 0.30s ease-in-out;
      outline: none;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 100%;
      background: #fff;
      margin-bottom: 4%;
      border: 1px solid #ccc;
      padding: 3%;
      color: #555;
      font: 95% Arial, Helvetica, sans-serif;
    }
    .form-style-6 input[type="text"]:focus,
    .form-style-6 input[type="date"]:focus,
    .form-style-6 input[type="datetime"]:focus,
    .form-style-6 input[type="email"]:focus,
    .form-style-6 input[type="number"]:focus,
    .form-style-6 input[type="search"]:focus,
    .form-style-6 input[type="time"]:focus,
    .form-style-6 input[type="url"]:focus,
    .form-style-6 textarea:focus,
    .form-style-6 select:focus
    {
      box-shadow: 0 0 5px #999;
      padding: 3%;
      border: 1px solid #999;
    }
    
    .submitButton{
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      width: 100%;
      padding: 3%;
      background: #999;
      border-bottom: 2px solid #999;
      border-top-style: none;
      border-right-style: none;
      border-left-style: none;	
      color: #fff;
    }
    .submitButton{
      background:#999;
    }
    .Content{
      margin: auto;
      width: 1000px;
      @media only screen and (max-width: 600px) {
          width: auto;
}
  }
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  @media only screen and (max-width: 600px) {
}
 
   `;
   

   const ContactExport = () => (
    <StaticQuery
    query={graphql`
      {
        about: sanityContactPortable {
          _rawBody
        }
      }
    `}
        render={(data) => (
        <ContactStyled body={data.about._rawBody} />
      )}
    />
   );

   export default ContactExport