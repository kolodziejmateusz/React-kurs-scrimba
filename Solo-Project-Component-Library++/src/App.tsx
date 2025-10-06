import "./App.css";
import Banner from "./components/banner/index";

function App() {
  return (
    <>
      <Banner>
        <Banner.Title>Tytuł</Banner.Title>
        <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </Banner.Text>
      </Banner>
      <Banner variant="warning">
        <Banner.Title>Tytuł</Banner.Title>
        <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </Banner.Text>
      </Banner>
      <Banner variant="error">
        <Banner.Title>Tytuł</Banner.Title>
        <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </Banner.Text>
      </Banner>
      <Banner variant="neutral">
        <Banner.Title>Tytuł</Banner.Title>
        <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </Banner.Text>
      </Banner>

      <Banner>
        <Banner.Title>Tytuł</Banner.Title>
      </Banner>
      <Banner variant="warning">
        <Banner.Title>Tytuł</Banner.Title>
      </Banner>
      <Banner variant="error">
        <Banner.Title>Tytuł</Banner.Title>
      </Banner>
      <Banner variant="neutral">
        <Banner.Title>Tytuł</Banner.Title>
      </Banner>
    </>
  );
}

export default App;
