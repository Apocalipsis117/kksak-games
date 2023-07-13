const queryData = {
    percenThermometer(queryList, percentage) {
      const index = Math.floor((queryList.length - 1) * (percentage / 100));
      return queryList[index];
    }
}
const calculate = {
    discount(price, percentage){
        let discount = this.cutDecimals(price / 100 * percentage);
        let totalPlusDiscount = price + discount;
        let totalMinoDiscount = price - discount;
        return {
            totalPlusDiscount,
            totalMinoDiscount,
            discount
        };
    },
    getRemainingPercentage(priceA, priceB){
        let num1 = Number(priceA);
        let num2 = Number(priceB);
        let resta = num1 - num2;
        let remainingPercentage = this.cutDecimals((resta / num1) * 100);
        let remaining = this.cutDecimals(100 - remainingPercentage);
        let percentage = this.cutDecimals(remaining);
        let result = this.discount(num1, remaining)
        return {
            percentage,
            remainingPercentage,
            result
        };
    },
    cutDecimals: (num) => Number(num.toFixed(2))
}

Vue.component('v-jugador', {
    props: ['player', 'players'],
    template: `
    <div class="flex flex-wrap w-full">
        <div class="w-full mb-3 font-bold text-3xl">
            <h2>{{ player.name }}</h2>
        </div>
        <div class="w-auto">
            <img :src="img" class="w-[135px] h-[135px] rounded-full object-cover shadow-lg shadow-cyan-500/20 border-4 border-sky-900 p-2 mb-4" alt="">
            <div class="bg-gray-800 p-3 block rounded-lg">
                <div class="text-green-500 text-xl"><b>win</b> {{ win }}</div>
                <div class="text-red-500 text-xl"><b>loser</b> {{ loser }}</div>
            </div>
            <div class="relative">
                <img :src="'assets/' + porcentwin.img" class="w-[145px] my-4 rounded-xl">
                <div class="mt-[-2rem] text-center z-10">
                    <span class="bg-gray-500 rounded-md px-3">{{ porcentwin.name }}</span>
                </div>
            </div>
        </div>
        <div class="flex-grow ml-[3rem]">
            <ul class="space-y-2">
                <li v-for="item in playersWind" :key="item.id">
                    <div class="flex flex-wrap items-center bg-gray-800 shadow-lg p-2 rounded-lg" :class="item.vs">
                        <div class="w-auto">
                            <img :src="'assets/' + item.img" class="w-[35px] h-[35px] rounded-full object-cover" alt="">
                        </div>
                        <div class="flex-grow ml-3">
                            {{ item.name }}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `,
    computed: {
        playersWind(){
            const players = this.players.filter(x => x.id !== this.player.id);
            const playerVs = players.map(x => ({
                ...x,
                vs: this.winCalcule(x)
            }))
            return playerVs
        },
        win(){
            return this.player.win.length;
        },
        loser(){
            return this.player.loser.length;
        },
        img(){
            return this.player.img != '' ? `assets/${this.player.img}` : 'http://localhost/multimedia/relleno/img-c5.png'
        },
        porcentwin(){
            const division = [
                {
                    img: 'd-1.jpg',
                    name: 'Hierro'
                },
                {
                    img: 'd-2.jpg',
                    name: 'Bronce'
                },
                {
                    img: 'd-3.jpg',
                    name: 'Plata'
                },
                {
                    img: 'd-4.jpg',
                    name: 'Oro'
                },
                {
                    img: 'd-5.jpg',
                    name: 'Platino'
                },
                {
                    img: 'd-6.jpg',
                    name: 'Diamante'
                },
                {
                    img: 'd-7.jpg',
                    name: 'Maestro'
                },
                {
                    img: 'd-8.jpg',
                    name: 'Gran Maestro'
                },
                {
                    img: 'd-9.jpg',
                    name: 'Retador'
                },
            ]
            const cal = calculate.getRemainingPercentage(this.players.length, this.player.win.length);
            return queryData.percenThermometer(division.reverse(), cal.remainingPercentage)
        }
    },
    methods: {
        winCalcule(item){
            let queso = 'bg-gray-800';
            if(this.player.win.some(x => x === item.id)) {
                queso = 'bg-green-900'
            }
            if(this.player.loser.some(x => x === item.id)) {
                queso = 'bg-red-900'
            }
            return queso
        }
    }
})