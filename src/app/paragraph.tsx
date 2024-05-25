// this is paragraph component which has text and initial letter style

import React from 'react';

interface ParagraphProps {
    children: React.ReactNode;
    firstInChapter?: boolean;
}

export default function Paragraph( props: ParagraphProps ) {
    
    const { children, firstInChapter = false } = props;

    return (
        <p
            className={`text-xl text-white text-justify ${firstInChapter ? 'first-letter:font-bold first-letter:text-[5rem] first-letter:float-left first-letter:leading-[3rem]' : ''}`}
        >
            {children}
        </p>
    );
}
