import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Portfolio } from "./App/Portfolio";
import { Container } from "./common/Container";
import { About } from "./App/About";
import { SectionSkills } from "./App/SectionSkills";
import { skills, toLearn } from "./App/SectionSkills/skills";
import { Footer } from "./App/Footer";
import { selectIsDarkTheme } from "./App/About/ThemeButton/themeSlice";
import { lightTheme, darkTheme } from "./theme";
import { ThemeButton } from "./App/About/ThemeButton";

function App({ theme, toggleTheme}) {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <Container>
        <ThemeButton theme={theme} toggleTheme={toggleTheme}/> 
          <About />
          <SectionSkills 
            title="My skill set includes 🛠️" 
            content={skills} />
          <SectionSkills
            title="What I want to learn next 🚀"
            content={toLearn}
          />
          <Portfolio />
          <Footer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
