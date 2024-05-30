'use client';
import React, { Ref, useContext, useEffect, useRef, useState } from 'react';
import { RemarksContext, useRemarksContext } from './contexts/remarksContext';
import styles from './styles/popup.styles.module.css';

export type PopupProps = {
    side: 'left' | 'right';
};

export default function Popup(popupProps: PopupProps) {
    const remarks = useRemarksContext();
    const remark = remarks?.[popupProps.side];

    const ref = useRef<HTMLDivElement>(null);

    const [baseTop, setBaseTop] = useState(0);

    useEffect(() => {
        if (ref.current) {
            setBaseTop(ref.current.offsetTop);
        }
    }, [ref]);

    // play animation when the remark changes
    useEffect(() => {
        if (remark && ref !== undefined) {
            ref.current?.classList.add(styles?.['popup-animation']);
            setTimeout(() => { ref.current?.classList.remove(styles?.['popup-animation']); }, 1000);
        }
    }, [remark.top]);

    return (
        <div
            ref={ref}
            style={{
                top: `${remark.top - baseTop}px`,
                visibility: `${remark.remark.name !== '' ? 'visible' : 'hidden'}`,
            }}
            className={`text-white border-white border-solid border-2 text-align flex flex-col px-3 relative h-fit w-1/5 ${popupProps.side === 'left' ? 'left-0 mr-5' : 'right-0 ml-5'}`}
        >
            <div className='font-bold text-xl'>{remark.remark.name}</div>
            <div className='text-lg'>{remark.remark.description}</div>
        </div>
    );
}
