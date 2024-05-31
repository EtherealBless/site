import Header from '../../components/header';
import Paragraph from '../../components/paragraph';
import RemarkWord from '../../components/remarkWord';
import { useRouter } from 'next/router';
import { getPost } from '../../services/postService';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    // console.log('hello');
    const id = Number(params.id);
    // console.log(id);
    // console.log([!id , isNaN(id)])
    if (id === undefined || isNaN(id)) {
        redirect('/');
    }

    const post = await getPost(id);

    return (
        <div className='flex flex-col h-screen w-1/2 gap-16'>
            <div className='text-white self-center flex gap-3 flex-col'>
                <h1 className='text-4xl text-white'> {post?.title} </h1>
                {post &&
                    post.paragraphs.map((paragraph, index) => (
                        <Paragraph
                            key={index}
                            firstInChapter={index === 0}
                            content={paragraph}
                        />
                    ))}
            </div>
        </div>
    );
}
