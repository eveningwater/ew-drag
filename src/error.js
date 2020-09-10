export const NOT_DOM_ELEMENTS = ['html','head','body','meta','title','link','style','script'];
const ERROR_VARIABLE = {
    PICKER_OBJECT_CONFIG_ERROR:'you should pass a param which is el and el must be a string or a dom element!',
    PICKER_CONFIG_ERROR:'you should pass a param that it must be a string or a dom element!',
    DOM_OBJECT_ERROR:'can not find the element by el property,make sure to pass a correct value!',
    DOM_ERROR:'can not find the element,make sure to pass a correct param!',
    CONFIG_SIZE_ERROR:'the value must be a string which is one of the normal,medium,small,mini,or must be an object and need to contain width or height property!',
    DOM_NOT_ERROR:'Do not pass these elements: ' + NOT_DOM_ELEMENTS.join(',') + ' as a param,pass the correct element such as div!',
    PREDEFINE_COLOR_ERROR:'PredefineColor is a array that is need to contain color value!'
};
export const PICKER_OBJECT_CONFIG_ERROR = ERROR_VARIABLE.PICKER_OBJECT_CONFIG_ERROR;
export const PICKER_CONFIG_ERROR = ERROR_VARIABLE.PICKER_CONFIG_ERROR;
export const DOM_OBJECT_ERROR = ERROR_VARIABLE.DOM_OBJECT_ERROR;
export const DOM_ERROR = ERROR_VARIABLE.DOM_ERROR;
export const CONFIG_SIZE_ERROR = ERROR_VARIABLE.CONFIG_SIZE_ERROR;
export const DOM_NOT_ERROR = ERROR_VARIABLE.DOM_NOT_ERROR;
export const PREDEFINE_COLOR_ERROR = ERROR_VARIABLE.PREDEFINE_COLOR_ERROR;