import {
  Button,
  Container,
  ThemeBackgroundIcon,
  ThemeSunIcon,
  ThemeToggleIcon,
  Title,
  Wrapper,
} from "./styled";

export const ThemeButton = () => {
  return (
    <Container>
      <Wrapper>
      <Button>
        <Title>Dark mode "off"</Title>
          <ThemeBackgroundIcon />
          <ThemeToggleIcon />
          <ThemeSunIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};
