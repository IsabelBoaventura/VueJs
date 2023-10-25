<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <MudarImagem  @nome-emit="acaoDoEmit" />
    </div>
    
</template>

<script>

    import MudarImagem from './MudarImagem.vue'
    
    export default{
        name: "Picture",
        components: {
            MudarImagem
        },
        data(){
            return {
                avatar: "/img/ela_01.jpg",
                descricao: "Avatar de teste "
            }
        }, 
        
        methods: {
            acaoDoEmit(){
                console.log( 'Clicou, vou mudar de imagem  ');
                this.avatar = 'img/ela_02.jpg'
            }
        }
    }
</script>