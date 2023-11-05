# VueJs

Projeto de **FrondEnd** em Vue.js um site de solicitação de lanche. 

Este projeto tem como objetivo uma introdução ao framework vuejs para depois poder ser trabalhado com o Laravel com vue. 

Este conteudo ficará dividido em dois projetos: **2_projeto_vue** e **make_your_burger**;

No projeto "2_projeto_vue" haverá exemplos de como usar algumas funções  e elementos do vuejs será da aula inicial até a aula 18;

No projeto "make_your_burger" será o projeto apresentado da aula 18 em diante.

##  :walking: Caminho

> Tutorial: https://www.youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL
		
> Vuejs: https://vuejs.org/guide/quick-start.html#using-vue-from-cdn
	
> CDN: <code><script src="https://unpkg.com/vue@3/dist/vue.global.js"> </script></code>

## :wrench: Instalar o VueJs via CLI

> Documentação:
	https://br.vuejs.org/v2/guide/installation#NPM
	
> Comando: <code>npm install -g @vue/cli</code> ( Não funcionou);

> Na documentação do vue: <code>npm install vue</code> ( funcionou );
	
Caso a versão que esta instalada no pc agora, não for a mais recente, pode fazer a atualização do Vue. 

> Atualizar o Vue.js: <code> vue upgrade --next </code>
	
	
	
	
	
## :cd: Programas

* node: v18.16.0
* npm: 9.6.6
* vue: vue/cli 5.0.8
* Vetur (extensão do vscode );
 

## 📚 Arquivos

## Dicas

* Para trabalhar com os comandos de linha de texto no VS Code, troque o terminal de 'powershell' para 'bash'.
* Estou preferindo usar o cmd, esta mais prático e rápido. 
* Na linha de comando, para marcar e desmarcar, selecione o espaço do teclado;
* Para verificar a versão do vue.js: vue -V;
* Para criar novo projeto: vue create . 
 


## Projeto

### Criando um projeto com vue/cli

Dentro do repositório, pelo terminal, linha de comando de como criar o projeto :

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

## Estrutura do Projeto

O projeto principal ficou com a estrutura principal mais ou menos assim:

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

   

## :chart_with_upwards_trend: Estrutura e Conteúdo das Aulas

- [x]  Aula 01 - Introdução	
- [x]  Aula 02 - Como Instalar o Vue
- [x]  Aula 03 - Inputs e Data Binding
- [x]  Aula 04 - Utilizando o Vue CLI
- [x]  Aula 05 - **Criando Componentes**
- [x]  Aula 06 - **Dados em Componentes (data)**
- [x]  Aula 07 - **Entendendo os Life Cycle Hooks ( ciclo de vida )**
- [x]  Aula 08 - **Hierarquia de Componentes**
- [x]  Aula 09 - **Diretivas**
- [x]  Aula 10 - Atributos Dinâmicos
- [x]  Aula 11 - Métodos
- [x]  Aula 12 - CSS Scoped e CSS Global
- [x]  Aula 13 - Renderização de listas ( v-for)
- [x]  Aula 14 - Eventos ( _@submit e _@click)
- [x]  Aula 15 - Múltiplos Eventos
- [x]  Aula 16 - Reutilização de Componentes
- [X]  Aula 17 - Utilizando props
- [x]  Aula 18 - Emit
- [x]  Aula 19 - Criando o projeto do curso
- [x]  Aula 20 - Criando uma API com JSON server
- [x]  Aula 21 - Implementando o Vue Router
- [x]  Aula 22 - Finalizando cabeçalho e rodapé do projeto
- [x]  Aula 23 - Criando Banner da aplicação
- [x]  Aula 24 - Criando Formulário de cadastro
- [x]  Aula 25 - Resgatando dados do banco e inserindo no formulário
- [x]  Aula 26 - Inserindo dados no banco
- [x]  Aula 27 - Criando componentes de mensagens do sistema
- [x]  Aula 28 - Criando a tela de pedidos ( Dashboard )
- [x]  Aula 29 - Resgatando pedidos do banco
- [x]  Aula 30 - Recebendo os status dos Pedidos
- [x]  Aula 31 - Removendo pedidos do sistema
- [x]  Aula 32 - Atualização de Pedidos
- [x]  Aula 33 - Mensagens nas atualizações
- [x]  Aula 34 - Conclusão do Curso!

Para melhor visualizar e compreender a teoria e o processo de trabalho com o Vue.js, os videos tiveram dois projetos. 
Por isto separei também a documentação em duas partes **README.md** (este arquivo) onde consta a estrutura principal do projeto e algumas informações essenciais. 
E o arquivo **Detalhes.md**, neste arquivo há mais detalhes referente ao projeto e cada passo dado no mesmo.

## 🎉 Finalizando

Finalizando o projeto, concluimos com um backend a criação de pedidos de Hamburgers personalidados por pessoa. Criamos, alteramos e excluimos estes pedidos. 

![image](https://github.com/IsabelBoaventura/VueJs/assets/1613816/739252fc-9121-4091-a4a4-41f50102fbdb)




