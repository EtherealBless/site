// this is paragraph component which has text and initial letter style

import React, { ReactNode } from 'react';
import { RemarkContent } from '../services/postService';
import RemarkWord from './remarkWord';
import { isArray } from 'util';

interface ParagraphProps {
    children?: ReactNode;
    content?: (string | RemarkContent)[];
    firstInChapter?: boolean;
}

export default function Paragraph(props: ParagraphProps) {
    const { content, firstInChapter = false } = props;

    return (
        <p
            className={`text-xl text-white text-justify ${firstInChapter ? 'first-letter:font-bold min-w-16 first-letter:text-[5rem] first-letter:float-left first-letter:leading-[3rem]' : ''}`}
        >
            {props.children}
            {props.children === undefined &&
                Array.isArray(content) &&
                content.map((item, index) => {
                    if (typeof item === 'string') {
                        return item;
                    } else {
                        return (
                            <RemarkWord
                                key={index}
                                name={item.name}
                                description={item.description}
                            />
                        );
                    }
                })}
        </p>
    );
}
