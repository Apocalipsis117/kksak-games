/*
Apocalipsis: 0,
Crow117: 1,
Decapitador: 2,
Rock Style: 8,
TheKrash: 3,
Osca Guette: 4,
Blackcore: 5,
El intrepido: 6,
Mfatality: 7,
Kassike: 9,
Ralphi: 10,
Delicado: 12,
 */

new Vue({
    el: '#app',
    data: {
        queso: 'hola',
        jugadores: [
            {
                id: 0,
                name: 'Apocalipsis',
                img: 'kata.jpg',
                win: [],
            },
            {
                id: 1,
                name: 'Crow117',
                img: 'diana.jpg',
                win: [8,0],
            },
            {
                id: 2,
                name: 'Decapitador',
                img: 'masteryi.jpg',
                win: [],
            },
            {
                id: 8,
                name: 'Rock Style',
                img: 'nautilus.jpg',
                win: [],
            },
            {
                id: 3,
                name: 'TheKrash',
                img: 'kayn.jpg',
                win: [],
            },
            {
                id: 4,
                name: 'Osca Guette',
                img: 'jhin.jpg',
                win: [1,0,13],
            },
            {
                id: 5,
                name: 'Blackcore',
                img: 'vex.jpg',
                win: [],
            },
            {
                id: 6,
                name: 'El intrepido',
                img: 'vi.jpg',
                win: [],
            },
            {
                id: 7,
                name: 'Mfatality',
                img: 'teemo.jpg',
                win: [],
            },
            {
                id: 9,
                name: 'Kassike',
                img: 'yasuo.jpg',
                win: [],
            },
            {
                id: 10,
                name: 'Ralphi',
                img: 'malzahar.jpg',
                win: [],
            },
            {
                id: 12,
                name: 'Delicado',
                img: 'caitlyn.jpg',
                win: [1,0],
            },
            {
                id: 13,
                name: 'Javkon19',
                img: 'trinda.jpg',
                win: [0,1],
            },
        ]
    }
})