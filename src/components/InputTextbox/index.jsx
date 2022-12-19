export default function InputTextbox(props) {

  return (
    <div>
      <input
        type='text'
        onChange={props.onChange}
        placeholder={props.placeholder}
        className='input-field'
      />
    </div>
  );
}

