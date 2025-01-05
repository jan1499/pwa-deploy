import { ILabel } from '@/interface/ILabel'
import React from 'react'

interface BadgeProps {
    data: ILabel
}

const CustomBadge: React.FC<BadgeProps> = ({ data }) => {
    return (
        <div className='custom-badge1 px-1 fs-10'>{data?.name}</div>
    )
}

export default CustomBadge