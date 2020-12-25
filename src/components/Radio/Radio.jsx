import React from 'react'
import {Radio as AntdRadio} from 'antd'

import './Radio.scss'

function Radio({label, additionalClassnames}) {
    return (
        label ? <label className={`radio ${additionalClassnames||''}`}></label>
        : <AntdRadio className={`radio ${additionalClassnames||''}`} />
    )
}

export default Radio
