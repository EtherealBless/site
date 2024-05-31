const apiUrl = 'http://localhost:8000';

interface ApiWapper {
    get: (url: string) => Promise<any>;
    post: (url: string, data: any) => Promise<any>;
}

export class Api {
    public static get(url: string) {
        return apiWrapper().get(url);
    }

    public static post(url: string, data: any) {
        return apiWrapper().post(url, data);
    }

    public static async getPostById(id: number): Promise<PostSchema> {
        // console.log(id);
        let a = (await apiWrapper().get(`/posts/${id}`)).json();
        return a;
    }

    public static async getPosts(): Promise<PostSchema[]> {
        return (await apiWrapper().get('/posts')).json();
    }
}

interface PostSchema {
    id: number;
    title: string;
    content: string;
}

const apiWrapper = (): ApiWapper => {
    return {
        get: (url: string) => fetch(`${apiUrl}${url}`),
        post: (url: string, data: any) =>
            fetch(`${apiUrl}${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then((res) => {
                res.json();
            }),
    };
};
