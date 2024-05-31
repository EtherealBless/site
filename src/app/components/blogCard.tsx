import Paragraph from './paragraph';

export default function BlogCard() {
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
                    <a href='#'>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-white overflow-ellipsis'>
                            Запись блога №0
                        </h5>
                    </a>
                    <p className='mb-3 font-normal text-gray-300 whitespace-pre-line overflow-ellipsis line-clamp-4'>
                        На этой странице будет один из моих постов. В среднем,
                        повествующих о проблемах, которые возникают, пока я
                        пользуюсь компьютером. Если дойдут руки, то и девлог
                        будет тут. В планах еще добавить возможность
                        редактировать и удалять посты на самом сайте. Пока они
                        добавляются в качестве примера с помощью перевода{' '}
                    </p>
                </div>
            </div>
        </div>
    );
}
