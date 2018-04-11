import {Dimensions, Platform} from "react-native";

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
export const Metrics = {
    marginHorizontal: 10,
    marginVertical: 10,
    section: 25,
    baseMargin: 10,
    doubleBaseMargin: 20,
    smallMargin: 5,
    doubleSection: 50,
    horizontalLineHeight: 1,
    searchBarHeight: 30,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    platform: Platform.OS,
    buttonRadius: 4,
    icons: {
        tiny: 15,
        small: 20,
        medium: 30,
        large: 45,
        xl: 50
    },
    images: {
        small: 20,
        medium: 40,
        large: 60,
        logo: 200
    },
    fontSizes: {
        xs: 10,
        s: 12,
        m: 14,
        l: 16,
        xl: 20,
        xxl: 24
    },
    spacing: {
        xxs: 2,
        xs: 4,
        s: 8,
        m: 12,
        l: 16,
        xl: 20,
        xxl: 24
    }
};
