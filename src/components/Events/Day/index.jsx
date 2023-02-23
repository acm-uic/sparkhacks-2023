export default function Day({ isActive, text, handleClick }) {

    const baseStyle = "py-2 "

    // Apply styling based on selected day

    const styling = isActive === true ? baseStyle + "bg-primary-dark" : baseStyle + "bg-primary-light"

    // Return styled button

    return (<button className={styling} onClick={handleClick}>{text}</button>);
}