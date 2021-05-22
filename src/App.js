import React from "react";
import TeamCard from "./components/TeamCard";
import {
    AppRoot,
    SplitLayout,
    SplitCol,
    ViewWidth,
    PanelHeader,
    useAdaptivity, ConfigProvider, AdaptivityProvider,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
    const {viewWidth} = useAdaptivity();
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout header={<PanelHeader separator={false}/>}>
                        <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
                            <TeamCard/>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    )
}

export default App;
