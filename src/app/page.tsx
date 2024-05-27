import Header from './header';
import Paragraph from './paragraph';

export default function Home() {
    return (
        <div className='flex flex-col h-screen w-1/2 gap-16'>
            <div className='text-white self-center flex gap-3 flex-col'>
                <Paragraph firstInChapter={true}>
                    Современные технологии достигли такого уровня, что
                    экономическая повестка сегодняшнего дня прекрасно подходит
                    для реализации поэтапного и последовательного развития
                    общества. В частности, перспективное планирование является
                    качественно новой ступенью распределения внутренних резервов
                    и ресурсов. Разнообразный и богатый опыт говорит нам, что
                    семантический разбор внешних противодействий не даёт нам
                    иного выбора, кроме определения кластеризации усилий. Прежде
                    всего, убеждённость некоторых оппонентов однозначно
                    определяет каждого участника как способного принимать
                    собственные решения касаемо инновационных методов управления
                    процессами. Для современного мира существующая теория
                    создаёт необходимость включения в производственный план
                    целого ряда внеочередных мероприятий с учётом комплекса
                    поставленных обществом задач. Также как высококачественный
                    прототип будущего проекта, в своём классическом
                    представлении, допускает внедрение кластеризации усилий.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure eum blanditiis quos, illum pariatur iste vero provident
                    recusandae in sint dolorem? Mollitia in porro voluptatum,
                    quo atque at id ipsam?
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure eum blanditiis quos, illum pariatur iste vero provident
                    recusandae in sint dolorem? Mollitia in porro voluptatum,
                    quo atque at id ipsam?
                </Paragraph>
            </div>
        </div>
    );
}
