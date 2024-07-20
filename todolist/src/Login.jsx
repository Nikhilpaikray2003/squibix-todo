import React, { Fragment, useEffect, useState } from "react";
import {
  GlobalStyles,
  Head,
  Text,
  Span,
  Link,
  Input,
  Form,
  Container,
  FormContainer,
  SocialContainer,
  Button,
  OverlayContainer,
  OverlayPanel,
  Overlay
} from "./styles/index.style";
import { useNavigate } from "react-router-dom";

function Login() {
  const [panelActive, setPanelActive] = useState(false);
  const onSignInEvent = () => {
    setPanelActive(false);
  };

  const onSignUpEvent = () => {
    setPanelActive(true);
  };

  const navigate=useNavigate()
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  // const [status, setstatus] = useState("")
  const signer=()=>{
    console.log("SIgner CLicked" + Username);
    console.log(localStorage.getItem(JSON.stringify(Username)));
    if((localStorage.getItem(JSON.stringify(Username)))==JSON.stringify(Password))
    {
      navigate("/todo")
      localStorage.setItem("status",JSON.stringify(Username))
    }
    else{
      navigate('/')
    }
  }

  const register=()=>{
    console.log("Register Clicked");
    localStorage.setItem(JSON.stringify(Username),JSON.stringify(Password))
    navigate("/")
    setPanelActive(true);

  }
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("status"))!=null)
    {
      console.log(localStorage.getItem("status"));
      navigate("/todo")
    }
  }, [])
  

  return (
    <Fragment>
      <GlobalStyles />
      <Container
        id="container"
        className={`${panelActive ? "right-panel-active" : ""}`}
      >
        <FormContainer className="sign-up-container">
          <Form action="#" onSubmit={e => e.preventDefault()}>
            <Head>Create Account</Head>
            <SocialContainer>
              <Link href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </SocialContainer>
            <Span>or use your email for registration</Span>
            <Input type="text" placeholder="Username" value={Username} onChange={(e)=>setUsername(e.target.value)}/>
            {/* <Input type="text" placeholder="Email" /> */}
            <Input type="text" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={register}>Sign Up</Button>
          </Form>
        </FormContainer>
        <FormContainer className="sign-in-container">
          <Form action="#">
            <Head>Sign In</Head>
            <SocialContainer>
              <Link href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </Link>
              <Link href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </SocialContainer>
            <Span>or use your account</Span>
            <Input type="text" placeholder="Username" value={Username} onChange={(e)=>setUsername(e.target.value)}/>
            {/* <Input type="text" placeholder="Email" /> */}
            <Input type="text" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <Link href="#">Forgot your password?</Link>
            <Button onClick={signer}>Sign In</Button>
          </Form>
        </FormContainer>
        <OverlayContainer>
          <Overlay>
            <OverlayPanel className="overlay-left">
              <Head>Welcome Back!</Head>
              <Text>
                To keep connected with us please login with your personal info
              </Text>
              <Button className="ghost" id="signIn" onClick={onSignInEvent}>
                Sign In
              </Button>
            </OverlayPanel>
            <OverlayPanel className="overlay-right">
              <Head>Hello, Friend!</Head>
              <Text>Enter your personal details and start journey with us</Text>
              <Button className="ghost" id="signUp" onClick={onSignUpEvent}>
                Sign Up
              </Button>
            </OverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Fragment>
  );
}

export default Login;
