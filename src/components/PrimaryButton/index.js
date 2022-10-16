export default function PrimaryButton(props) {
    return (<button className='rounded-[40px] bg-primary-light text-white font-bold hover:bg-primary-dark py-3 px-3 w-fit'>
              <h3>{props.innerText}</h3>
            </button>)
  };