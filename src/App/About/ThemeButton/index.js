import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  ThemeBackgroundIcon,
  ThemeSunIcon,
  ThemeToggleIcon,
  Title,
  Wrapper,
} from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeButton = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Title>Dark mode {isDarkTheme ? "on" : "off"} </Title>
        <Button onClick={() => dispatch(toggleTheme())}>
          <ThemeBackgroundIcon />
          <ThemeToggleIcon moveToRight={!isDarkTheme} />
          <ThemeSunIcon moveToRight={!isDarkTheme} />
        </Button>
       </Wrapper> 
    </Container>
  );
};
