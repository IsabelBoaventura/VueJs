# VueJs

Projeto em Vue.js um site de solicitação de lanche. 

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

Para trabalhar com as comandos de linha de texto no VS Code, troque o terminal de 'powershell' para 'bash'. 





## Funções 

 * Data binding: replicação do que o usuário esta escrevendo em tempo real. Na mesma tela onde esta o input do campo onde esta sendo escrita a informação, haverá a apresentação deste input. Usando o "v-model" do campo .
 
## Projeto

### Criando um projeto com vue/cli

Dentro do repositório  , pelo terminal, linha de comando de como criar o projeto :

 <code>	vue create 2_projeto_vue </code>
 
(Quando eu estava refazendo o vue, estes comandos não funcionaram no terminal do  VS Code, mas funcionaram no terminal do cmd. )
	
#### Selecionar Manualmente
   
Marque:

- [x] Choose Vue version
- [x] Babel
- [x] Router
  
   
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

<code> npm run serve  </code>

	
	
Isto irá fazer o sistema rodar, localhost, na porta 8080. 

<img src="/imgs/pagina_inicial.jpg" />

Quando fechar o sistema, e / ou precisar reiniciar novamente,  basta clicar no comando de executar: 

<code> npm run serve  </code>

	
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

<code><script>
	export default {
		name: 'App'
	}
</script> 
</code>

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

<code>
	<style scoped>
		ul{ ... }
	</style>
</code>

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
Este atributo será uma array, portanto será apresentado assim: 

	<code>
		backend_technologies: ["", "", "", ... ]
	</code>
	
Caso seja usada na chamada do UL o atributo do ``v-for`` , todos os elementos serão apresentados em um UL diferente, portanto se tiver 5 ou 50 elementos, cada um deles será de uma lista. 

Assim o recomentado é que a chamada seja realizada no elemento que irá se repetir, neste caso  o `LI`;

	<code>
		<ul >
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index" > {{ technology }}</li>
        </ul>
	</code>
	
Isto é para casos onde trabalhamos com arrays. Mas podemos também trabalhar com objetos.

Os objetos são recebidos assim:

	<code>
		frontend_technologies: [
			{id:1, language: "HTML"}, 
			{id:2, language: "CSS"}, 
			{id:3, language: "Vue.js"},  ... ]
	</code>
	
Na apresentação das informações será semelhante, apenas não precisando mais adicionar um indice para o objeto, pois ele já tem ( id ). 

Evitando apresentar erro em tela,  pois a apresentação de arrays e Objetos exige um índice, que deve ser apresentado  com o **v-bind** key;

<code>
		<ul >
            <li v-for="technology in frontend_technologies" :key="technology.id" > {{ technology.language}}</li>
        </ul>
</code>

- [x]  Aula 14 - Eventos ( _@submit e _@click)

* Eventos são utilizados para complementar ações dos usuários com ativações de Métodos. (Chamadas de funções no javascript);
* No Vue para apresentar um evento usamos o "@", por exemplo: **@click**;
* Serão adicionados diretamente a elementos do HTML;
* O Evento recebe um "parâmetro" que é o método que será executado; 

No nosso exemplo já foi usado na parte de mostrar e esconder o E-mail do Usuário;

Envios de formulários são onde mais comumente usamos estes eventos. ( Form.vue)

	```	<form action="" @submit="enviarFormulario"> ```
	

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







- [ ]  Aula 17 - Utilizando props

* Passar dados com `props` propriedades;
* Os componentes do Vue podem receber dados, e este recurso é chamado de ```props```;
* As props podem ser passadas por valores do data, como também podemos inserir diretamente eles;
* Precisa ser declarada as propriedades recebidas pelos componentes em uma array ou objeto chamado props;

Passar dados de um componente para o outro;
**PROPS**  ação de passar dados de um componente pai para um componente filho;

Neste exemplo iremos utilizar os componentes "info" e "Pessoa".
No componente "Pessoa" estamos chamando o componente "Info", agora iremos além de chamar passar dados para ele. 

Onde antes declaravamos para apresentar o "Info" apenas assim: <code> ```<Info />``` </code> agora iremos acrescentar o atributo "email", passando a ficar assim: 
<code> <Info email="email@teste.com" /> </code>









- [ ]  Aula 18 - Emit
- [ ]  Aula 19 - Criando o projeto do curso
- [ ]  Aula 20 - Criando uma API com JSON server
- [ ]  Aula 21 - Implementando o Vue Router
- [ ]  Aula 22 - Finalizando cabeçalho e rodapé do projeto
- [ ]  Aula 23 - Criando Banner da aplicação
- [ ]  Aula 24 - Criando Formulário de cadastro
- [ ]  Aula 25 - Resgatando dados do banco e inserindo no formulário
- [ ]  Aula 26 - Inserindo dados no banco
- [ ]  Aula 27 - Criando componentes de mensagens do sistema
- [ ]  Aula 28 - Criando a tela de pedidos ( Dashboard )
- [ ]  Aula 29 - Resgatando pedidos do banco
- [ ]  Aula 30 - Recebendo os status dos Pedidos
- [ ]  Aula 31 - Removendo pedidos do sistema
- [ ]  Aula 32 - Atualização de Pedidos
- [ ]  Aula 33 - Mensagens nas atualizações
- [ ]  Aula 34 - #Conclusão do Curso!





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


