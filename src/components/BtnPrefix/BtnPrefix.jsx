import React from 'react'
import PropTypes from 'prop-types';

import {AddWidgetIcon, PlusIcon} from 'icons'
import './BtnPrefix.scss'

function BtnPrefix({aditionalClassnames, text, onClick, btnIcon}) {
    const iconSwitcher = () => {
        switch(btnIcon) {
            case 'addWidget': return <AddWidgetIcon />
            case 'plus': return <PlusIcon />
        }
    }

    return (
        <button className={`btn-prefix svg-parent ${aditionalClassnames || ''}`} onClick={onClick}>
            <div className="btn-prefix__icon">{iconSwitcher()}</div>
            <div className="btn-prefix__text">{text}</div>
        </button>
    )
}

export default BtnPrefix

BtnPrefix.propTypes = {
    text: PropTypes.string,
    additionalClassnames: PropTypes.string,
    disabled: PropTypes.bool,
    btnIcon: PropTypes.string
}
