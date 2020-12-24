import React from 'react'
import PropTypes from 'prop-types';

import './Btn.scss'

function Btn({text, additionalClassnames, onClick, disabled}) {
    return (
        <button className={`btn ${additionalClassnames||''}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Btn

Btn.propTypes = {
    text: PropTypes.string,
    additionalClassnames: PropTypes.string,
    disabled: PropTypes.bool
}
