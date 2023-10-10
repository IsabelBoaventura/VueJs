<template>
    <div style="border: solid 3px yellow; border-radius: 1%;">
        <h2>Meu Formulário [Unico] </h2>
        <form action="" @submit="enviarFormulario($event)">
            <div> <InputText /> </div>
            <div> <InputText /> </div>
            <div> <input type="text" v-model="nome2" >  </div>
            <div> <Email />     </div>
            <div> <input type="text" v-model="email2" >  </div>
            <div> <Submit />    </div>
        </form>
    </div>
    
    
</template>

<script> 

    import InputText from './Form/InputText.vue'
    import Submit from './Form/InputSubmit.vue'
    import Email from './Form/InputEmail.vue'
    export default {
        name: 'Form',
        components:{
            InputText,
            Submit, 
            Email
        },
        data(){
            return {
                nome2 : "",
                email2: ""
            }
        },
        methods:{
            enviarFormulario(e){
                e.preventDefault();
                //faz com que ignore a sua função primária ( enviar o formulario)

                const nome2= this.nome2;
                const email2= this.email2;
                console.log("Formulário Enviado ");

                console.log('o nome digitado foi: '+ nome2);
                console.log('o email digitado foi: '+ email2);

                //ajax

                //inserir no banco de dados 
            }
        }
    }
</script>