<template>
    <div>
        <!-- <h1>Olá mundo!</h1> -->
        <!-- usar os componentes -->
        <PrimeiroComponente />
        <p>Informação de componente interno: {{ testeAqui }}</p>

    </div>    
</template>


<script>

import PrimeiroComponente from './components/PrimeiroComponente.vue'
//importando o componente criado

export default {
    name: 'App',
    // acrescentar os componentes 
    components:{
        PrimeiroComponente
    }, 
    data(){
        return {
            testeAqui : 'Teste na linha 21 do app.vue'
        }
    }
}
</script>
