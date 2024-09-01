/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

function ContextProvider(props) {
  const [inputValue, setInputValue] = useState("");
  const [recentPrompts, setRecentPrompts] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultsData] = useState("");

  const delayResponse = (index, nextWord) => {
    setTimeout(() => {
      setResultsData((prevWords) => prevWords + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResults(false);
  };

  const onSent = async (prompt) => {
    setResultsData("");
    setLoading(true);
    setShowResults(true);
    const response = await runChat(prompt);

    let responseArray = response.split("**").map((word, index) => {
      if (index === 0 || index % 2 !== 1) {
        return word;
      }
      return `<b>${word}</b>`;
    });

    let newResponse = responseArray.join("").replace(/(\n|\* )/g, "<br />");

    newResponse.split(" ").map((word, index) => {
      delayResponse(index, `${word} `);
    });

    setLoading(false);
  };

  const ContextValue = {
    inputValue,
    setInputValue,
    recentPrompts,
    setRecentPrompts,
    currentPrompt,
    setCurrentPrompt,
    loading,
    resultData,
    showResults,
    onSent,
    newChat,
  };

  return (
    <Context.Provider value={ContextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
