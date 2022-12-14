import { useState } from "react";

export default function index(props) {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        onChange={handleChange}
        value={email}
        placeholder={props.placeholder}
        className='input-field'
      />
    </div>
  );
}

