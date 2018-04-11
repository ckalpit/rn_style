/**
 * Created by ckalpit on 19/05/17.
 * @flow
 */

import {Metrics} from "./metrics";
import {StandardColors} from "./colors";
import {StyleSheet} from "react-native";


export var GlobalStyles = {

    'p-xxs': {
        paddingTop: Metrics.spacing.xxs,
        paddingBottom: Metrics.spacing.xxs,
        paddingLeft: Metrics.spacing.xxs,
        paddingRight: Metrics.spacing.xxs
    },
    'p-xs': {
        paddingTop: Metrics.spacing.xs,
        paddingBottom: Metrics.spacing.xs,
        paddingLeft: Metrics.spacing.xs,
        paddingRight: Metrics.spacing.xs
    },
    'p-s': {
        paddingTop: Metrics.spacing.s,
        paddingBottom: Metrics.spacing.s,
        paddingLeft: Metrics.spacing.s,
        paddingRight: Metrics.spacing.s
    },
    'p-m': {
        paddingTop: Metrics.spacing.m,
        paddingBottom: Metrics.spacing.m,
        paddingLeft: Metrics.spacing.m,
        paddingRight: Metrics.spacing.m
    },
    'p-l': {
        paddingTop: Metrics.spacing.l,
        paddingBottom: Metrics.spacing.l,
        paddingLeft: Metrics.spacing.l,
        paddingRight: Metrics.spacing.l
    },
    'p-xl': {
        paddingTop: Metrics.spacing.xl,
        paddingBottom: Metrics.spacing.xl,
        paddingLeft: Metrics.spacing.xl,
        paddingRight: Metrics.spacing.xl
    },
    'p-xxl': {
        paddingTop: Metrics.spacing.xxl,
        paddingBottom: Metrics.spacing.xxl,
        paddingLeft: Metrics.spacing.xxl,
        paddingRight: Metrics.spacing.xxl
    },
    'p-no': {paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0},

    'p-t-xxs': {paddingTop: Metrics.spacing.xxs},
    'p-t-xs': {paddingTop: Metrics.spacing.xs},
    'p-t-s': {paddingTop: Metrics.spacing.s},
    'p-t-m': {paddingTop: Metrics.spacing.m},
    'p-t-l': {paddingTop: Metrics.spacing.l},
    'p-t-xl': {paddingTop: Metrics.spacing.xl},
    'p-t-xxl': {paddingTop: Metrics.spacing.xxl},
    'p-t-no': {paddingTop: 0},

    'p-b-xxs': {paddingBottom: Metrics.spacing.xxs},
    'p-b-xs': {paddingBottom: Metrics.spacing.xs},
    'p-b-s': {paddingBottom: Metrics.spacing.s},
    'p-b-m': {paddingBottom: Metrics.spacing.m},
    'p-b-l': {paddingBottom: Metrics.spacing.l},
    'p-b-xl': {paddingBottom: Metrics.spacing.xl},
    'p-b-xxl': {paddingBottom: Metrics.spacing.xxl},
    'p-b-no': {paddingBottom: 0},

    'p-l-xxs': {paddingLeft: Metrics.spacing.xxs},
    'p-l-xs': {paddingLeft: Metrics.spacing.xs},
    'p-l-s': {paddingLeft: Metrics.spacing.s},
    'p-l-m': {paddingLeft: Metrics.spacing.m},
    'p-l-l': {paddingLeft: Metrics.spacing.l},
    'p-l-xl': {paddingLeft: Metrics.spacing.xl},
    'p-l-xxl': {paddingLeft: Metrics.spacing.xxl},
    'p-l-no': {paddingLeft: 0},

    'p-r-xxs': {paddingRight: Metrics.spacing.xxs},
    'p-r-xs': {paddingRight: Metrics.spacing.xs},
    'p-r-s': {paddingRight: Metrics.spacing.s},
    'p-r-m': {paddingRight: Metrics.spacing.m},
    'p-r-l': {paddingRight: Metrics.spacing.l},
    'p-r-xl': {paddingRight: Metrics.spacing.xl},
    'p-r-xxl': {paddingRight: Metrics.spacing.xxl},
    'p-r-no': {paddingRight: 0},

    'p-lr-xxs': {paddingLeft: Metrics.spacing.xxs, paddingRight: Metrics.spacing.xxs},
    'p-lr-xs': {paddingLeft: Metrics.spacing.xs, paddingRight: Metrics.spacing.xs},
    'p-lr-s': {paddingLeft: Metrics.spacing.s, paddingRight: Metrics.spacing.s},
    'p-lr-m': {paddingLeft: Metrics.spacing.m, paddingRight: Metrics.spacing.m},
    'p-lr-l': {paddingLeft: Metrics.spacing.l, paddingRight: Metrics.spacing.l},
    'p-lr-xl': {paddingLeft: Metrics.spacing.xl, paddingRight: Metrics.spacing.xl},
    'p-lr-xxl': {paddingLeft: Metrics.spacing.xxl, paddingRight: Metrics.spacing.xxl},
    'p-lr-no': {paddingLeft: 0, paddingRight: 0},

    'p-tb-xxs': {paddingTop: Metrics.spacing.xxs, paddingBottom: Metrics.spacing.xxs},
    'p-tb-xs': {paddingTop: Metrics.spacing.xs, paddingBottom: Metrics.spacing.xs},
    'p-tb-s': {paddingTop: Metrics.spacing.s, paddingBottom: Metrics.spacing.s},
    'p-tb-m': {paddingTop: Metrics.spacing.m, paddingBottom: Metrics.spacing.m},
    'p-tb-l': {paddingTop: Metrics.spacing.l, paddingBottom: Metrics.spacing.l},
    'p-tb-xl': {paddingTop: Metrics.spacing.xl, paddingBottom: Metrics.spacing.xl},
    'p-tb-xxl': {paddingTop: Metrics.spacing.xxl, paddingBottom: Metrics.spacing.xxl},
    'p-tb-no': {paddingTop: 0, paddingBottom: 0},

    'm-xxs': {
        marginTop: Metrics.spacing.xxs,
        marginBottom: Metrics.spacing.xxs,
        marginLeft: Metrics.spacing.xxs,
        marginRight: Metrics.spacing.xxs
    },
    'm-xs': {
        marginTop: Metrics.spacing.xs,
        marginBottom: Metrics.spacing.xs,
        marginLeft: Metrics.spacing.xs,
        marginRight: Metrics.spacing.xs
    },
    'm-s': {
        marginTop: Metrics.spacing.s,
        marginBottom: Metrics.spacing.s,
        marginLeft: Metrics.spacing.s,
        marginRight: Metrics.spacing.s
    },
    'm-m': {
        marginTop: Metrics.spacing.m,
        marginBottom: Metrics.spacing.m,
        marginLeft: Metrics.spacing.m,
        marginRight: Metrics.spacing.m
    },
    'm-l': {
        marginTop: Metrics.spacing.l,
        marginBottom: Metrics.spacing.l,
        marginLeft: Metrics.spacing.l,
        marginRight: Metrics.spacing.l
    },
    'm-xl': {
        marginTop: Metrics.spacing.xl,
        marginBottom: Metrics.spacing.xl,
        marginLeft: Metrics.spacing.xl,
        marginRight: Metrics.spacing.xl
    },
    'm-xxl': {
        marginTop: Metrics.spacing.xxl,
        marginBottom: Metrics.spacing.xxl,
        marginLeft: Metrics.spacing.xxl,
        marginRight: Metrics.spacing.xxl
    },
    'm-no': {marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0},

    'm-t-xxs': {marginTop: Metrics.spacing.xxs},
    'm-t-xs': {marginTop: Metrics.spacing.xs},
    'm-t-s': {marginTop: Metrics.spacing.s},
    'm-t-m': {marginTop: Metrics.spacing.m},
    'm-t-l': {marginTop: Metrics.spacing.l},
    'm-t-xl': {marginTop: Metrics.spacing.xl},
    'm-t-xxl': {marginTop: Metrics.spacing.xxl},
    'm-t-no': {marginTop: 0},

    'm-b-xxs': {marginBottom: Metrics.spacing.xxs},
    'm-b-xs': {marginBottom: Metrics.spacing.xs},
    'm-b-s': {marginBottom: Metrics.spacing.s},
    'm-b-m': {marginBottom: Metrics.spacing.m},
    'm-b-l': {marginBottom: Metrics.spacing.l},
    'm-b-xl': {marginBottom: Metrics.spacing.xl},
    'm-b-xxl': {marginBottom: Metrics.spacing.xxl},
    'm-b-no': {marginBottom: 0},

    'm-l-xxs': {marginLeft: Metrics.spacing.xxs},
    'm-l-xs': {marginLeft: Metrics.spacing.xs},
    'm-l-s': {marginLeft: Metrics.spacing.s},
    'm-l-m': {marginLeft: Metrics.spacing.m},
    'm-l-l': {marginLeft: Metrics.spacing.l},
    'm-l-xl': {marginLeft: Metrics.spacing.xl},
    'm-l-xxl': {marginLeft: Metrics.spacing.xxl},
    'm-l-no': {marginLeft: 0},

    'm-r-xxs': {marginRight: Metrics.spacing.xxs},
    'm-r-xs': {marginRight: Metrics.spacing.xs},
    'm-r-s': {marginRight: Metrics.spacing.s},
    'm-r-m': {marginRight: Metrics.spacing.m},
    'm-r-l': {marginRight: Metrics.spacing.l},
    'm-r-xl': {marginRight: Metrics.spacing.xl},
    'm-r-xxl': {marginRight: Metrics.spacing.xxl},
    'm-r-no': {marginRight: 0},

    'm-lr-xxs': {marginLeft: Metrics.spacing.xxs, marginRight: Metrics.spacing.xxs},
    'm-lr-xs': {marginLeft: Metrics.spacing.xs, marginRight: Metrics.spacing.xs},
    'm-lr-s': {marginLeft: Metrics.spacing.s, marginRight: Metrics.spacing.s},
    'm-lr-m': {marginLeft: Metrics.spacing.m, marginRight: Metrics.spacing.m},
    'm-lr-l': {marginLeft: Metrics.spacing.l, marginRight: Metrics.spacing.l},
    'm-lr-xl': {marginLeft: Metrics.spacing.xl, marginRight: Metrics.spacing.xl},
    'm-lr-xxl': {marginLeft: Metrics.spacing.xxl, marginRight: Metrics.spacing.xxl},
    'm-lr-no': {marginLeft: 0, marginRight: 0},

    'm-tb-xxs': {marginTop: Metrics.spacing.xxs, marginBottom: Metrics.spacing.xxs},
    'm-tb-xs': {marginTop: Metrics.spacing.xs, marginBottom: Metrics.spacing.xs},
    'm-tb-s': {marginTop: Metrics.spacing.s, marginBottom: Metrics.spacing.s},
    'm-tb-m': {marginTop: Metrics.spacing.m, marginBottom: Metrics.spacing.m},
    'm-tb-l': {marginTop: Metrics.spacing.l, marginBottom: Metrics.spacing.l},
    'm-tb-xl': {marginTop: Metrics.spacing.xl, marginBottom: Metrics.spacing.xl},
    'm-tb-xxl': {marginTop: Metrics.spacing.xxl, marginBottom: Metrics.spacing.xxl},
    'm-tb-no': {marginTop: 0, marginBottom: 0},

    //textColor
    'txt-c-ac': {color: StandardColors.action_color},
    'txt-c-muted': {color: StandardColors.jumbo},
    'txt-c-error': {color: StandardColors.danger},
    'txt-c-warning': {color: StandardColors.warning},
    'txt-c-success': {color: StandardColors.success},
    'txt-c-i': {color: StandardColors.info},

    'txt-c-w': {color: StandardColors.white},
    'txt-c-ws': {color: StandardColors.white_smoke},
    'txt-c-sm': {color: StandardColors.smoke},
    'txt-c-gb': {color: StandardColors.gainsboro},
    'txt-c-al': {color: StandardColors.aluminum},
    'txt-c-ms': {color: StandardColors.monsoon},
    'txt-c-tt': {color: StandardColors.tuatara},
    'txt-c-cc': {color: StandardColors.charcoal},
    'txt-c-j': {color: StandardColors.jumbo},
    'txt-c-st': {color: StandardColors.steel},

    //text alignment
    'txt-a-a': {textAlign: 'auto'},
    'txt-a-l': {textAlign: 'left'},
    'txt-a-r': {textAlign: 'right'},
    'txt-a-c': {textAlign: 'center'},
    'txt-a-j': {textAlign: 'justify'},

    //fontSizes
    'fs-xs': {fontSize: Metrics.fontSizes.xs},
    'fs-s': {fontSize: Metrics.fontSizes.s},
    'fs-m': {fontSize: Metrics.fontSizes.m},
    'fs-l': {fontSize: Metrics.fontSizes.l},
    'fs-xl': {fontSize: Metrics.fontSizes.xl},
    'fs-xxl': {fontSize: Metrics.fontSizes.xxl},

    'ttl-s': {fontSize: 16},
    'ttl-m': {fontSize: 18},
    'ttl-l': {fontSize: 20},
    'ttl-xl': {fontSize: 22},
    'ttl-xxl': {fontSize: 26},

    //font display
    'fnt-b': {fontWeight: 'bold'},
    'fnt-sb': {fontWeight: '500'},
    'fnt-u': {textDecorationLine: 'underline'},
    'fnt-st': {textDecorationLine: 'line-through'},
    'fnt-i': {fontStyle: 'italic'},
    'fnt-n': {fontWeight: 'normal'},

    //backgroundColor
    'bg-brdr': {backgroundColor: StandardColors.smoke},
    'bg-success': {backgroundColor: StandardColors.success},
    'bg-warning': {backgroundColor: StandardColors.warning},

    'bg-w': {backgroundColor: StandardColors.white},
    'bg-r': {backgroundColor: StandardColors.red},
    'bg-st': {backgroundColor: StandardColors.steel},
    'bg-ws': {backgroundColor: StandardColors.white_smoke},
    'bg-smk': {backgroundColor: StandardColors.smoke},
    'bg-gb': {backgroundColor: StandardColors.gainsboro},
    'bg-ir': {backgroundColor: StandardColors.iron},
    'bg-ba': {backgroundColor: StandardColors.base},
    'bg-al': {backgroundColor: StandardColors.aluminum},
    'bg-jb': {backgroundColor: StandardColors.jumbo},
    'bg-ms': {backgroundColor: StandardColors.monsoon},
    'bg-t': {backgroundColor: StandardColors.transparent},


    //Flex properties
    'flex': {flex: 1},
    'flex-0': {flex: 0},

    //flexDirection
    'flex-d-c': {flexDirection: 'column'},
    'flex-d-r': {flexDirection: 'row'},

    //alignSelf
    'als-c': {alignSelf: 'center'},
    'als-e': {alignSelf: 'flex-end'},
    'als-s': {alignSelf: 'flex-start'},
    'als-st': {alignSelf: 'stretch'},
    'als-a': {alignSelf: 'auto'},
    'als-b': {alignSelf: 'baseline'},

    //alignItems: How should the content be aligned along the secondary axis of your layout?
    //(If the primary axis is row, then the secondary axis is column, and vice versa)
    'ali-c': {alignItems: 'center'},
    'ali-e': {alignItems: 'flex-end'},
    'ali-s': {alignItems: 'flex-start'},
    'ali-st': {alignItems: 'stretch'},
    'ali-b': {alignItems: 'baseline'},


    //justifyContent: How should the content be distributed along the primary axis of your layout?
    'jc-c': {justifyContent: 'center'},
    'jc-e': {justifyContent: 'flex-end'},
    'jc-s': {justifyContent: 'flex-start'},
    'jc-sp-b': {justifyContent: 'space-between'},
    'jc-sp-a': {justifyContent: 'space-around'},

    //alignContent controls how a rows align in the cross direction, overriding the alignContent of the parent.
    'alc-c': {alignContent: 'center'},
    'alc-e': {alignContent: 'flex-end'},
    'alc-s': {alignContent: 'flex-start'},
    'alc-st': {alignContent: 'stretch'},
    'alc-sp-b': {alignContent: 'space-between'},
    'alc-sp-a': {alignContent: 'space-around'},

    //border
    'brdr-no': {borderRadius: 0},
    'brdr': {borderRadius: 4},

    'brd-no': {borderWidth: 0},
    'brd': {borderWidth: 1},
    'brd-h': {borderWidth: StyleSheet.hairlineWidth},

    'brd-b-no': {borderBottomWidth: 0},
    'brd-t-no': {borderTopWidth: 0},
    'brd-l-no': {borderLeftWidth: 0},
    'brd-r-no': {borderRightWidth: 0},

    'brd-b': {borderBottomWidth: 1},
    'brd-t': {borderTopWidth: 1},
    'brd-l': {borderLeftWidth: 1},
    'brd-r': {borderRightWidth: 1},

    //border color
    'brd-c-w': {borderColor: StandardColors.white},
    'brd-c-r': {borderColor: StandardColors.red},
    'brd-c-st': {borderColor: StandardColors.steel},
    'brd-c-gb': {borderColor: StandardColors.gainsboro},
    'brd-c-al': {borderColor: StandardColors.aluminum},
    'brd-c-i': {borderColor: StandardColors.info},
    'brd-c-ms': {borderColor: StandardColors.monsoon},
    'brd-c-tt': {borderColor: StandardColors.tuatara},
    'brd-c-j': {borderColor: StandardColors.jumbo},
    'brd-c-ws': {borderColor: StandardColors.white_smoke},
    'brd-c-smk': {borderColor: StandardColors.smoke},
    'brd-c-t': {borderColor: StandardColors.transparent},


    'brd-s-d': {borderStyle: 'dashed'},

    'ar-1-1': {aspectRatio: 1},
    'ar-3-1': {aspectRatio: 3},
    'ar-16-9': {aspectRatio: 1.77},

    'shdw': {
        shadowColor: StandardColors.jumbo,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 3,
        shadowOpacity: 0.3,
        elevation: 4,
    },

    'badge': {
        paddingLeft: Metrics.spacing.s, paddingRight: Metrics.spacing.s,
        paddingTop: Metrics.spacing.xxs, paddingBottom: Metrics.spacing.xxs,
        backgroundColor: StandardColors.success, alignSelf: 'center', alignItems: 'flex-start',
        borderRadius: 4,
    }


};


export var addToGlobalStyle = (style) => {
    GlobalStyles = {...GlobalStyles, ...style}
};