import { useState } from "react";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className=" max-w-4xl flex flex-col gap-8 m-auto items-center">
      <div className=" text-4xl text-center">Lose Win</div>
    </div>
  );
}

export default App;
