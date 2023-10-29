<template>
    <div class="form">
        <p>Componente de Mensagem </p>
       
        <div>
            <form id="burger-form" @submit="createBurger" >
                <div class="input-container">
                    <label for="nome">Nome do Cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
                </div>

                <div class="input-container">
                    <label for="pao">Escolha o seu pão: </label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione o seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
                    </select>                   
                </div>

                <div class="input-container">
                    <label for="carne">Escolha a sua carne: </label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">Selecione a sua carne </option>
                        <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>                   
                </div>

                <div  id="opcionais-container"  class="input-container">
                    <label id="opcionais-title" for="opcionais">Escolha o seu acompanhamento: </label>
                    <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id" >
                        <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                    </div> 
                </div>

                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Burger!">
                </div>
            </form>
        </div>

    </div>    
</template>

<script>
export default {
    name: "BurgerForm",
    data(){
        return {
            paes: null,
            carnes: null,
            opcionaisData: null,
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            msg: null
        }
    },
    methods:{
        async getIngredientes (){
            const req = await fetch("http://localhost:3000/ingredientes");
            const banco= await req.json();

            // console.log( banco  );

            this.paes = banco.paes;
            this.carnes = banco.carnes;
            this.opcionaisData = banco.opcionais;
        }, 
        async createBurger(e){
            e.preventDefault();
            console.log('criou o Hamburger');

            const infoParaBanco = {
                nome: this.nome,
                carne: this.carne,
                pao: this.pao, 
                opicionais: Array.from(this.opcionais),
                status: "Solicitado"
            }

            console.log( infoParaBanco);

            const dataJson = JSON.stringify( infoParaBanco);

            const req = await fetch("http://localhost:3000/burgers",{
                method: "POST",
                headers: { "Content-Type": "application/json" }, 
                body: dataJson
            });

            const res = await req.json();
            console.log( res );

            //colocar a mensagem se foi ou nao inserido


            //limpar os dados para receber o próximo pedido
            this.nome = '';
            this.carne = '';
            this.pao= '';
            this.opcionais ='';
        }
    },
    mounted(){
        this.getIngredientes();
    }
}
</script>

<style scoped>
    #burger-form{
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }

    input, select  {
        padding: 5px 10px;
        width: 300px;
    }

    #opcionais-container{
        flex-direction: row;
        flex-wrap: wrap ;
    }
    #opcionais-title{
        width: 100%;
    }

    .checkbox-container{
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    }

    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }


    .submit-btn:hover{
        background-color: transparent;
        color: #222

    }


</style>