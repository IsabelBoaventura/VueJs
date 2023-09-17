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


- [x]  Aula 05 - Criando Componentes

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


- [x]  Aula 06 - Dados em Componentes (data)

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


- [x]  Aula 07 - Entendendo os Life Cycle Hooks ( ciclo de vida )

* Os Life Cycle Hooks são eventos que podem ser ativados em determinadas partes da execução do programa;
* Executa o Código no momento que o componente é criado;
* Podendo alterar a aplicação em diversas etapas diferentes; 
* Exemplo: `created()`,  `mounted()` 

Criando um novo componente:

- :open_file_folder: src
	- :open_file_folder: components
		- :pincel: LifeCycle.vue
		

Criaremos o componente, com as informações básicas para teste, e depois importaremos na aplicação, e adicionaremos na área básica dos componentes. 

Quando criamos o componente 'LifeCicle' dissemos para ele que o seu nome era "Ainda não sei", quando este componente foi criado, e a ação "created" foi executada, trocamos o nome dele para "Isabel". Quando o componente for montado "mounted", apresentado na tela, teremos um terceiro nome. 

Apenas trocando o nome,  parece sem propósito, mas assim que tiver em produção e cada momento dele estiver recebendo um valor e uma ação que deve ser realizado, neste momento veremos a agilidade do componente. 

Ou seja: Eventos acontecendo em determinada etapa da aplicação.  

Uma das etapas mais usada é no carregamentos das informações do banco.

Neste componente 








- [ ]  Aula 08 - Hierarquia de Componentes
- [ ]  Aula 09 - Conhecendo as diretivas ( v-if, v-show, v-for )
- [ ]  Aula 10 - Atributos Dinâmicos
- [ ]  Aula 11 - Métodos
- [ ]  Aula 12 - CSS Scoped e CSS Global
- [ ]  Aula 13 - Renderização de listas ( v-for)
- [ ]  Aula 14 - Eventos ( _@submit e _@click)
- [ ]  Aula 15 - Múltiplos Eventos
- [ ]  Aula 16 - Reutilização de Componentes
- [ ]  Aula 17 - Utilizando props
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


## Próxima

	
	
		https://www.youtube.com/watch?v=yrxG24n1oXI&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL&index=4


