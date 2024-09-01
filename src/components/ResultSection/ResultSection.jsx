/* eslint-disable react/prop-types */
import IconBlue from "../../assets/svgs/IconBlue";
import "./ResultSection.css";

function SectionHeader({ prompt }) {
  return (
    <div className="sectionHeader">
      <button>M</button>
      <h2>{prompt}</h2>
    </div>
  );
}

function SectionContent({ response, loading }) {
  return (
    <div className="sectionContent">
      <IconBlue loading={loading} />
      {loading ? (
        <div className="loader">
          <hr />
          <hr />
          <hr />
        </div>
      ) : (
        <div dangerouslySetInnerHTML={response} className="result" />
      )}
    </div>
  );
}

function ResultSection({ prompt, response, loading }) {
  return (
    <section className="resultSection">
      <SectionHeader prompt={prompt} />
      <SectionContent response={{ __html: response }} loading={loading} />
    </section>
  );
}

export default ResultSection;
