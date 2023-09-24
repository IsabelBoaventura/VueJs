<template>
   
    <div style="border: solid 3px red; border-radius: 1%;">
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novos oportunidades! </p>
        <p>Utilizo as seguintes linguagens de programação:</p>   
        <ul>
            <li>Javascript</li>
            <li>HTML</li>
            <li>Python</li>
            <li>PHP</li>
        </ul>
        <p v-if="4>2">Testando para ver se aparece </p>
        <p v-show="mostrar_email" >Mande uma mensagem  para: {{ email }} </p>
    </div>

    
</template>

<script lang="ts" >
    export default {
        name: 'Info',
        data() {
            return{
                esta_trabalhando: false, 
                mostrar_email: false,
                email: "teste_email@email.com"

            }
        }
        
    }
</script>