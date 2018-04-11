import React, {Component} from 'react';
import {Icon, Text, View} from "native-base";
import {Image} from "react-native";
import {AppImages} from "../assets/assets";
import {prepareStyle} from "../utils/common";

export class ProfilePage extends Component {
    render() {
        return (
            <View style={prepareStyle('flex m-s')}>
                <ReactFooHeader/>
                <ProfileHeader/>
                <SocialContainer/>
                <StyleContainer/>
                <StylePatternContainer/>
            </View>

        )
    }
}


export class ReactFooHeader extends Component {
    render() {
        return (
            <View style={prepareStyle('ali-c flex-d-r')}>
                <Image source={AppImages.reactFoo}
                       style={prepareStyle('ar-1-1', {width: 48})}/>
                <Text style={prepareStyle('flex als-c m-l-m ttl-xl')}>
                    React Foo
                </Text>
                <Image source={AppImages.hasGeek}
                       style={prepareStyle('ar-1-1', {width: 48})}/>
            </View>

        )
    }
}


export class ProfileHeader extends Component {
    render() {
        return (
            <View style={prepareStyle('flex-d-r p-tb-s m-tb-s')}>
                <Image source={AppImages.me}
                       style={prepareStyle('ar-1-1 brdr m-r-m brd brd-c-tt', {width: 100})}/>
                <View style={prepareStyle('ali-c jc-c')}>
                    <Text style={prepareStyle('ttl-m fnt-b m-b-s')}>
                        Kalpit Champanery
                    </Text>
                    <Text style={prepareStyle('ttl-s txt-c-muted m-b-s')}>
                        Software alchemist @pricebaba
                    </Text>
                    <Text style={prepareStyle('ttl-s txt-c-muted fnt-i m-b-s')}>
                        Think.Innovate.Create
                    </Text>
                </View>
            </View>

        )
    }
}


export class SocialContainer extends Component {
    render() {
        return (
            <View style={prepareStyle('p-s brd brd-c-gb brdr m-b-s')}>
                <Text style={prepareStyle('fnt-i ttl-m m-b-s')}>
                    Reachable at:
                </Text>
                <View style={prepareStyle('flex-d-r ali-c jc-sp-a m-b-m')}>
                    <Text style={prepareStyle('txt-c-muted ttl-m')}>
                        <Icon name={'logo-twitter'}/>
                        {` @ckalpit`}
                    </Text>
                    <Text style={prepareStyle('txt-c-muted ttl-m')}>
                        <Icon name={'logo-github'}/>
                        {` @ckalpit`}
                    </Text>
                </View>
                <View style={prepareStyle('flex-d-r ali-c jc-sp-a m-b-m')}>
                    <Text style={prepareStyle('txt-c-muted ttl-m')}>
                        <Icon name={'logo-linkedin'}/>
                        {` /in/ckalpit`}
                    </Text>
                    <Text style={prepareStyle('txt-c-muted ttl-m')}>
                        <Icon name={'logo-instagram'}/>
                        {` @ckalpit`}
                    </Text>
                </View>
            </View>

        )
    }
}

export class StyleContainer extends Component {
    render() {
        const thoughAboutStyle = `Styling is an important aspect of every project whether it is Web or Mobile,because as they say first impression is last impression.\n\nAll though you have made super fast very functional application if the UI doesn't that appealing then the user will not use it.\n\nWhat I felt while developing React Native Application is in react native creating and maintaining style is bit tricky`;
        return (
            <View style={prepareStyle('p-s brdr bg-smk')}>
                <Text style={prepareStyle('ttl-xl m-b-s')}>
                    Styling
                </Text>
                <Text style={prepareStyle('fs-s txt-a-a')}>
                    {thoughAboutStyle}
                </Text>
            </View>

        )
    }
}

export class StylePatternContainer extends Component {
    render() {
        return (
            <View style={prepareStyle('m-t-m')}>
                <Text style={prepareStyle('ttl-l p-s m-b-m brdr bg-ms txt-c-w')}>
                    Styling in React Native
                </Text>
                <Text style={prepareStyle('ttl-l p-s m-b-m brdr bg-jb txt-c-w')}>
                    Style Patterns
                </Text>
                <Text style={prepareStyle('ttl-l p-s m-b-m brdr bg-al')}>
                    The Problem here
                </Text>
                <Text style={prepareStyle('ttl-l p-s m-b-m brdr bg-ba')}>
                    The Solution
                </Text>
            </View>

        )
    }
}