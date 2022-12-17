export default function index(props) {

  return (
    <div>
      <input
        type='text'
        onChange={props.onChange}
        value={props.onChange}
        placeholder={props.placeholder}
        className='input-field'
      />
    </div>
  );
}

