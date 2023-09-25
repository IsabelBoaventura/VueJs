<template>
    <img :src="avatar" :alt="descricao">
</template>

<script lang="ts">
    
    export default{
        name: "Picture",
        data(){
            return {
                avatar: "/img/ela_01.jpg",
                descricao: "Avatar de teste "
            }
        }
        
    }
</script>