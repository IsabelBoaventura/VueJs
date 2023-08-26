<template>
    <!-- <h1>Olá mundo!</h1> -->
    <!-- usar os componentes -->
    <PrimeiroComponente />
</template>


<script>

import PrimeiroComponente from './components/PrimeiroComponente.vue'
//importando o componente criado 

export default {
    name: 'App',
    // acrescentar os componentes 
    components:{
        PrimeiroComponente
    }
}
</script>
