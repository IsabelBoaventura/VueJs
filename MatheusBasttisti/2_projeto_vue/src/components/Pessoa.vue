<template>
    <div style="border: solid 3px blue; border-radius: 3%;">
        <h2>Descricao da pessoa {{ nome }}</h2>
        <Form />
        <Info :email= "email" :esta_trabalhando=false  />
    </div>
   
</template>

<script lang="ts" >
    import Info from './Info.vue'
    import Form from './Form.vue'
    export default {
        name: 'Pessoa',
        components:{
            Info,
            Form
        },
        data() {
            return{
                nome: 'Isabel', 
                email: "email_props_teste@gmail.com",
                esta_trabalhando_2: false

            }
        }
    }
</script>
