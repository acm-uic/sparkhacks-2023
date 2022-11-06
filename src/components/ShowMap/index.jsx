import PrimaryButton from "../PrimaryButton";

export default function ShowMap(props) {
    const openMap = () => {
        const windowSize = 'width' + window.innerWidth + ',height=' + window.innerHeight + ",scrollbars=no"
        const url = props.link
        window.open(url, 'popup', windowSize)
    };
    return (
        <div onClick={openMap}>
            <PrimaryButton innerText='Show on Map' />
        </div>)
}
