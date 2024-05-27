'use client';
import React from 'react';

interface Remark {
    name: string;
    description: string;
}

interface Remarks {
    left: Remark;
    right: Remark;
}

export const RemarksContext = React.createContext<Remarks>({
    left: { name: '', description: '' },
    right: { name: '', description: '' },
});

export const RemarksProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}: {
    children: React.ReactNode;
}): React.JSX.Element => {
    const [remark, setPopups] = React.useState<Remarks>({
        left: { name: '', description: '' },
        right: { name: '', description: '' },
    });

    return (
        <RemarksContext.Provider value={remark}>
            {children}
        </RemarksContext.Provider>
    );
};

export interface PopupProps {
    remark: Remark;
    side: 'left' | 'right';
    top: number;
}

export default function Popup(popupProps: PopupProps) {
    return (
        <div
            style={{ top: `${popupProps.top}px` }}
            className={`text-white border-white border-solid border-2 text-align flex flex-col px-3 relative h-fit ${popupProps.side === 'left' ? 'left-0 mr-5' : 'right-0 ml-5'}`}
        >
            <div className='font-bold text-xl'>{popupProps.remark.name}</div>
            <div className='text-lg'>{popupProps.remark.description}</div>
        </div>
    );
}
