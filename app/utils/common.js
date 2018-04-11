


        import {GlobalStyles} from "../assets/styles";

        export let prepareStyle = (...args) => {

            let style = {};

            for (let arg of args) {
                if (typeof(arg) === 'string') {
                    let classes = arg.replace(new RegExp('\\s+', 'gm'), ' ').split(' ');
                    for (let styleClass of classes) {
                        style = {...style, ...GlobalStyles[styleClass]}
                    }
                } else {
                    style = {...style, ...arg}
                }
            }
            return style;
        };