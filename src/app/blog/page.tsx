import Header from '../components/header';
import Paragraph from '../components/paragraph';
import RemarkWord from '../components/remarkWord';

export default function Blog() {
    return (
        <div className='flex flex-col h-screen w-1/2 gap-16'>
            <div className='text-white self-center flex gap-3 flex-col'>
                <h1 className='text-4xl text-white'> Запись в блоге №0</h1>
                <Paragraph firstInChapter={true}>
                    На этой странице будет один из моих постов. В среднем,
                    повествующих о проблемах, которые возникают, пока я
                    пользуюсь компьютером. Если дойдут руки, то и девлог будет
                    тут. В планах еще добавить возможность редактировать и
                    удалять посты на самом сайте. Пока они добавляются в
                    качестве примера с помощью перевода{' '}
                    <RemarkWord
                        name='Markdown'
                        description='облегчённый язык разметки, созданный с 
                        целью обозначения форматирования в простом тексте, 
                        с максимальным сохранением его читаемости человеком, 
                        и пригодный для машинного преобразования в языки 
                        для продвинутых публикаций'
                    />{' '}
                    и генерируются через скрипт на Python в сам пост.
                </Paragraph>
                <Paragraph>
                    Ну а чтобы как-то заполнить это пространство расскажу о
                    ключевых моментах и проблемах при создания этого сайта.
                    Изначально это должно было стать легкой прогулкой, но быстро
                    выяснялось, что я не очень понимаю как мне было реализовать
                    одну из главных особенностей этого сайта. Как вы уже могли
                    заметить, если нажать на подчеркивание в тексте поста, то
                    возникнет всплытывающее окно с поясненим слова. Так вот, у
                    меня ушло примерно три дня, чтобы понять, как работать с
                    рефами, состянием, констекстами и провайдерами контекста,
                    чтобы передавать в другой компонент (как раз в сплывающие
                    окошки) обновленные данные (как раз информацию о слове).
                </Paragraph>

                <Paragraph>
                    Суть в том, чтобы при событии в одном компоненте изменить
                    состояние в другом компоненте.
                </Paragraph>

                <Paragraph>
                    Проблема была в том, что контекст, как самый очевидный
                    способ иметь доступ к одним данным в разных местах, внутри
                    себя не может вызвать ре-рендер. Первый вариант заключался в
                    том, чтобы использовать ref для "синхронизации" значений.
                    Оказывается, изменение ref не триггерит ре-рендер
                    компонента. Пришлось вспомнить, что для "синхронизации"
                    значений и ре-рендера при изменении значения уже давно
                    придумали состояния. Поэтому было использовано состояние. Но
                    оказалось, что не очень удобно передавать состояния из
                    компонента пониже в компонент повыше, чтобы передать его
                    опять пониже. Поэтому было решено перейти на контексты.
                    Почему я сразу их не использвал? Ну, потому, что я не знал
                    как прикрутить к ним "синхронизацию". Поэтому я пытался
                    городить велосипеды, чтобы изменение контекста могло
                    изменить компонент и заставить его перерендериться. Ну вот,
                    у меня не получилось. Сами контексты не очень дружили с
                    useEffect и его механизмом отслёживания изменений. Чуть
                    позже придумалось хранить в контексте не только данные, но и
                    сеттеры состояния, которые уж точно сами по себе вызовут
                    ре-рендер компонента.
                </Paragraph>

                <Paragraph>
                    В этой редакции проблема была в том, чтобы как можно больше
                    компонентов сделать server-side-render. Контекст не
                    позволяет реализовать такую возможность. Поэтому я пытался
                    как можно сильнее снизить количество компонентов,
                    использующих 'use client'. Ну, что-то вроде получилось. Эта
                    страница server-side rendered (кроме popup'ов). Похоже на
                    победу.
                </Paragraph>
            </div>
        </div>
    );
}