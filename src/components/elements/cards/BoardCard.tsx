'use client'
import React, { useEffect, useState } from 'react'
import CustomBadge from '@/components/common/CustomBadge'
import { getRandomColor } from '@/utils/common/get-colour'
import { IBoard } from '@/interface/IBoard'
import { ILabel } from '@/interface/ILabel'
import { DeleteBoard } from '../modals/DeleteBoard'
import Image from 'next/image'
import dele from '../../../../public/images/dele.svg'

interface BoardCardProps {
    data: IBoard,
    fetchBoards?: Function;
    isHide?: boolean;
    handleBoardClick?: Function;
}

const BoardCard: React.FC<BoardCardProps> = ({ data, fetchBoards, isHide, handleBoardClick }) => {
    const [dotColor, setDotColor] = useState<string | null>(null);
    const [currentDeleteId, setCurrentDeleteId] = useState('');

    useEffect(() => {
        const randomColor = getRandomColor();
        setDotColor(randomColor);
    }, []);

    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentDeleteId(id);
    };

    return (
        <div className='custom-card-adj p-3 mb-3 min-height-card pointer position-relative shadow' onClick={(e) => handleBoardClick && handleBoardClick(String(data?.id), e)}>
            <div className='d-flex gap-2'>
                <div className={`dot-circle mt-1 ${dotColor}`}></div>
                <div>
                    <h6 className='fs-14 mb-1'>{data?.name}</h6>
                    <div className='fs-12 fw-normal grey mb-2'>
                        {data?.description}
                    </div>
                    <div className='row gap-1 m-0'>
                        {data?.labels.map((data: ILabel, index: number) => (
                            <div key={index} className='col-auto p-0'>
                                <CustomBadge data={data} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {!isHide &&
                <div className="position-absolute top-0 end-0 m-2">
                    <Image
                        src={dele}
                        width={18}
                        height={18}
                        alt={''}
                        className=""
                        onClick={(e) => handleDelete(String(data?.id), e)}
                    />
                </div>}

            {currentDeleteId && <DeleteBoard deleteId={currentDeleteId} afterDelete={() => (fetchBoards && fetchBoards(), setCurrentDeleteId(''))} onCancel={() => setCurrentDeleteId('')} />}

        </div>
    )
}

export default BoardCard