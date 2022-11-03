type wordToGuessProp = {
  word: string;
  guessedLetter: string[];
};

export function HangmanWord({ word, guessedLetter }: wordToGuessProp) {
  //   const word = "test";
  //   const guessedLetters = ["t", "e"];
  return (
    <div className=" flex gap-3 text-8xl font-mono font-medium uppercase">
      {word.split("").map((letter, index) => (
        <span className=" border-b-8 border-b-black" key={index}>
          <span
            style={{
              visibility: guessedLetter.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
