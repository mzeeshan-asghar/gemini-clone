import "./HeroSection.css";
import promptSuggestionData from "../../api/promptSuggestion.json";

function SectionHeader() {
  return (
    <div className="sectionHeader">
      <h1>
        <span>Hello, M</span>
        <span>How can I help you today?</span>
      </h1>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="sectionContent promptSuggestionList">
      {promptSuggestionData.map((prompt, index) => (
        <div className="promptCard" key={index}>
          <h2>{prompt.title}</h2>
          <span className="material-symbols-outlined">{prompt.icon}</span>
        </div>
      ))}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="heroSection">
      <SectionHeader />
      <SectionContent />
    </section>
  );
}

export default HeroSection;
