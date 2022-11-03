const HEAD = (
  <div className=" w-16 h-16 rounded-full border-black border-8 absolute top-14 -right-7" />
);

const BODY = <div className=" w-2 h-28 bg-black absolute top-28 right-0" />;

const RIGHT_ARM = (
  <div className=" w-24 h-2 bg-black absolute top-36 armRotateRight" />
);

const LEFT_ARM = (
  <div className=" w-24 h-2 bg-black absolute top-36 armRotateLeft" />
);

const LEFT_LEG = <div className=" w-24 h-2 bg-black absolute legRotateLeft" />;

const RIGHT_LEG = (
  <div className=" w-24 h-2 bg-black absolute legRotateRight" />
);

export function HangmanDrawing() {
  return (
    <div className=" relative">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
      <div className=" h-16 w-3 bg-black absolute top-0 right-0" />
      <div className=" h-3 w-56 bg-black ml-32" />
      <div className=" h-96 w-3 bg-black ml-32" />
      <div className=" h-3 w-64 bg-black" />
    </div>
  );
}
