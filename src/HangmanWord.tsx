type wordToGuessProp = {
  word: string;
  guessedLetter: string[];
  reveal?: boolean;
};

export function HangmanWord({
  word,
  guessedLetter,
  reveal = false,
}: wordToGuessProp) {
  //   const word = "test";
  //   const guessedLetters = ["t", "e"];
  return (
    <div className=" flex gap-3 text-8xl font-mono font-medium uppercase">
      {word.split("").map((letter, index) => (
        <span className=" border-b-8 border-b-black" key={index}>
          <span
            style={{
              visibility:
                guessedLetter.includes(letter) || reveal ? "visible" : "hidden",
              color:
                !guessedLetter.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
