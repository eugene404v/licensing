import React from 'react'
import PropTypes from 'prop-types';
import {Checkbox} from 'antd' 

import { CheckIcon } from 'icons'
import './CheckBox.scss'

function CheckBox({additionalClassnames, label, defaultChecked,  disabled, onChange, name}) {

    return (
        <>
            {label && <label className={`checkbox ${additionalClassnames||''}`}>
                <Checkbox name={name} disabled={disabled} onChange={onChange} defaultChecked={defaultChecked}/>
                <span className={`checkbox__label ${disabled?'checkbox__label--disabled':''}`}>{label}</span>
            </label>}
            {!label && <Checkbox name={name} className={`checkbox ${additionalClassnames||''}`} disabled={disabled}  onChange={onChange} defaultChecked={defaultChecked} />}
        </>
    )
}

export default CheckBox

CheckBox.propTypes = {
    label: PropTypes.string,
    additionalClassnames: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    defaultChecked: PropTypes.bool,
}
