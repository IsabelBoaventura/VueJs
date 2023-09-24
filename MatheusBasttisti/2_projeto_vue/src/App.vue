<template>
    <div >
        <!-- <h1>Olá mundo!</h1> -->
        <!-- usar os componentes -->
        <PrimeiroComponente />
        <p>Informação de componente interno: {{ testeAqui }}</p>
        <LifeCycle />
        <Pessoa />

    </div>    
</template>


<script lang="ts" >
//importando os componentes
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'
import Pessoa from './components/Pessoa.vue'


//teste para adicionar o bootstrap
// import Vue from 'vue'
// import { BootstrapVue } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
//  Vue.use(BootstrapVue);
//  Vue.use(IconsPlugin);


export default {
    name: 'App',
    // acrescentar os componentes 
    components:{
        // BootstrapVue,
        
        PrimeiroComponente,
        LifeCycle, 
        Pessoa
    }, 
    data(){
        return {
            testeAqui : 'Teste na linha 21 do app.vue'
        }
    }
}
</script>
