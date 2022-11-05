import PropTypes from 'prop-types';

export default function PrimaryButton(props) {
    return (<button className='rounded-[40px] bg-primary-light text-white font-bold hover:bg-primary-dark py-2 px-6 w-fit'>
              <h3>{props.innerText}</h3>
            </button>)
  }

PrimaryButton.defaultTypes = {
  innerText: 'no innerText prop given',
}

  PrimaryButton.propTypes = {
    innerText: PropTypes.string,
  }