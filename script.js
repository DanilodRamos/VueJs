const app = Vue.createApp({
    data() {
        return{
            tarefas: [],//arrays propriedades que vamnos manipular//
            item: ""
        }
    },

    methods:{//metodos adicionar ,marcar e deletar //
        add: function(){
            this.tarefas.push(this.item);//instanciando app//
            this.item = "";
        },

        check: function(e){
            e.target.parentElement.querySelector(".check").style.color = "#349223";//mudando a cor com vue.js//
            e.target.parentElement.querySelector("span").style.
            //adicionar item //
            textDecoration = "line-through";
        },
        del: function(index){
            this.tarefas.splice(index, 1);//splice excluir item da nossa lista//
        }
    }
});

app.mount("#app")