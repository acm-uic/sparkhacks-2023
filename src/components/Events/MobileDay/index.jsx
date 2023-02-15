import { useRef, useEffect } from "react";

export default function MobileDay({ index, text, events }) {
  const divRef = useRef(null);
  useEffect(() => {
    if (index == 1) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div className="group outline-none" ref={divRef} tabIndex={index}>
      <div className="group bg-primary group-focus:bg-primary-dark flex justify-between px-6 py-4 items-center transition-colors ease-in-out duration-300 cursor-pointer">
        <h3 className="text-white">
          {text}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 -rotate-90 inline-flex justify-center fill-secondary-light transition-transform ease-in-out duration-500 group-focus:-rotate-180"
          viewBox="0 0 512 512"
        >
          <title>Select</title>
          <path d="M256 32L20 464h472L256 32z" />
        </svg>
      </div>
      <div className="group group-focus:max-h-extra max-h-0 px-4 overflow-hidden transition-all transform-gpu	ease-in-out duration-700">
        <div className="p-2 text-justify">{events}</div>
      </div>
    </div>
  );
}
