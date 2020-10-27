function  getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return{
            playerHealth: 100,
            monsterHealth: 100
        };
    },
    computed: {
        monsterBarStyles() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            return {width: this.playerHealth + '%'};
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5,12);
            console.log(attackValue)
            //this.monsterHealth = this.monsterHealth  - attackValue;
            this.monsterHealth -= attackValue
            console.log(this.monsterHealth)
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');