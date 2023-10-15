<template>
    <div style="border: solid 3px blue; border-radius: 3%;">
        <h2>Descricao da pessoa {{ nome }}</h2>
        <Form />
        <Info email="email@teste.com" />
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
                nome: 'Isabel'

            }
        }
    }
</script>
