import React from "react";
import userImg from "./bolanebyla.jpg";
import {
    Div,
    Card,
    CardGrid,
    ContentCard,
    Group,
    Header,
    Panel,
    PanelHeader,
    SimpleCell,
    View,
    CardScroll, Avatar, RichCell, Button
} from "@vkontakte/vkui";

export default function TeamCard() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>NaniB0ots</PanelHeader>


                <Group header={<Header mode="primary" subtitle="ИБб <3">
                    Команда Иркутского политеха
                </Header>}>
                    <Group>
                        <RichCell
                            disabled
                            multiline
                            before={<Avatar size={150}
                                            src="https://sun4-16.userapi.com/s/v1/ig2/pgJfaAMN6nq9ADZCpmTqScRDimS6Htg0svTui0XD6JFKyaQT1vxOIYrNwqcto9_ZoRNlBWLpAOfgZqdir5acm4Ux.jpg?size=200x0&quality=96&crop=2,255,582,582&ava=1"/>}
                            text="Занимается всем визуалом, проектированием пользовательских интерфейсов и сценариев.
                            (Гений фигмы, а еще ее невозможно выйграть в монополию)"
                            caption="Специализация: UI/UX-дизайн"
                            bottom="Возраст: 20"
                        >
                            Сидоренко Анжелика Витальевна
                        </RichCell>
                    </Group>

                    <Group>
                        <RichCell
                            disabled
                            multiline
                            before={<Avatar size={150}
                                            src="https://sun4-10.userapi.com/s/v1/ig2/qCRLzOldNBEX8Hg_rRvM77W6k4GzeZFIlUVdvq2YdIVGllYdinlX6Vmy6ikmz0J7fnjBmLKGW5okw-uIu4kAjPb5.jpg?size=200x0&quality=96&crop=2,111,583,583&ava=1"/>}
                            text="Помимо роли разработчика, выполняет функции менеджера команды.
                        (Чисто разнорабочий микрочелик и капитан по-совместительству)"
                            caption="Специализация: Backend-разработчик"
                            bottom="Возраст: 21"
                        >
                            Ашимов Султан Сапарович
                        </RichCell>
                    </Group>

                    <Group>
                        <RichCell
                            disabled
                            multiline
                            before={<Avatar size={150}
                                            src={userImg}/>}
                            text="Главный гений-кодинга в команде, определяет весь технический стек и архитектуру проектов,
                            которые реализует команда."
                            caption="Специализация: Fullstack-разработчик"
                            bottom="Возраст: 21"
                        >
                            Лесков Алексей Олегович
                        </RichCell>
                    </Group>

                    <Group>
                        <RichCell
                            disabled
                            multiline
                            before={<Avatar size={150}
                                            src="https://newsland.com/static/u/article_image/17/07/31/tmpYfbaIF.jpeg"/>}
                            text="Тот самый человек, который шарит в математике и нейросетях."
                            caption="Специализация: DataScience"
                            bottom="Возраст: 21"
                        >
                            Черемных Руслан Максимович
                        </RichCell>
                    </Group>
                </Group>
            </Panel>
        </View>
    )
}