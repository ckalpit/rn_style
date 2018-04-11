import React from 'react';
import {ProfilePage} from "./components/profile";
import {prepareStyle} from "./utils/common";
import {Container} from "native-base";
import {StandardColors} from "./assets/colors";

export class Main extends React.Component {
    render() {
        return (
            <Container androidStatusBarColor={StandardColors.success}
                       style={prepareStyle({paddingTop: 28})}>
                <ProfilePage/>
            </Container>
        );
    }
}