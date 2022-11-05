import PrimaryButton from "../PrimaryButton";
import PropTypes from 'prop-types';

export default function ShowMap(props) {
    const openMap = () => {
        const windowSize = 'width' + window.innerWidth + ',height=' + window.innerHeight + ",scrollbars=no"
        const url = `https://maps.google.com?q=${props.lat},${props.lng}`
        window.open(url, 'popup', windowSize)
    };
    return (
        <div onClick={openMap}>
            <PrimaryButton innerText='Show on Map' />
        </div>)
}

ShowMap.propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number,
}

ShowMap.defaultTypes = {
    lat: 41.8685636,
    lng: -87.6506384,
}