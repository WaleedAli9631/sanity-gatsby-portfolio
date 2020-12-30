import React from "react";
import styled from "styled-components";
import PortableText from "@sanity/block-content-to-react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"


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


const Contact = props =>  {

       // Initiate forms
  const { register, handleSubmit, errors, reset } = useForm()
  // Transforms the form data from the React Hook Form output to a format Netlify can read
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }
  // Handles the post process to Netlify so we can access their serverless functions
  const handlePost = (formData, event) => {
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", ...formData }),
    })
      .then((response) => {
        navigate("/success/")
        reset()
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    event.preventDefault()
  }

      return(
        <div className = {props.className}>
            <Layout>
                <div className = "Content">
                <PortableText blocks={props.body} serializers={serializers} />
                <form
                  onSubmit={handleSubmit(handlePost)}
                  name="contact-form"
                  method="POST"
                  action="/success/"
                  data-netlify="true"
                  netlify-honeypot="got-ya"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <input
                    type="hidden"
                    name="formId"
                    value="contact-form"
                    ref={register()}
                  />
                  <label htmlFor="name">
                    <p>Name</p>
                    {errors.name && <span>Invalid name</span>}
                    <input name="name" ref={register({ required: true })} />
                  </label>
                  <label htmlFor="email">
                    <p>Email</p>
                    {errors.email && <span>Please format email correctly</span>}
                    <input
                      name="email"
                      ref={register({
                        required: true,
                        pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                      })}
                    />
                  </label>
                  <label htmlFor="message">
                    <p>Message</p>
                    <textarea rows="4" name="message" ref={register()} />
                  </label>
                  <label
                    htmlFor="got-ya"
                    style={{
                      position: "absolute",
                      overflow: "hidden",
                      clip: "rect(0 0 0 0)",
                      height: "1px",
                      width: "1px",
                      margin: "-1px",
                      padding: "0",
                      border: "0",
                    }}
                  >
                    Don’t fill this out if you're human:
                    <input tabIndex="-1" name="got-ya" ref={register()} />
                  </label>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
                </div> 
                
            </Layout>     
        </div>
      )
      
    
}

    const ContactStyled = styled(Contact)`
   
    .Content{
        margin: auto;
        width: 1000px;
        @media only screen and (max-width: 1000) {
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
         about: sanityContact {
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