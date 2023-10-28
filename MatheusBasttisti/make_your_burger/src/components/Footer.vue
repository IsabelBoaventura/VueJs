<template>
    <footer id="footer">
        <p>Make Your Burger &copy;  {{ ano_atual }} criado com  &#128150;  por <b> {{ criador }}</b> e replicado por <b>{{ copiadora }}</b></p>

    </footer>
</template>


<script>
export default {
    name: "Footer",
    data(){
        return{
            ano_atual: new Date().getFullYear(),
            criador:'Matheus Basttisti',
            copiadora: 'Isabel Boaventura'
        }
    }


    
}
</script>



<style scoped>
    #footer{
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #fcba03;
        display: flex;
        align-items: center;
        justify-content: center;
        widows: 100%;
      
    }
</style>