import "./Footer.css";
import ChatInputSection from "../ChatInputSection/ChatInputSection";

function SectionContent() {
  return (
    <div className="sectionContent">
      <p>
        Gemini may display inaccurate info, including about people, so
        double-check its responses.
      </p>
      <a href="#">Your privacy & Gemini Apps</a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="primaryFooter">
      <ChatInputSection />
      <SectionContent />
    </footer>
  );
}

export default Footer;
