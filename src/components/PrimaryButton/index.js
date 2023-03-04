export default function PrimaryButton(props) {
  let color;
  if (props.color === "dark") {
    color = "bg-primary-dark hover:bg-primary-light";
  } else {
    color = "bg-primary-light hover:bg-primary-dark";
  }
  return (
    <button
      className={`rounded-[40px] text-white font-bold ${color} py-2 px-6 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
      style={{ maxHeight: "75px" }}
      onClick={props.onClick}
    >
      <h3>{props.innerText}</h3>
    </button>
  );
}
