let initialState = {
    rivers: [
        {
            riverid: 0,
            rivername: 'Койва',
            riverdescr: 'Идите по правой стороне. Или всё же по левой? В любом случае, не забудьте положить своё письмо в почтовый ящик',
            riverimg: 'https://static.tildacdn.com/tild3764-3737-4262-a361-623130653533/koiva-34.jpg'
        },
        {
            riverid: 1,
            rivername: 'Ай',
            riverdescr: 'Попадя в круг, первым делом включи Михаила Круга',
            riverimg: 'https://i08.fotocdn.net/s113/509da19195574f18/public_pin_l/2556954570.jpg'
        },
        {
            riverid: 2,
            rivername: 'Белая',
            riverdescr: 'В республике очень любят эту реку, для них она является самой важной и почитаемой природной ценностью. Река Белая — это визитная карточка Башкирии и ее символ, она играет значительную роль в народном фольклоре, о ней сложено множество легенд.',
            riverimg: 'http://s1.fotokto.ru/photo/full/87/875631.jpg'
        },
        {
            riverid: 3,
            rivername: 'Чусовая',
            riverdescr: 'Начинаясь в Азии, пересекает Уральские горы и течет в Европу',
            riverimg: 'http://s3.fotokto.ru/photo/full/572/5725776.jpg'
        },
        {
            riverid: 4,
            rivername: 'Сылва',
            riverdescr: 'Спокойная река для семейных сплавов. Шум поездов будет сопутствовать вам всю дорогу',
            riverimg: 'https://pbs.twimg.com/media/EkUZbqEX0AIk2uF.jpg:large'
        },
        {
            riverid: 5,
            rivername: 'Усьва',
            riverdescr: 'Там где тот самый Чёртов Палец',
            riverimg: 'https://a.d-cd.net/gEAAAgMz-OA-1920.jpg'
        },
        {
            riverid: 6,
            rivername: 'Юрюзань',
            riverdescr: 'Удивительно быстрый весной и спокойный летом речной маршрут на ней – только туристический и только рекреационный. Не будет опасных перекатов и надоедливых «расчесок», нет прижимов, сливов и валов. Только спокойный, созерцательный сплав посреди естественной природы Башкортостана.',
            riverimg: 'https://pibig.info/uploads/posts/2021-06/1623108922_21-pibig_info-p-reka-yuryuzan-v-bashkirii-priroda-krasivo-23.jpg'
        }
    ]

}
const MainReducer = (state = initialState, action) => {
    return state
}

export default MainReducer