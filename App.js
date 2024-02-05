import React, { useState, useEffect } from "react";

const words = [
  "at",
  "kopke",
  "insan",
  "agac",
  "dondurma",
  "karpuz",
  "kedi",
  "masa",
  "sandalya",
  "sise",
  "yol",
];

function App() {
  const [selectedWord, setSelectedWord] = useState("");
  const [englishTranslations, setEnglishTranslations] = useState(
    Array(5).fill("")
  );

  useEffect(() => {
    selectRandomWord();
  }, []);
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  setSelectedWord(randomWord);
  setEnglishTranslations(Array(5).fill(""));

  const handleTranslationChange = (index, value) => {
    const newTranslations = [...englishTranslations];
    newTranslations[index] = value;
    setEnglishTranslations(newTranslations);
  };

  return (
    <>
      <div className="App">
        <h1>{`"${selectedWord}" kelimesinin İngilizce çevirisini 5 kez girin`}</h1>
        {Array(5)
          .fill()
          .map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Çeviri #${index + 1}`}
              value={englishTranslations[index]}
              onChange={(e) => handleTranslationChange(index, e.target.value)}
            />
          ))}
        <button onClick={selectRandomWord}>Yeni Kelime</button>
      </div>
    </>
  );
}

export default App;
