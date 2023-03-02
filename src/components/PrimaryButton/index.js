export default function PrimaryButton(props) {
  return (
    <button
      className="rounded-[40px] bg-primary-light text-white font-bold hover:bg-primary-dark py-2 px-6 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      style={{ maxHeight: "75px" }}
      onClick={props.onClick}
    >
      <h3>{props.innerText}</h3>
    </button>
  );
}
