// home page

import BlogCard from './components/blogCard';
import Paragraph from './components/paragraph';
import RemarkWord from './components/remarkWord';
import { getPosts } from './services/postService';

export default async function Home() {
    const posts = await getPosts();
    // console.log(posts);
    
    return (
        <div className='flex flex-col h-screen w-4/5 gap-16'>
            <div className='text-white self-center flex gap-3 flex-col'>
                <div className='flex flex-row justify-center flex-wrap py-2 gap-3'>
                    <Paragraph firstInChapter={true}>
                        На этой странице должно быть краткое описание проекта и
                        список постов. Но пока только заглушка.
                    </Paragraph>
                    <div className='w-full flex flex-row justify-start flex-wrap py-2 gap-2'>
                        {posts.map((post, index) => (
                            <BlogCard key={index} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

}
