<template>
    <div style="border: solid 3px; border-radius: 3%;">
        <h1>Olá Vue! </h1>
        <Reutilizacao />
        <p>Sou o Componente: <b>PrimeiroComponente.vue</b> </p>
        <Reutilizacao />
        <h2>Dados:</h2>
        <Reutilizacao />
        <p>O nome que consta no componente: {{  nome }}</p>
        <Reutilizacao />
        <p>A idade que consta no componente: {{ idade }}</p>
        <Reutilizacao />
        <MultiplosEventos />
        <Reutilizacao />

    </div>    
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue';
    import Reutilizacao from './Reutilizacao.vue';
    export default {
        name: 'PrimeiroComponente',
        components:{
            MultiplosEventos,
            Reutilizacao
        }, 
        data(){
            return {
                nome: "Isabel",
                idade: 42
            }
        }
    }
</script>
