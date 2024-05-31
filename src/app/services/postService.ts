import { Api } from './api';

export interface RemarkContent {
    name: string;
    description: string;
}

export interface Post {
    id: number;
    title: string;
    paragraphs : (string | RemarkContent)[][];
}

export async function getPost(id: number): Promise<Post> {
    const rawPost = await Api.getPostById(id);
    if (!rawPost || !rawPost.content) {
        throw new Error('Post not found');
    }

    const post: Post = {
        id: rawPost.id,
        title: rawPost.title,
        paragraphs: [],
    };

    // split content into paragraphs and remarks
    // content is a string
    // paragraphs split by \n
    // remarks syntax: [remark name] (remark description)

    const content = rawPost.content;
    const paragraphs = content.split('\n');
    for (let i = 0; i < paragraphs.length; i++) {
        if (!paragraphs[i] || paragraphs[i].trim() === '') {
            continue;
        }

        post.paragraphs.push([]);
        const paragraph = paragraphs[i];

        let startName = paragraph.indexOf('[');
        let endName = paragraph.indexOf(']');
        let startDescription = paragraph.indexOf('(', endName + 1);
        let endDescription = paragraph.indexOf(')', startDescription + 1);
        let prevEndDescription = 0;
        while (
            startName !== -1 &&
            endName !== -1 &&
            startDescription !== -1 &&
            endDescription !== -1
        ) {
            const str = paragraph.substring(prevEndDescription, startName);

            const name = paragraph.substring(startName + 1, endName);
            const description = paragraph.substring(
                startDescription + 1,
                endDescription
            );
            post.paragraphs[i].push(str);

            post.paragraphs[i].push({
                name,
                description,
            });

            prevEndDescription = endDescription + 1;
            startName = paragraph.indexOf('[', prevEndDescription);
            endName = paragraph.indexOf(']', prevEndDescription);
            startDescription = paragraph.indexOf(
                '(',
                prevEndDescription + endName + 1
            );
            endDescription = paragraph.indexOf(
                ')',
                prevEndDescription + startDescription + 1
            );
        }
        if (prevEndDescription < paragraph.length) {
            const str = paragraph.substring(
                prevEndDescription,
                paragraph.length
            );
            post.paragraphs[i].push(str);
        }
    }

    return post;
}

export async function getPosts(): Promise<Post[]> {
    const rawPosts = await Api.getPosts();
    // console.log(rawPosts);
    const posts: Post[] = [];
    for (let i = 0; i < rawPosts.length; i++) {
        const post = await getPost(rawPosts[i].id);
        // console.log(post);
        posts.push(post);
    }
    return posts;
}
