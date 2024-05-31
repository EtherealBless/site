import Paragraph from './paragraph';

import { Post } from '../services/postService';
import Link from 'next/link';

export default function BlogCard(props: { post: Post }) {
    return (
        <div className='max-w-sm h-44 border  rounded-lg shadow bg-gray-950 border-gray-700 overflow-ellipsis'>
            <div className=''>
                <a href='#'>
                    <img
                        className='rounded-t-lg'
                        src='/docs/images/blog/image-1.jpg'
                        alt=''
                    />
                </a>
                <div className='p-5'>
                    <Link href={`/blog/${props.post.id}`}>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-white overflow-ellipsis'>
                            Запись блога №0
                        </h5>
                    </Link>
                    <div className='mb-3 font-normal text-gray-300 whitespace-pre-line overflow-ellipsis line-clamp-4'>
                        <Paragraph content={props.post.paragraphs[0]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
