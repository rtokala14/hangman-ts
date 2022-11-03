import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLEtter = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, key]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLEtter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      if (!isLoser || isWinner) return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [isLoser, isWinner]);

  return (
    <div className=" max-w-4xl flex flex-col gap-8 m-auto items-center">
      <div className=" text-4xl text-center">
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice try - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        word={wordToGuess}
        guessedLetter={guessedLetters}
      />
      <div className=" self-stretch">
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) => {
            wordToGuess.includes(letter);
          })}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLEtter}
        />
      </div>
    </div>
  );
}

export default App;
