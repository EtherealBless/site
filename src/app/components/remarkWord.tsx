'use client';
import React, {
    Dispatch,
    ReactNode,
    Ref,
    useContext,
    useEffect,
    useRef,
} from 'react';

import { RemarksContext, useRemarksContext } from '../contexts/remarksContext';

export type RemarkWordProps = {
    name: string;
    description: string;
};

export default function RemarkWord({ name, description }: RemarkWordProps) {
    const remarks = useRemarksContext();

    const ref = useRef<HTMLSpanElement>(null);
    

    return (
        <span
            ref={ref}
            className='text-white underline-offset-1 underline cursor-pointer hover:text-blue-400'
            onClick={() => {
                remarks?.setRemark({ name, description }, ref.current?.offsetTop || 0);

                // console.log(remarks);
                // console.log(ref.current?.offsetTop);
            }}
        >
            {name}
        </span>
    );
}
