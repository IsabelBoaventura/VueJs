<template>
    <div id="nav">
       <router-link to="/">
            <img src=""  id="logo">
        </router-link>
     
        <router-link to="/">Home</router-link> |
        <router-link to="/pedidos">Pedidos </router-link> |
        <router-link to="/about">About</router-link> 

        <h2>Eu sou Navbar</h2>
    </div>
</template>

<script>
export default {
    name: "Navbar"
    
}
</script>

<style scoped>

</style>