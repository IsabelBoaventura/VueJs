# VueJs


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

	
	
### Projeto Criado

Com o projeto criado, podemos ver que já tem algumas diferenças. 

Por exemplo: 


o arquivo principal do video é **main.js** e o meu é **main.ts**;

Indicação de que o video irá usar js ( javascript) e eu ( posso usar, não quer dizer que irei usar )Typescript;
	
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

	
- [ ]  Aula 02 - Como Instalar o Vue
- [ ]  Aula 03 - Inputs e Data Binding
- [ ]  Aula 04 - Utilizando o Vue CLI
- [ ]  Aula 05 - Criando Componentes
- [ ]  Aula 06 - Dados em Componentes (data)
- [ ]  Aula 07 - Entendendo os Lifecycle Hooks ( ciclo de vida )
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


## Aula 05
### Componentes
* Layout dividido em partes;
* cada componente com suas responsabilidades;
* Cada componente com o seu css e seus dados; 

Para reiniciar o projeto, iremos limpar todo o conteudo do App.vue e do src -> components -> HelloWorld.vue ;

App.vue é a página inicial do código, será nele que teremos o que será exibido na aplicação; 

Este arquivo só irá funcionar, depois que contarmos para a aplicacao que este template é o principal da aplicação, fazemos isto chamadno o script e anunciando: 

<code> <script>
		export default {
		   name: 'App'
		}
	</script> </code>

	

Entretanto na minha aplicação ainda há erros,  na aula não. 

Alguns ajustes no meu codigo para dar certo. 

<img src="/imgs/primeiraPagina.jpg" />

E funcionou!!!!

-> App.vue

Vamos importar o componente criado para dentro do app ( components/PrimeiroComponente.vue ), isto se faz dentro do script; 

Importação não significa uso, importamos,  mas agora temos de definir, que iremos usar. 

Assim no export, depois do nome da página (name: 'App') iremos acrescentar o componentes. 

Acrescentamos o componente, agora ele esta pronto para ser usado; 

<img src="/imgs/primeiraPaginaVue.jpg" />



 
 
## Próxima

	
	
		https://www.youtube.com/watch?v=yrxG24n1oXI&list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL&index=4


