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

export function Keyboard() {
  return (
    <div className=" grid grid-cols-12 gap-2">
      {KEYS.map((key) => {
        return (
          <button className={`btn`} key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
