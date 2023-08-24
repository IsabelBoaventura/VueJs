const MyNameApp = {
    data(){
        return {
            name: "",
            idade: 30,
            input_name: ""
        }
    },
    methods:{
        submitForm(e){
            e.preventDefault();
            // console.log('caiu aqui ');
            console.log( this.input_name );

            this.name = this.input_name ;

            

        }

    }
}

Vue.createApp(MyNameApp).mount("#app");

// Eu escrevi v.u.e   e ele passou para VTTCue
//data - dados a serem apresentados
//methods: funcoes da aplicacao 