let initialState = {
    categories: [
        {
            catid: 0,
            catname: 'Каркасные байдарки',
            catimg: 'https://maiso.ru/files/user/162025/board/bajdarka-tajmenq--2.jpg',
            catdescr: 'А также железо и шкуры'
        },
        {
            catid: 1,
            catname: 'Надувные байдарки',
            catimg: 'https://images.sturm-shop.ru/0/ac/0ac44cf92ef7a10dd8f663918aa06657.jpg',
            catdescr: 'Дополнительные приключения на пятую точку'
        },
        {
            catid: 2,
            catname: 'Катамараны',
            catimg: 'https://kazan.rus-splav.ru/images/stories/virtuemart/product/dMNF1R-T-s4.jpg',
            catdescr: 'Вместит целый гарем туристов и ещё палатку посередине ;)'
        },
        {
            catid: 3,
            catname: 'Каяки',
            catimg: 'https://uamodna.com/assets/articles/image/9/v/u/9vupft0j/fullsize.jpg',
            catdescr: 'BMX среди байдарок. Женщина в комплект не входит'
        },
        {
            catid: 4,
            catname: 'Лодки',
            catimg: 'https://s1.1zoom.ru/big0/424/Sweden_Rivers_Boats_Sunrises_and_sunsets_Two_541630_1280x844.jpg',
            catdescr: 'Для рыбаков и рыбачек'
        }
    ],
    products: [
        {
            prodid: 0,
            prodname: 'Таймень',
            prodimg: 'https://cache3.youla.io/files/images/720_720_out/5d/2d/5d2df672de88544c475cfce6.jpg',
            proddescr: 'Нестареющая классика'
        },
        {
            prodid: 1,
            prodname: 'Таймень 2',
            prodimg: 'https://images.vrento.com/files/images/items/1ef/45d623dc8b98183z.jpg',
            proddescr: 'Самая зумерская'
        }
    ]
}
const RentReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            break;
    }
    return state;
}
export default RentReducer