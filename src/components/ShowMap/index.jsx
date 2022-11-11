import PrimaryButton from "../PrimaryButton";
import { LOCATION_LINKS } from "./Locations";

export default function ShowMap(props) {
    const openMap = () => {
        const index = props.index
        const windowSize = 'width' + window.innerWidth + ',height=' + window.innerHeight + ",scrollbars=no"
        const url = LOCATION_LINKS[index]
        window.open(url, 'popup', windowSize)
    };
    return (
        <div onClick={openMap}>
            <PrimaryButton innerText='Show on Map' />
        </div>)
}
