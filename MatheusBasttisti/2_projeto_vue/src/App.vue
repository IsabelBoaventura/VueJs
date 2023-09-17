<template>
    <div >
        <!-- <h1>Olá mundo!</h1> -->
        <!-- usar os componentes -->
        <PrimeiroComponente />
        <p>Informação de componente interno: {{ testeAqui }}</p>
        <LifeCycle />

    </div>    
</template>


<script>
//importando os componentes
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'


export default {
    name: 'App',
    // acrescentar os componentes 
    components:{
        PrimeiroComponente,
        LifeCycle
    }, 
    data(){
        return {
            testeAqui : 'Teste na linha 21 do app.vue'
        }
    }
}
</script>
