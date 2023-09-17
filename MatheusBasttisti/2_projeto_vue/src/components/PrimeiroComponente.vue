<template>
    <div>
        <h1>Olá Vue! </h1>
        <p>Sou o Componente: <b>PrimeiroComponente.vue</b> </p>
        <h2>Dados:</h2>
        <p>O nome que consta no componente: {{  nome }}</p>
        <p>A idade que consta no componente: {{ idade }}</p>

    </div>    
</template>

<script>
    export default {
        name: 'PrimeiroComponente', 
        data(){
            return {
                nome: "Isabel",
                idade: 42
            }
        }
    }
</script>
