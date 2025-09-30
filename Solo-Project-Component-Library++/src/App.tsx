import "./App.css";
import Banner from "./components/banner/Banner";
import BannerTitle from "./components/banner/BannerTitle";
import BannerText from "./components/banner/BannerText";

function App() {
  return (
    <>
      <Banner>
        <BannerTitle>Tytuł</BannerTitle>
        <BannerText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </BannerText>
      </Banner>
      <Banner variant="warning">
        <BannerTitle>Tytuł</BannerTitle>
        <BannerText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </BannerText>
      </Banner>
      <Banner variant="error">
        <BannerTitle>Tytuł</BannerTitle>
        <BannerText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </BannerText>
      </Banner>
      <Banner variant="neutral">
        <BannerTitle>Tytuł</BannerTitle>
        <BannerText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consectetur iste praesentium.
        </BannerText>
      </Banner>

      <Banner>
        <BannerTitle>Tytuł</BannerTitle>
      </Banner>
      <Banner variant="warning">
        <BannerTitle>Tytuł</BannerTitle>
      </Banner>
      <Banner variant="error">
        <BannerTitle>Tytuł</BannerTitle>
      </Banner>
      <Banner variant="neutral">
        <BannerTitle>Tytuł</BannerTitle>
      </Banner>
    </>
  );
}

export default App;
