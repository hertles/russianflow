import {isValidHttpUrl} from "../checkURL";

export const MaxLengthCreator = length => value => {
    if (value && value.length>length) return `Максимальная длина - ${length} символов`
    return undefined
}
export const NotEmpty = value => {
    if (!value) return "Поле обязательно к заполнению"
    return undefined
}
export const IsUrl = value => {
    if (value && !isValidHttpUrl(value)) return "Не является ссылкой"
    return undefined
}
export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);