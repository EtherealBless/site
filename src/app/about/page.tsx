// home page

import Paragraph from '../components/paragraph';
import RemarkWord from '../components/remarkWord';

export default function Home() {
    return (
        <div className='flex flex-col h-screen w-1/2 gap-16'>
            <div className='text-white self-center flex gap-3 flex-col'>
                <div className='flex flex-row justify-center flex-wrap py-2 gap-3'>
                    <img
                        src='/logo.jpg'
                        className='min-w-40 w-3/4 rounded-xl'
                    />
                    <p className='text-xl text-gray-500 italic'>
                        Мало кто знает, но he is literally me.
                    </p>
                    <Paragraph firstInChapter={true}>
                        Тут должна быть страница, на которой написано,
                        чем я занимаюсь, чем интересуюсь, что я умею. По
                        крайеней мере мне очень нравится типография старого
                        стиля. Да, стиль таким и задумывался, а не &#34;я не умею
                        дизайнить сайты&#34;. А еще обожаю, когда в
                        противопоставление строгому шрифту и оформлению
                        выделяются округления и интерактивность (которой тут
                        пока не хватает).
                    </Paragraph>
                    <Paragraph>
                        Также вы можете посмотреть на мои проекты на GitHub. Они
                        пустые, да. Пока этот блог пустой. Ждём, когда я смогу
                        заняться всякими штуками после сессии, когда про него
                        забудут все, кто знает меня лично, лол. Почему люди так
                        делают? Хотят что-то спрятать от окружающих. Не знаю, но
                        буду действовать, как они. А то, что вы здесь видите,
                        это какой-то небольшой блог для демонстрации моего
                        навыка работать с <RemarkWord
                            name='NextJS'
                            description='Фронтенд фреймворк, постороенный поверх 
                            React. Отличается от React в первую очередь наличием SSR'
                        /> и тем более <RemarkWord
                            name='React'
                            description='Библиотека JavaScript (именно библиотека,
                            а не фреймворк, как заявляют сами разработчики React). 
                            Позволяет создавать веб-приложения на основе JavaScript. 
                            Отличительной особенностью библиотеки является её реактивностью 
                            и ориентацией на функциональное программирование.'
                        ></RemarkWord>, и уж тем более с <RemarkWord name='HTML, CSS и JS' description='HTML, CSS и JS - основные языки веб-разработки'/>.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}
