export const MaxLengthCreator = length => value => {
    if (value && value.length>length) return `Максимальная длина - ${length} символов`
    return undefined
}
export const NotEmpty = value => {
    if (!value) return "Поле обязательно к заполнению"
    return undefined
}