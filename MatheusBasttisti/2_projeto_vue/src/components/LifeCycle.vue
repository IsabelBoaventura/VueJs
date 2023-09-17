<template>
    <div style="border: solid 3px; border-radius: 3%;">
        <h1>Life Cicle Hooks </h1>
        <p>Irei ser criado no momento que o sistema precisar de mim.</p>
        <ul>
            <li> <b>Nome:</b> {{ nome }} </li>
            <li> <b>Uso:</b> {{ uso }} </li>
        </ul>
    </div>
</template>

<script>
    export default{
        name : "LifeCycle",
        data(){
            return{
                nome: 'Ainda não fui nomeado',
                uso: "Ainda não tenho uso definido"
            }
        }, 
        created(){
            setTimeout(() => {
                this.nome = 'Isabel'
            }, 1000);            
        },
        mounted(){
            setTimeout(() => {
                this.nome = 'Gabriel'
            }, 2000);
           
        }
    }
</script>