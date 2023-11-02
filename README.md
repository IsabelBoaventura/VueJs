# VueJs

Projeto de **FrondEnd** em Vue.js um site de solicitação de lanche. 

##  :walking: Caminho

> Tutorial:
		https://www.youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL
		
> Vuejs: 
		https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
	
 
> CDN 
		<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

## :wrench: Instalar o VueJs via CLI

> Documentação:
	https://br.vuejs.org/v2/guide/installation#NPM
	
> Comando:
	npm install -g @vue/cli ( Não funcionou);

> Na documentação do vue:
	npm install vue ( funcionou );
	
Caso a versão que esta instalada no pc agora, não for a mais recente, pode fazer a atualização do Vue. 

> Atualizar o Vue.js:
	vue upgrade --next
	
	
	
	
	
## :cd: Programas

* node: v18.16.0
* npm: 9.6.6
* vue: vue/cli 5.0.8
* Vetur (extensão do vscode );
 

## 📚 Arquivos

## Dicas

* Para trabalhar com as comandos de linha de texto no VS Code, troque o terminal de 'powershell' para 'bash'.

* Estou preferindo usar o cmd, esta mais prático e rápido. 

* Na linha de comando, para marcar e desmarcar, selecione o espaço do teclado;

* Para verificar a versão do vue.js: vue -V;
* Para criar novo projeto: vue create . 
 





## Funções 

 * Data binding: replicação do que o usuário esta escrevendo em tempo real. Na mesma tela onde esta o input do campo onde esta sendo escrita a informação, haverá a apresentação deste input. Usando o "v-model" do campo .
 
## Projeto

### Criando um projeto com vue/cli

Dentro do repositório  , pelo terminal, linha de comando de como criar o projeto :

 <code>	vue create 2_projeto_vue </code>
 
(Quando eu estava refazendo o vue, estes comandos não funcionaram no terminal do  VS Code, mas funcionaram no terminal do cmd. )
	
#### Selecionar Manualmente
Manually select features
   
Marque:

- [x] Choose Vue version
- [x] Babel
- [x] Router

Desmarque o Linter / Formatter
  
   
Qual versão:

- [x] 3x
  
Qual o arquivo das configurações:

- [x] Arquivos indicados
  
Salvar para futuros Projetos:

- [x] N


Selecionamos com a barra de espaço no teclado;

	
	
### Projeto Criado

Com o projeto criado, podemos ver que já tem algumas diferenças. 

Por exemplo: 


o arquivo principal do video é **main.js** e o meu é **main.ts**;

Indicação de que o video irá usar js ( javascript) e no meu projeto ( posso usar, não quer dizer que irei usar)Typescript;
	
### Executando

Para executar o programa e ver o que esta sendo criado, usamos o comando:

``` npm run serve ```

	
	
Isto irá fazer o sistema rodar, localhost, na porta 8080. 

<img src="/imgs/pagina_inicial.jpg" />

Quando fechar o sistema, e / ou precisar reiniciar novamente,  basta clicar no comando de executar: 

``` npm run serve ```
	
(repetindo a mesma informação para recordar )

## :chart_with_upwards_trend: Estrutura e Conteúdo das Aulas



- [x] Aula 01 - Introdução

<h4>O que é Vue</h4>

* Framework progressivo para criar interfaces;
* Construção de layouts baseada em componentes;
* Baixa curva de aprendizado ( parece com o Python);
* Framework front-end mais utilizado;
* Com módulos para manipulação de rotas ( Vue Router) e Status ( Vuex);

<h4>Pré-requisitos</h4> 

* Conhecimento intermediário de HTML, CSS e Javascript; 
* Recursos do javascript na versão ES6 ( map, filter, reduce,  ... );

	
- [x]  Aula 02 - Como Instalar o Vue

<h4>Pré-requisitos</h4>

* Utilizando CDN;
* Utilizando CLI;

- [x]  Aula 03 - Inputs e Data Binding

* Data Binding: mudar em tempo real um dado que está sendo inserido em um input;
* Vários outros frameworks também tem esta funcionalidade: React, Angular, ... ;



- [x]  Aula 04 - Utilizando o Vue CLI

* CLI é ferramenta de linha de comando do Vue;
* Possibilita criar e configurar projetos de forma avançada;


- [x]  Aula 05 - **Criando Componentes**

* Componentes permitem dividir nosso layout em partes;
* Cada componente tem a sua responsabilidade;
* Entidades divididas assim, deixa o projeto com a separação das responsabilidades maior; 
* Cada componente tem seu CSS e os dados que manipula;

Para reiniciar o projeto, iremos limpar todo o conteudo do App.vue e do `src -> components -> HelloWorld.vue` ;

App.vue é a página inicial do código, será nele que teremos o que será exibido na aplicação;

A tag `template` é a tag que indica que dentro dela haverá informações HTML; 

Este arquivo só irá funcionar, depois que contarmos para a aplicacao que este template é o principal da aplicação, fazemos isto chamando o script e anunciando: 

~~~javascript
<script>
	export default {
		name: 'App'
	}
</script> 

~~~


Entretanto na minha aplicação ainda há erros,  na aula não. 

Alguns ajustes no meu codigo para dar certo. 

<img src="/imgs/primeiraPagina.jpg" />

E funcionou!!!!

> App.vue

Vamos importar o componente criado para dentro do app ( components/PrimeiroComponente.vue ), isto se faz dentro do script; 

Importação não significa uso, importamos,  mas agora temos de definir, que iremos usar. 

Assim no export, depois do nome da página (name: 'App') iremos acrescentar o componentes. 

Acrescentamos o componente, agora ele esta pronto para ser usado; 

<img src="/imgs/primeiraPaginaVue.jpg" />


- [x]  Aula 06 - **Dados em Componentes (data)**

* Componentes podem conter dados;
* Os dados dos componentes podem ser inicializados com algum valor e podem ser modificados dura a execução do programa;
* Os dados ficam em uma função chamada `data`;
* A função `data` retorna os dados em forma de òbjeto`;

Definimos dados dentro do 'data' usando o `nome_do_dado` acrescido de `:` e o `valor_do_dado`;

Cada dados a ser adicionado, é separado com uma virgula no final (,) se não for o último;

Os componentes do Vue, podem ter apenas uma elemento root, ou seja, um principal. 

No exemplo existia um a 'h1' e um 'p', para resolver a situação, acrescentamos um elemento externo,  'div', que se tornou o root deste componente.

Mesmo a aplicação usando componentes, ela mesma pode usar o `data` para ter alguma informação apresentada. 

Até agora o que mais me chama a atenção no Vue.js é a modificação no código e em menos de 2 segundos modificação na página também. Sem precisar adicionar o modemon  ou outro. 


- [x]  Aula 07 - **Entendendo os Life Cycle Hooks ( ciclo de vida )**

* Os Life Cycle Hooks são eventos que podem ser ativados em determinadas partes da execução do programa;
* Executa o Código no momento que o componente é criado;
* Podendo alterar a aplicação em diversas etapas diferentes; 
* Exemplo: `created()`,  `mounted()` 

Criando um novo componente:

- :open_file_folder: src
	- :open_file_folder: components
		-  :pencil:  LifeCycle.vue
		

Criaremos o componente, com as informações básicas para teste, e depois importaremos na aplicação, e adicionaremos na área básica dos componentes. 

Quando criamos o componente 'LifeCicle' dissemos para ele que o seu nome era "Ainda não sei", quando este componente foi criado, e a ação "created" foi executada, trocamos o nome dele para "Isabel". Quando o componente for montado "mounted", apresentado na tela, teremos um terceiro nome. 

Apenas trocando o nome,  parece sem propósito, mas assim que tiver em produção e cada momento dele estiver recebendo um valor e uma ação que deve ser realizado, neste momento veremos a agilidade do componente. 

Ou seja: Eventos acontecendo em determinada etapa da aplicação.  

Uma das etapas mais usada é no carregamentos das informações do banco.


- [x]  Aula 08 - **Hierarquia de Componentes**

* Componentes podem ter outros componentes que dependem deles. Isto é chamado de árvore de componente. 

* Além de dividir os componentes em subcomponentes dividimos também as responsabilidades; 

Não sei se os formulários com partes salvas em separado podia ser esta parte de Hierarquia de Componentes; 

Criamos o componente 'Pessoa';
Criamos o componente 'Info';

Importamos no componente Pessoa o componente Info;
Importamos no compomente App o componente Pessoa;

Com isto criamos uma árvore de componentes. Uma hierarquia. 

<img src="/imgs/hierarquia.jpg" />

Criamos o componente 'Form';

Criamos a pasta 'Form';

Dentro da pasta 'Form', iremos criar cada um dos componentes de um formulário: inputs de texto, email, submit, ... 

Chamamos dentro do componente 'Form' os componentes que estão dentro da pasta 'form';


- [x]  Aula 09 - **Diretivas**

### Conhecendo as diretivas ( v-if, v-show, v-for )

* Muitas diretivas em vue;
* Pode mudar a exibição de uma parte do layout, baseada em condições;
* As diretivas são essenciais para uma aplicação dinâmica;
* Pode-se mudar a lógica pelos valores inseridos em `data`;


Diretivas: v-if;  v-else ( acompanha o v-if); v-show [escolhe se mostra ou não uma informação; v-for [para apresentação de arrays].

v-else: nunca irá existir sozinho, e sempre terá de estar embaixo do if.


v-show: apenas irá mostrar se for verdadeiro.


- [x]  Aula 10 - Atributos Dinâmicos

#### Argumentos

* Argumentos são valores dinâmicos que podem  ser inseridos em "Diretivas"  ou "Atributos";

* Diretivas: basea-se em argumentos para executar determinados comportamentos;

* Atributos: basea-se em argumentos para mudar URL de links ou src de imagens;

* Essenciais para alterar a experiência do usuário no udo da aplicação; 

Exemplo: a imagem de cada usuário; 

"v-bind" pode ser representado tanto por `v-bind` (sintaxe completa) como  apenas por `:` (sintaxe resumida);


- [x]  Aula 11 - Métodos

* Métodos no Vue são semelhantes a funções;
* Podem ser executados baseados em eventos ou por Lógica da Aplicação ; 
* Ficam em um objeto chamado methods;
* É onde se cria as funções que depois são executadas; 

Agora será criado um botão para ativar ou desativar a mensagem onde aparece o e-amil; 

Diretiva: `@click` equivalente ao chamado da função onclick do javascript;

Criado a chamado de evento `@click` e a criação do método `methods` .

No nosso caso, 'methods', deve vir depois de 'data', pois a nossa "função" showEmail, irá usar declarações existentes no data.

Só funciona quando retira a `lang="ts"` de dentro da tag script; 




- [x]  Aula 12 - CSS Scoped e CSS Global

* CSS pode ser ```Global``` ou  ```Scoped``` sendo que global, se define na página principal (app.js) e é aplicado a todos os elementos. e SCOPED é definido em cada elemento, cada elemento pode ser esttilizado, deixando mais fácil de personalizar os elementos; 

Vamos realizar estilos globais na nossa página principal. 

O estilo adicionado nesta página foi passado para todas as páginas que compõe a principal, sem que tivessemos que repetir este estilo nas demais páginas. Por isto do nome "Global". 

Agora criando um estilo de "Scoped". Criamos uma página nova: "Header.vue"  e nela adicionaremos o estilo "style scoped":

~~~css
<style scoped>
	ul{ ... }
</style>

~~~



E iremos criar os estilos que serão apresentados apenas para esta página.

Estilos criados e apresentados apenas no Header,  mesmo quando o Header faz parte da página do app.js. 


- [x]  Aula 13 - Renderização de listas ( v-for)

* As listas (arrays) serão renderizadas por "diretivas" ;
* A diretiva das arrays geralmente será a "v-for";
* Geralmente os dados virão da "data", e já virão como uma array;
* Cada item poderá ser impresso junto com o HTML.

Com esta diretiva, se retira a necessidade anterior de abrir o php escrever o codigo, fechar o php e depois continuar a escrever o HTML ( como se faz no php com html puro);

Vamos voltar a usar a página "info.vue";

Na "data" iremos acrescentar um novo atributo: "backend_technologies";
Este atributo será uma array, portanto será apresentado assim:  ``` backend_technologies: ["", "", "", ... ] ```
	
Caso seja usada na chamada do UL o atributo do ``v-for`` , todos os elementos serão apresentados em um UL diferente, portanto se tiver 5 ou 50 elementos, cada um deles será de uma lista. 

Assim o recomentado é que a chamada seja realizada no elemento que irá se repetir, neste caso  o `LI`;

~~~vue
<ul>
    <li v-for="(technology, index) in backend_technologies" v-bind:key="index" > {{ technology }}</li>
</ul>
~~~
	
Isto é para casos onde trabalhamos com arrays. Mas podemos também trabalhar com objetos.

Os objetos são recebidos assim:

~~~vue
frontend_technologies: [
	{id:1, language: "HTML"}, 
	{id:2, language: "CSS"}, 
	{id:3, language: "Vue.js"},  ... ]
	
~~~

Na apresentação das informações será semelhante, apenas não precisando mais adicionar um indice para o objeto, pois ele já tem ( id ). 

Evitando apresentar erro em tela,  pois a apresentação de arrays e Objetos exige um índice, que deve ser apresentado  com o **v-bind** key;


~~~vue
<ul>
    <li v-for="technology in frontend_technologies" :key="technology.id" > {{ technology.language}}</li>
</ul>

~~~



- [x]  Aula 14 - Eventos ( _@submit e _@click)

* Eventos são utilizados para complementar ações dos usuários com ativações de Métodos. (Chamadas de funções no javascript);
* No Vue para apresentar um evento usamos o "@", por exemplo: **@click**;
* Serão adicionados diretamente a elementos do HTML;
* O Evento recebe um "parâmetro" que é o método que será executado; 

No nosso exemplo já foi usado na parte de mostrar e esconder o E-mail do Usuário;

Envios de formulários são onde mais comumente usamos estes eventos. ( Form.vue) ```<form action="" @submit="enviarFormulario">```
	

Desta forma no formulario criamos o evento para submeter.

Agora temos de criar o método "enviarFormulario" que estará dentro do "export", depois do "name" e "components".

Se no formulario já houver um "method" ( como no meu caso havia), neste momento do teste irá apresentar erro. ( retirado). 

Após clicar em 'Enviar' o sistema continua na mesma tela, e no console aparece a mensagem selecionada para constar nele.

No exemplo dele, após submeter, voltou a ficar vazio os campos, sem ter adicionado nenhuma limpeza, no meu exemplo o mesmo não ocorreu.


- [x]  Aula 15 - Múltiplos Eventos

* O vue permite  a entrada de Múltiplos Eventos em um único evento; ( chamada de várias funções ao clicar em um botao apenas ???? )
* Sintaxe permanece a mesma;
* Eventos separados por vírgula;
* Execução de dois ou mais métodos com um click;

Evento: ação que parte do usuário (clique na tela ); 

Os testes serão realizados no "PrimeiroComponente.vue" para melhor visualizar como os multiplos componentes trabalham; 

Cria o novo componente na apresentação;
Importa o componente no script;
Cria o "MultiplosEventos.vue", no mesmo caminho;
Adiciona o componente na Exportação;

Na página nova "MultiplosEventos.vue" criamos a estrutura padrão: template com div, script com export;

Pode se passar a quantidade de parametros desejada. 
Os atributos não podem ser texto ( strings ), deve ser um argumento que venha de um dado dinâmico. 

- [x]  Aula 16 - Reutilização de Componentes

* Reutilização de componentes é um método bastante comun no Vue;
* Cada componente independente;
* Podendo ativar métodos e mudar dados em cada uso;
* Para ser usado invocamos o metodo após a importação. 

Vamos utilizar o fonte "PrimeiroComponente.vue"  e um fonte novo "Reutilizacao.vue";

Criamos o componente de "Reutilização" e agora importamos ele no componente "Primeiro";

O mesmo componente foi adicionado em várias partes do código ( pensei em um botão salvar), mas como usar este componente, para salvar apenas uma pequena parte do Codigo,  por exemplo: apenas o endereço,  e depois apenas o nome, e assim por diante.

Exemplo comentado no vídeo: adicionar produtos no carrinho; 

Podendo usar este mesmo componente, em outros componentes do sistema. Exemplo: Picture, form, ... ;

- [X]  Aula 17 - Utilizando props

* Passar dados com `props` propriedades;
* Os componentes do Vue podem receber dados, e este recurso é chamado de ```props```;
* As props podem ser passadas por valores do data, como também podemos inserir diretamente eles;
* Precisa ser declarada as propriedades recebidas pelos componentes em uma array ou objeto chamado props;

Passar dados de um componente para o outro;
**PROPS**  ação de passar dados de um componente pai para um componente filho;

Tem de nomear a props;

Neste exemplo iremos utilizar os componentes "info" e "Pessoa".
No componente "Pessoa" estamos chamando o componente "Info", agora iremos além de chamar passar dados para ele. 

Onde antes declaravamos para apresentar o "Info" apenas assim:  ```<Info />```  agora iremos acrescentar o atributo "email", passando a ficar assim: 
``` <Info compEmail="joaodasNeves@teste.com" />``` o atributo "email" já existia no Fonte info ( pertencendo as informações do data ), não é proibido ter, mas como precisamos distinguir, melhor cada um ter um valor. 

Os "props" também são declarados, assim como os "components", o "name", o "data", ... ;

~~~vue
props:{
    compEmail: String
    }

~~~

O fato do "String" estar em letras minusculas, fez com que a minha página parece de ser apresentado, portanto VueJs é casesensitive, pelo menos nos nomes dos arquivos ;

Agora fazendo que  o valor da variavel antigada de email, receba o novo e-mail via props. Ou seja, o e-amil de data, receberá o e-mail do props. MAS não o de "data()" onde será apresentado, mas o data da página onde se esta criando o props. 


Agora a página (Pessoa) onde apresentava um e-amil que constava em seu "data()" irá apresentar o e-mail que vem do props da "Info". 


As props podem ser passadas via arrays; 
Utilizando o "Header.vue" para o exemplo que passa a array;

- [x]  Aula 18 - Emit

**Ouvindo evendos com $emit**

* Utilizando o $emit é possivel ouvir um evento de um componente filho em um componente pai;
* Ativando componentes( como métodos) no componente pai;
* Evento deve ser registrado no componente;
* É preciso definir o que será feito com a ativação do evento na chamada do componente; 

Útil para quando não se trabalha com "states"; 

Via $Emit se consegue fazer a comunicação de baixo para cima ( do filho para o pai), via Props é de cima para baixo ( do pai para o filho);

Neste exemplo iremos trabalhar com os componentes: Picture.vue e MudarImagem.vue (Novo criado agora, para este exemplo);
Será alterada  a imagem do Usuário por meio de um clique;


~~~vue
	<button @click="$emit('nomeEmit')">
~~~

Para criar o $emit declaramos ele , onde ele será chamado. E delaramos ele na área dos Eventos ( onde se adiciona o "name" , os "methods", as "props" );


~~~vue
	name: 'MudarImagem',
	emits: ['nomeEmit']
~~~


Isto esta sendo realizado no componente filho, ou seja no "MudarImagem.vue"; 

Volta no componente pai deste componente, neste caso o Picture.vue; 

No componente Pai, iremos informar o que o $emit deve fazer no componente filho, ou seja, qual a ação dele ao clicar no botão. 

No componente pai, para chamar o emit, iremos usar o nome dele, em minusculo e com a separação usando hifen. Por exemplo: o nome do emit é mudarImagem, no pai ele será chamado como: @mudar-imagem;

Código no componente pai ( Picture.vue).
Código no <template> 

~~~vue
	<MudarImagem  @nome-emit="acaoDoEmit" />
~~~

Código no <script>
~~~vue
	methods: {
        acaoDoEmit(){
            console.log( 'Clicou, vou mudar de imagem  ')
        }
    }
~~~

Com isto conseguimos fazer com que o botão que esta no componente filho, ao ser clicado faça a operação de troca no componente pai. 

- [x]  Aula 19 - Criando o projeto do curso

Criar a pasta do projeto ( make_your_burger ). 
Pelo terminal entre nesta pasta e crie  o projeto.

Comandos para criar o projeto:

	* Entre na pasta do projeto pelo terminal;
	* 'vue create .' 
	
Rever a criação novamente  e repassar o passo a passo; 


O novo projeto criado ficará com este formato de pastas:
- :open_file_folder: make_your_burger
	- :open_file_folder: db  (Será criada na próxima aula)
	- :open_file_folder: node_modulos
	- :open_file_folder: public
	- :open_file_folder: src
		- :open_file_folder: assets
		- :open_file_folder: components
		- :open_file_folder: router
		- :open_file_folder: views
			-  :pencil:  App.vue (arquivo principal)
	-  :pencil:  arquivos_do_projeto

- [x]  Aula 20 - Criando uma API com JSON server

Iremos precisar instalar uma nova dependência: "Json". Iremos utilizar para fingir que é uma API, um acesso ao banco de dados. 
Será onde guardaremos e receberemos as informações. 

Pare o servidor e faça a instalação:

	npm install json-server
	
Instalação realizada. 
O sistema por si só não tem como saber que será apartir do json que teremos as nossas informações,  por isto temos de contar para o sistema. 

Para informar ao sistema, iremos acrescentar um novo script no "Package.json", o nome deste script será "backend", e informaremos qual o seu caminho. 

Ficando desta forma:

<code>
	"scripts": {
		"serve": "vue-cli-service serve",
		"build": "vue-cli-service build", 
		"backend": "json-server --watch db/db.json"
    },
</code>

Ja que indicamos o lugar onde o arquivo estará, agora iremos criar esta estrutura:

- :open_file_folder: db
	-  :pencil:  db.json 
	
Esta pasta será criada na raiz do projeto. 
Pegamos o arquivo json  do github e adicionamos em nosso código.

Agora vamos para o terminal.
E inicializamos o backend:

	<code>npm run backend</code>
	
Usei o powershell, o bash, e o terminal normal, até que o inicializar do backend fosse aceito.

No terminal CMD, após eu instalar o json server,  rodei o audit:
	<code>npm audit</code>

Ele parece ter feito uma farredura nos programas instalados,  mas depois disto a função do run backend funcionou.

Caminho que o backend nos passou:

<code>

D:\documentos\Praticando\VueJs\MatheusBasttisti\make_your_burger>npm run backend

> make_your_burger@0.1.0 backend
> json-server --watch db/db.json


  \{^_^}/ hi!

  Loading db/db.json
  Done

  Resources
  http://localhost:3000/ingredientes
  http://localhost:3000/status
  http://localhost:3000/burgers

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

Some error occurred Error: listen EADDRINUSE: address already in use ::1:3000
    at Server.setupListenHandle [as _listen2] (node:net:1740:16)
    at listenInCluster (node:net:1788:12)
    at GetAddrInfoReqWrap.doListen [as callback] (node:net:1937:7)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:109:8) {
  code: 'EADDRINUSE',
  errno: -4091,
  syscall: 'listen',
  address: '::1',
  port: 3000
}

D:\documentos\Praticando\VueJs\MatheusBasttisti\make_your_burger>

</code>


Estes caminhos serão onde encontraremos as "Tabelas" do backend.

Resources
  
- http://localhost:3000/ingredientes
- http://localhost:3000/status
- http://localhost:3000/burgers

Home
- http://localhost:3000
  
  
  
**Resources** são as rotas disponiveis no sistema.

Lembrando: o backend irá funcionar independente do FrondEnd, serão em dois terminais diferentes, duas portas diferentes.
São independentes um do outro.

Terminal 01: <code>npm run serve</code>

Terminal 02: <code>npm run backend</code>


- [x]  Aula 21 - Implementando o Vue Router

Para termos as mesmas imagens do projeto, baixamos do GitHub deste projeto as imagens e o icon. 

No fonte App.vue, iremos limpar o CSS que venho dele,  iremos usar o produzido por nós. 

Eliminaremos o HelloWord.vue;

Para cada página haverá uma view, e cada views terá vários componentes. 

Vamos criar componentes compartilhados,  ou seja, componentes que poderão ser visto em todas as páignas ou em várias páginas.

Componentes compartilhados serão sempre criados na pasta "components"; 


- :open_file_folder: src
	- :open_file_folder: components
		-  :pencil:  Navbar.vue


O estilo destes componentes serão "scoped" ou seja, apenas deles. 

Adicionamos na Navbar o logo da aplicação.

Para adicionar o logo ou qualquer outra página ao componente, iremos usar "router-link" são rotas. 

A imagem do logo será enviada por Props, ou seja , o App.vue que irá mandar qual imagem o Navbar.vue irá apresentar. O pai manda a imagem que o filho deve apresentar. 



```ROUTER-VIEW``` deve estar instanciado no componente principal para as informações de cada view seja apresentada nas páignas.


~~~vue
	<template>
		<Navbar />
		<router-view/>
	</template>
~~~


Trocamos ( eu prefiro criar novo) o componente About para o componente "Pedidos";

No componente "Navbar" acrescentamos o "router-link" de pedidos: 

~~~vue
	  <router-link to="/pedidos"> Pedidos </router-link>
~~~


Agora que temos esta novo componente, precisamos criar a rota deste novo componente também .

Para criarmos ou alterarmos as rotas devemos ir no arquivo "index.js" que esta dentro da pasta "router".


- :open_file_folder: src
	- :open_file_folder: router
		-  :pencil:  index.js 
		
Neste arquivo iremos criar uma nova rota;


~~~vue
{
	path: '/pedidos',
	name: 'Pedidos',
	component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
}
~~~


No meu caso agora eu tenho as páginas:  "Home",  "About" e  "Pedidos".

Cada uma delas, com uma informação e cada uma delas com a sua própria rota. 

- [x]  Aula 22 - Finalizando cabeçalho e rodapé do projeto

Vamos estilizar o nosso navbar.
O Navbar receberá as props: 'logo' e 'alt'; do componente pai (App.vue);

No componente pai, passamos as propriedades pelo Navbar que chamamos na template. E no "data()" informamos quais informações apresentar.

Agora arrumar a apresentação ( CSS );

- [x]  Aula 23 - Criando Banner da aplicação

No componente "Home" iremos adicionar os componentes "Banner" e "Formulario".

Nesta parte concluimos o componente Banner. 


- [x]  Aula 24 - Criando Formulário de cadastro

Agora vamos para o formulário da aplicação. Iremos criar o componente "BurgerForm.vue".

Iremos criar os componentes que irão aparecer na tela, e depois estilizar o seu CSS. 


- [x]  Aula 25 - Resgatando dados do banco e inserindo no formulário

Para trabalharmos com os dados do banco, iremos usar o componente "BurgerForm", os dados serão tratados dentro do "data()" deste componente.

Nesta parte iremos fazer uma divição com singular e plural . No plural serão dos dados vindo do servidor ( paes, carnes, opcionaisData ) e no singular serão os dados que cadastramos e mandamos para o servidor ( nome, pao, carne, opcionais[] <-- isto é uma array ).

Vamos criar os métodos ( methods )que irão trazer as informações do backend, e os métodos que irão levar as informações para o backend. 

Nossos métodos serão assincronos ( ```async``` ).


**Métodos**:

- **getIngredientes**: traz as informações dos ingredientes do backend;


Além de "methods" devemos ter também o "mounted()" basicamente é quem chama as funções.

Depois que recebemos os dados, iremos declarar que os dados que vieram do banco serão passados para os dados que estão no "data()" (aqueles em singular apresentados antes).

Agora temos de substituir na apresentação da tela os dados fixos, pelos dados vindo do "data()". Para isto usaremos do ```v-for```. 


~~~vue
 <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option> 
~~~

Para o checkbox, o v-for será adicionado na Div "checkbox-container". 

~~~vue
<div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id" >
    <input type="checkbox" name="opcionais" id="opcionais" v-model="opcionais" :value="opcional.tipo">
    <span>{{ opcional.tipo }}</span>
</div>
~~~


Assim fazemos o tratamento para aparecer as informações trazidas do banco.



- [x]  Aula 26 - Inserindo dados no banco

Agora que já buscamos as informações do banco, esta na hora de enviar para  o banco,  para isto teremos um método para o envio.

No 'form' acrescentamos o submit com o nome do método: 

~~~vue
<form id="burger-form" @submit="createBurger" >
~~~

E criaremos o método "createBurger", com o default ativo. 

Neste método transformaremos as informações digitadas em uma constante.

~~~vue
const infoParaBanco = {
    nome: this.nome,
    carne: this.carne,
    pao: this.pao, 
    opicionais: Array.from(this.opcionais),
    status: "Solicitado"
}
~~~

Transformaremos a constante criada em uma constante JSON. 

~~~vue
const dataJson = JSON.stringify( infoParaBanco);
~~~


E depois mandaremos esta constante para o servidor com o método "fetch" .

~~~vue
const req = await fetch("http://localhost:3000/burgers",{
    method: "POST",
    headers: { "Content-Type": "application/json" }, 
    body: dataJson
});
			
~~~

Com esta parte o nosso banco recebeu os dados, lembrando, nehum dado foi tratado para qualquer tipo de erro, foi apenas um recebimento e envio de dados. 

Após o envio dos dados a parte do FrontEnd deve ficar limpa para o recebimento dos próximos dados. 


- [x]  Aula 27 - Criando componentes de mensagens do sistema

Agora que conseguimos buscar e salvar os dados no backend, esta na hora de avisar ao usuário que as informações dele foram salvas ou não. 

Para isto iremos usar uma mensagem na tela, que será gerenciada pelo componente "Message.vue".

A frase da mensagem será apresentada conforme o "v-show", a informação da mensagem será criada no pai  e repassada para o filho apresentar através do 'props'. 

A mensagem apresentará o número do pedido, que vem do banco e é apresentado  a partir do 'res.id' desta forma ``` ${res.id} ```  ( dentro da frase ). Lembrando que a frase, por apresentar esta variável terá de ser apresentado com apostofes (`).

O componente "Message" pode ser reaproveitado em qualquer outro componente,  e a mensagem que ele apresentará , por usar 'props' também mudará conforme o componente pai que o chamar/usar.  

- [x]  Aula 28 - Criando a tela de pedidos ( Dashboard )

Agora vamos criar o Dashboard dos Hamburgers que já foram cadastrados.

Vamos criar o componente "Dashboard.vue" e importar ele dentro do componente Pai "Pedidos.vue";

Verificar se já há algum Ha,burguer cadastrado, e criar a tabela com as informações.

Criamos a parte do HTML com informações ficticias e passamos para o CSS.

- [x]  Aula 29 - Resgatando pedidos do banco

Agora buscando as informações do backend. 

A instancia "v-for" será definida dentro da div que contém a classe "burger-table-row". Ou seja, o for será chamado na apresentação de cada linha da tabela.

Será realizado um novo "v-for" dentro do "li" dos opcionais dos ingredientes, para todos os ingredientes serem apresentados. 

Nosso json foi criado com a gramática incorreta da palavra "opcionais" ficando "opicionais". 


- [x]  Aula 30 - Recebendo os status dos Pedidos

O novo método para pegar os 'status' dos pedidos será chamado dentro do método "getPedidos()".

Acrescentamos um 'v-for' para os 'option' do select da apresentação dos status.

Mas o 'v-for' nos deixará livre para selecionar os status existentes, iremos precisar que o sistema deixe o status de cada hamburger da forma que esta no cadastro do pedido, para que no futuro possa ser moodificado. Para isto iremos usar o  `:selected` (marcação do que já foi selecionado). 

~~~vue
  <option v-for="s in status" :key="s.id" value="s.tipo" :selected="burger.status == s.tipo" >{{ s.tipo }}</option>
~~~

Isto faz com que todos os hamburgers fiquem com o status de quando foram gerados. Exatamente como esta na tabela de "burgers" que é o solicitado nesta parte do projeto.

- [x]  Aula 31 - Removendo pedidos do sistema

Vamos adicionar a opção de deletar pedido.

No botão de deletar iremos adicionar o método "deleteBurguer" iniciado com o "id" desta item selecionado.

~~~vue
 <button class="delete-btn" @click="deleteBurger(burger.id)" >Cancelar</button>
~~~

E iremos criar este método. 

A chamada da requisição deste item será modificado, pois iremos passar para ela o "ID" que queremos e a ação, neste caso "DELETE", deletar esta id que será passado.


~~~vue
 const req = await fetch(`http://localhost:3000/burgers/${id}`, { method: "DELETE"});
~~~

Depois de deletado este pedido, solicitamos que a página recarregue os pedidos novamente,  ( getPedidos() ) para apresentar apenas os que não foram modificados. 


- [x]  Aula 32 - Atualização de Pedidos

Neste caso, será para a atualização do status do pedido. 

O método "PATCH" é semelhante ao método de update, sua diferença é que ele irá modificar apenas o campo selecionado e nada mais. 

Ao atualizar a página dos pedidos os dados se mantem.


- [x]  Aula 33 - Mensagens nas atualizações

Vamos reutilizar o componente "Message.vue" para  o componente "Dashboard", ela será usada em cada mundança de status do pedido. 


- [x]  Aula 34 - #Conclusão do Curso!


## Dúvidas

1. Como adicionar o bootstrap ou qualquer outra fonte de css 

	Colocar em um projeto em separado para testar

	https://www.devmedia.com.br/estilizando-uma-aplicacao-vue-js-com-bootstrap/42977
	
	
	[terminal]
		npm install bootstrap-vue bootstrap
		
		
		
		novo 
		npm install vue bootstrap bootstrap-vue

		
		
		npm i bootstrap@5.3.2

	
	
		https://www.youtube.com/watch?v=yrxG24n1oXI&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL&index=4
		
		
<details>

<summary>[]  Aula 12 - CSS Scoped e CSS Global</summary>

## teste para visualizacao 

* CSS pode ser ```Global``` ou  ```Scoped``` sendo que global, se define na página principal (app.js) e é aplicado a todos os elementos. e SCOPED é definido em cada elemento, cada elemento pode ser esttilizado, deixando mais fácil de personalizar os elementos;

 

</details>



Adicionar linhas de códigos marcando a linguagem 


~~~html
<div class="row"> 
	<div class="col-md-6 col-md-offset-3"> 
		<h1>Olá Mundo</h1> 
	</div> 
</div> 

<!-- Estas são linhas de codigo em HTML --> 

~~~


ou desta forma:

~~~php
echo ' olá mundo!';
//Esta é uma linha de código em PHP.
~~~


~~~javascript
var adicionar2 = function(numero) { 
	return numero + 2; 
} 
//esta é uma linha de codigo em javascript

~~~



~~~javascript


~~~

~~~vue
~~~





A empresa Amelia Terezinha Moura Boaventura de CNPJ 49.573.230/0001-39, fundada em 13/02/2023, está com a situação cadastral ATIVA na Receita Federal. Essa empresa é uma MATRIZ do tipo Empresário (Individual), de porte "MEI" que está localizada em Porto Alegre - RS. 





