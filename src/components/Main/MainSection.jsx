import "./MainSection.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import ResultSection from "../ResultSection/ResultSection";
import { useContext } from "react";
import { Context } from "../../context/Context";

Function;

function MainSection() {
  const { currentPrompt, resultData, showResults, loading } =
    useContext(Context);

  return (
    <main className="mainSection">
      <Header />
      {showResults ? (
        <ResultSection
          prompt={currentPrompt}
          response={resultData}
          loading={loading}
        />
      ) : (
        <HeroSection />
      )}
      <Footer />
    </main>
  );
}

export default MainSection;
