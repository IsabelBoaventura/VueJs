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
        <div>
            <button @click="showEmail" >{{ textoBotao }}</button>
            <p v-show="mostrar_email" >Mande uma mensagem  para: {{ email }} </p>
        </div>
        
        
        <p>Para acessar minha página do GitHub <a v-bind:href="meu_link" target="_blank"> basta clicar aqui</a>. </p>


        <Picture />
    </div>

    
</template>

<script  >
    import Picture from './Picture.vue'

  
    export default {
        name: 'Info',
        components: {
            Picture
        },
        
        data() {
            return{
                esta_trabalhando: false, 
                mostrar_email: false ,
                email: "teste_email@email.com",
                meu_link: "https://github.com/IsabelBoaventura",
                textoBotao: "Mostrar e-mail"

            }
        },
        methods:{
            showEmail(){
                             
                this.mostrar_email = !this.mostrar_email 
                if(!this.mostrar_email){
                    this.textoBotao =  " Mostrar e-mail"
                }else{
                    this.textoBotao =  "Esconder  e-mail"
                }
                
               
               

            }
        }
        
    }
</script>