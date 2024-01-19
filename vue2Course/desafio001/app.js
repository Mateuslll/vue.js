new Vue({
    //instancia do vue.js
    el: '#app',
    data:{
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs:[]
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.running = true,
            this.playerLife = 100,
            this.monsterLife = 100
            this.logs = [];
        },
        attack(especial){
            this.hurt('playerLife',7,12,false, 'Monster', 'Hero', 'monster')
            if(this.monsterLife > 0){
                this.hurt('monsterLife',5,10,especial,'Hero','Monster','player')
            }
            
        },
        hurt(atributo, min,max,especial, source, target, cls){
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus)
            this[atributo] = Math.max(this[atributo] - hurt, 0);
            this.registerLog(`${source} atingiu ${target} com ${hurt}. `,cls)
            logs = this.registerLog
            
        },
        heal(min,max){
            const heal = this.getRandom(min,max)
            this.playerLife = Math.min(this.playerLife  + heal , 100)
            this.registerLog(`Jogador ganhou força de ${heal}. `,'player')
            logs = this.registerLog
        },
        healAndHurt(){
            this.heal(10,15)
            this.hurt('playerLife', 7,12,false,'Monster','Hero', 'monster')
        },
        registerLog(text, cls){
            this.logs.unshift({ text, cls })
        },

      /*  hurtMonster(min,max,especial){
            const plus = especial ? 0 : 0;
            const hurtMonster = this.getRandom(min + plus, max + plus)
            this.monsterLife = Math.max(this.monsterLife - hurtMonster, 0);
            
        },*/
        getRandom(min,max){
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
    },
    watch: {
        hasResult(value){
            if(value) this.running = false
        }
    }

})