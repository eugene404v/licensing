import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import PropTypes from 'prop-types';

import './Link.scss'

function Link({additionalClassnames, to, text}) {
    return (
        <RouterLink to={to} className={`link ${additionalClassnames||''}`}>{text}</RouterLink>
    )
}

export default Link

Link.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    additionalClassnames: PropTypes.string,
    to: PropTypes.string
}
