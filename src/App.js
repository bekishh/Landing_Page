import { styled } from "@mui/material";
import Lackin from "./components/Lackin";
import Werki from "./components/Werki";

function App() {
  const navigateToFirstPage = () => {
    window.location.href = "https://lackin-rostock.de/";
  };

  // const navigateToSecondPage = () => {
  //   window.location.href = "Ссылка_второй_страницы";
  // };

  return (
    <Container className="App">
      <Werki onClick={navigateToFirstPage} />
      <Lackin onClick={navigateToFirstPage} />
    </Container>
  );
}

export default App;

const Container = styled("div")(() => ({
  display: "flex",
  width: "100%",
  height: "100vh",
}));
