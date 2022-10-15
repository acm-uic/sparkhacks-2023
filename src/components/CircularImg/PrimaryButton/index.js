export default function PrimaryButton(props) {
    return (<button className='rounded-[40px] bg-[#d07bdb] text-white font-bold hover:bg-[#54185c] py-3 px-6 w-fit'>
              <h3>{props.innerText}</h3>
            </button>)
  };