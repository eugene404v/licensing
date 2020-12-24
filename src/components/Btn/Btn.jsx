import React from 'react'
import PropTypes from 'prop-types';

import './Btn.scss'

function Btn({text, additionalClassnames, onClick}) {
    return (
        <button className={`btn ${additionalClassnames}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Btn

Btn.PropTypes = {
    text: PropTypes.string,
    additionalClassnames: PropTypes.string,
}
