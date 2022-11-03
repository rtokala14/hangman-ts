import styles from "./index.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetter: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export function Keyboard({
  activeLetter,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  console.log(activeLetter);
  return (
    <div className=" grid grid-cols-12 gap-2">
      {KEYS.map((key) => {
        const isActive = activeLetter.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
