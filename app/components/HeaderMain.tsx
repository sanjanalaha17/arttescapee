'use client'

import React from 'react'
import { useWindowSize } from 'react-use'
import DesktopHeader from './HeaderDektop'
import MobileHeader from './MobileHeader'

const HeaderMain = () => {
    const { width } = useWindowSize()

    return width > 648 ? <DesktopHeader /> : <MobileHeader />
}

export default HeaderMain