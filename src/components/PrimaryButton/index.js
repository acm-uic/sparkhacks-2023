export default function PrimaryButton(props) {
  return (
    <button
      className="rounded-[40px] bg-primary-light text-white font-bold hover:bg-primary-dark py-2 px-6 w-fit"
      style={ { maxHeight: "75px", maxWidth: "none", minWidth: "100%" } }
      onClick={ props.onClick }
    >
      <h3>{ props.innerText }</h3>
    </button>
  );
}
