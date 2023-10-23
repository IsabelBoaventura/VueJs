<template>
   
    <div style="border: solid 3px red; border-radius: 1%;">
        <p>E-mail recebido via props: {{ email }}</p>
        <p v-if="esta_trabalhando">  === Aqui eu recebi o segudno  props <br>Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novos oportunidades! </p>
        <p>Utilizo as seguintes tecnologias para o back-end:</p>   
        <ul >
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index" > {{ technology }}</li>
        </ul>

        <p>Utilizo as seguintes tecnologias para o front-end:</p>   
        <ul >
            <li v-for="technology in frontend_technologies" :key="technology.id" > {{ technology.language}}</li>
        </ul>

        <p v-if="4>2">Testando para ver se aparece </p>
        <div>
            <button @click="showEmail" >{{ textoBotao }}</button>
            <p v-show="mostrar_email" >Mande uma mensagem  para: {{ email }} </p>
        </div>
        
       
        <p>Para acessar minha página do GitHub <a v-bind:href="meu_link" target="_blank"> basta clicar aqui</a>. </p>
sdsf

        <Picture />
    </div>    
</template>

<script>
    import Picture from './Picture.vue'

  
    export default {
        name: 'Info',
        components: {
            Picture
        },
        props:{
            email: String,
            esta_trabalhando: Boolean 
        },       
        data() {
            return{
                esta_trabalhando_original: false, 
                mostrar_email: false ,
                email_antigo: 'isabela@teste.com',
                meu_link: "https://github.com/IsabelBoaventura",
                textoBotao: "Mostrar e-mail",
                backend_technologies: ["Python", "javascript", "PHP", "Laravel"],
                frontend_technologies: [
                    {id:1, language: "HTML"}, 
                    {id:2, language: "CSS"}, 
                    {id:3, language: "Vue.js"} ]

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
        }, 
       
        
    }
</script>