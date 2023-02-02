export default function MobileDay({ index,text, events }) {
  return (
    <div className="group outline-none" tabIndex={index}>
      <div className="group bg-primary flex justify-between px-6 py-4 items-center text-gray-500 transition ease duration-500 cursor-pointer">
        <h3 className="text-white group-focus:text-black transition ease duration-500">
          {text}
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 -rotate-90 inline-flex justify-center fill-secondary-light transform transition ease duration-500 group-focus:-rotate-180"
          viewBox="0 0 512 512"
        >
          <title>Select</title>
          <path d="M256 32L20 464h472L256 32z" />
        </svg>
      </div>
      <div className="group-focus:max-h-screen max-h-0 px-4 overflow-hidden ease duration-500">
        <div className="p-2 text-justify">{events}</div>
      </div>
    </div>
  );
}
