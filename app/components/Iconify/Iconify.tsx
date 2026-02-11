import React from 'react'
import { Icon } from "@iconify/react";

const Iconify = ({ icon, className }: { icon: string, className: string }) => {
    return (
        <Icon icon={icon} className={className} />
    )
}

export default Iconify