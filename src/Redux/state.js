//var RiverMassiveNew = RiverMassive.map;
import MainReducer from './MainReducer'
import UserReducer from './UserReducer'
let RenderEntireTree = () => {

}

let store = {
    _state: {
        Rent: {
            categories: [
                { catid: 0, catname: 'Каркасные байдарки', catimg: 'https://maiso.ru/files/user/162025/board/bajdarka-tajmenq--2.jpg', catdescr: 'А также железо и шкуры' },
                { catid: 1, catname: 'Надувные байдарки', catimg: 'https://cs-msk-fd-4.ykt2.ru/media/upload/photo/2015/05/20/P1010386.jpeg', catdescr: 'Дополнительные приключения на пятую точку' },
                { catid: 2, catname: 'Катамараны', catimg: 'https://kazan.rus-splav.ru/images/stories/virtuemart/product/dMNF1R-T-s4.jpg', catdescr: 'Вместит целый гарем туристов и ещё палатку посередине ;)' },
                { catid: 3, catname: 'Каяки', catimg: 'https://uamodna.com/assets/articles/image/9/v/u/9vupft0j/fullsize.jpg', catdescr: 'BMX среди байдарок. Женщина в комплект не входит' },
                { catid: 4, catname: 'Лодки', catimg: 'https://s1.1zoom.ru/big0/424/Sweden_Rivers_Boats_Sunrises_and_sunsets_Two_541630_1280x844.jpg', catdescr: 'Для рыбаков и рыбачек' }
            ],
            products: [
                { prodid: 0, prodname: 'Таймень', prodimg: 'https://cache3.youla.io/files/images/720_720_out/5d/2d/5d2df672de88544c475cfce6.jpg', proddescr: 'Нестареющая классика' },
                { prodid: 1, prodname: 'Таймень 2', prodimg: 'https://images.vrento.com/files/images/items/1ef/45d623dc8b98183z.jpg', proddescr: 'Самая зумерская' }
            ]
        },

        Main: {
            rivers: [
                { riverid: 0, rivername: 'Река Ай', riverdescr: 'Попадя в круг, первым делом включи Михаила Круга', riverimg: 'https://i08.fotocdn.net/s113/509da19195574f18/public_pin_l/2556954570.jpg' },
                { riverid: 1, rivername: 'Река Белая', riverdescr: 'В республике очень любят эту реку, для них она является самой важной и почитаемой природной ценностью. Река Белая — это визитная карточка Башкирии и ее символ, она играет значительную роль в народном фольклоре, о ней сложено множество легенд.', riverimg: 'http://s1.fotokto.ru/photo/full/87/875631.jpg' },
                { riverid: 2, rivername: 'Река Чусовая', riverdescr: 'Начинаясь в Азии, пересекает Уральские горы и течет в Европу', riverimg: 'https://s3.nat-geo.ru/images/2019/5/16/213acd2815a54b0188e9c45b71372f57.max-1200x800.jpg' },
                { riverid: 3, rivername: 'Река Сылва', riverdescr: 'Спокойная река для семейных сплавов. Шум поездов будет сопутствовать вам всю дорогу', riverimg: 'https://pbs.twimg.com/media/EkUZbqEX0AIk2uF.jpg:large' },
                { riverid: 4, rivername: 'Река Усьва', riverdescr: 'Там где тот самый Чёртов Палец', riverimg: 'https://a.d-cd.net/gEAAAgMz-OA-1920.jpg' },
                { riverid: 5, rivername: 'Река Юрюзань', riverdescr: 'Удивительно быстрый весной и спокойный летом речной маршрут на ней – только туристический и только рекреационный. Не будет опасных перекатов и надоедливых «расчесок», нет прижимов, сливов и валов. Только спокойный, созерцательный сплав посреди естественной природы Башкортостана.', riverimg: 'https://pibig.info/uploads/posts/2021-06/1623108922_21-pibig_info-p-reka-yuryuzan-v-bashkirii-priroda-krasivo-23.jpg' }
            ],
            comments: [
                { riverid: 0, userid: 0, comment: 'Я попал в круг ещё два года назад, пытался пройти через лес, выходил к реке, пытался плыть против течения, река потекла в другую сторону. Что мне делать?', date: '27 января 2022' },
                { riverid: 0, userid: 1, comment: 'Включи Михаила Круга.', date: '27 января 2022' },
                { riverid: 0, userid: 0, comment: 'Спасибо, сработало!', date: '27 января 2022' },
            ],
            newCommentText: '',
            
        },
        User: {
            list: [
                {userid: 0, username: 'Забытый турист'},
                {userid: 1, username: 'Вырвавшийся'},
                {userid: 2, username: 'hertles_graft'}
            ],
            newNameText: '',
            isAuthorized: true,
            currentUserId: 1,
            
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        RenderEntireTree = observer
    },

    
    

    dispatch(action) {
        this._state.Main=MainReducer(this._state.Main, action)
        this._state.User=UserReducer(this._state.User, action)
        console.log(this._state);
        RenderEntireTree(this._state)
    }

}

export default store;
