import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLEtter = useCallback(
    (key: string) => {
      if (guessedLetters.includes(key)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, key]);
    },
    [guessedLetters]
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

  return (
    <div className=" max-w-4xl flex flex-col gap-8 m-auto items-center">
      <div className=" text-4xl text-center">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord word={wordToGuess} guessedLetter={guessedLetters} />
      <div className=" self-stretch">
        <Keyboard
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
