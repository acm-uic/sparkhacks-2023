import PropTypes from 'prop-types';

export default function SocialMediaBubble(props) {
    return (
        <div>
            <button className="relative bg-primary h-[300px] w-[300px] rounded-full border-8 border-primary-dark items-center justify-center inline-flex">
                <img className='w-2/4 h-2/4' src={require('../../assets/icons/' + props.name)} alt={props.name}/>
            </button>
        </div>
    );
}

SocialMediaBubble.propTypes = {
    name: PropTypes.string
};