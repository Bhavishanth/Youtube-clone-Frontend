import { useState } from "react";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import { useSelector } from "react-redux";


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() 
{
  const [darkMode, setDarkMode] = useState(true);
  
let { currentUser } = useSelector((state) => state.user);
const navigate = useNavigate();

  function Signout(){
    
    currentUser = false;
    navigate("/signin", { replace: true})

  }
  console.log(currentUser);
  

  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar>  
              </Navbar> 
              <button onClick={Signout}>Logout</button>
              
            <Wrapper>
              <Routes>
              
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trends" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route path="search" element={<Search />} />
                  <Route path="signin" element={<SignIn />} />
                

                  <Route
                    path="signin"
                    element={currentUser ? <Home /> : <SignIn />}
                  />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        
      </Container>
    </ThemeProvider>
  );
}

export default App;
