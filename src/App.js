import React from "react";
import { Portfolio } from "./App/Portfolio";
import { Container } from "./common/Container";
import { About } from "./App/About";
import { SectionSkills } from "./App/SectionSkills";
import { skills, toLearn } from "./App/SectionSkills/skills";
import { Footer } from "./App/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Container>
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
