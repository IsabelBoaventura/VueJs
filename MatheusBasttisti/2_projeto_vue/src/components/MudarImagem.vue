<template>
    <div>
        <button @click="$emit('nomeEmit')" > Trocar a imagem do Avatar </button>

    </div>    
</template>

<script>
export default {
    name: "MudarImagem", 
    emits: ['nomeEmit']
    
}
</script>