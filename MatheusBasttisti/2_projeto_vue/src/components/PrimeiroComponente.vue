<template>
    <div style="border: solid 3px; border-radius: 3%;">
        <h1>Olá Vue! </h1>
        <p>Sou o Componente: <b>PrimeiroComponente.vue</b> </p>
        <h2>Dados:</h2>
        <p>O nome que consta no componente: {{  nome }}</p>
        <p>A idade que consta no componente: {{ idade }}</p>
        <MultiplosEventos />

    </div>    
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue';
    export default {
        name: 'PrimeiroComponente',
        components:{
            MultiplosEventos
        }, 
        data(){
            return {
                nome: "Isabel",
                idade: 42
            }
        }
    }
</script>
