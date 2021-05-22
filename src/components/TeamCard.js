import React from "react";
import {Card, CardGrid, ContentCard, Group, Header, Panel, PanelHeader, SimpleCell, View} from "@vkontakte/vkui";

export default function TeamCard() {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>NaniB0ots</PanelHeader>

                <Group mode="plain" header={<Header mode="secondary">Наша команда</Header>}>
                    <CardGrid>
                        <ContentCard
                            image="https://sun4-16.userapi.com/s/v1/ig2/pgJfaAMN6nq9ADZCpmTqScRDimS6Htg0svTui0XD6JFKyaQT1vxOIYrNwqcto9_ZoRNlBWLpAOfgZqdir5acm4Ux.jpg?size=200x0&quality=96&crop=2,255,582,582&ava=1"
                            subtitle="Возраст: 20"
                            header="Сидоренко Анжелика Витальевна"
                            text="Занимается всем визуалом, проектированием пользовательских интерфейсов и сценариев.
                            (Гений фигмы, а еще ее невозможно выйграть в монополию)"
                            caption="Специализация: UI/UX-дизайн"
                            maxHeight={500}
                        />
                        <ContentCard
                            image="https://sun4-10.userapi.com/s/v1/ig2/qCRLzOldNBEX8Hg_rRvM77W6k4GzeZFIlUVdvq2YdIVGllYdinlX6Vmy6ikmz0J7fnjBmLKGW5okw-uIu4kAjPb5.jpg?size=200x0&quality=96&crop=2,111,583,583&ava=1"
                            subtitle="Возраст: 21"
                            header="Ашимов Султан Сапарович"
                            text="Помимо роли разработчика, выполняет функции менеджера команды. (Чисто разнорабочий микрочелик и капитан по-совместительству)"
                            caption="Специализация: Backend-разработчик"
                            maxHeight={500}
                        />

                    </CardGrid>
                </Group>
            </Panel>
            <Panel id="greetings">
                aba1
            </Panel>
            <Panel id="form">
                aba2
            </Panel>
            <Panel id="finish">
                aba3
            </Panel>
        </View>
    )
}