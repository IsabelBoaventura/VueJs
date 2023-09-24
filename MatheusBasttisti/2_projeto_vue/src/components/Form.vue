<template>
    <div style="border: solid 3px yellow; border-radius: 1%;">
        <h2>Meu Formulário </h2>
        <form action="" method="post">

            <InputText />
            <InputText />
            <Email />
            <Submit />

        </form>
    </div>
    
    
</template>

<script lang="ts"> 

    import InputText from './Form/InputText.vue'
    import Submit from './Form/InputSubmit.vue'
    import Email from './Form/InputEmail.vue'
    export default {
        name: 'Form',
        components:{
            InputText,
            Submit, 
            Email
        }
    }
</script>