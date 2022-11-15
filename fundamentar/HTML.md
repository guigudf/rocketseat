# HTML(hypertext markup language)
- Não é uma linguagem de programação, é uma linguagem com links embutidos
- Comentários em hypertext:
```
<!--
(estrutura de comentários em hypertext)
-->
```

# Tags

## Tags são usadas elementos usado para informar ao navegador a estrutura do site.
* Sempre dentro dos sinais de chevron <>;
* Tags com abertura e fechamento possuem a seguinte estrutura: <tag> Hypertext </tag>;
* Tags que não precisam de abertura possuem como estrutura apenas: <tag/>.
	

## Atributos:

- Os atributos são usados para personalizar as tags, modificando sua estrutura ou funcionalidade. Igualmente, os atributos são utilizados para atribuir uma classe ou id a um elemento.

- A maioria das tags tem seus próprios atributos. Contudo, existem alguns atributos genéricos que podem ser utilizados na maioria das tags HTML:
``` 
class=”…“ – Atribui uma classe ao elemento (uma classe pode ser utilizada para um ou mais elementos);
id=”…“ – Atribui um id ao elemento (um id deve ser único, ou seja atribuído a um único elemento);
style=”…” – Permite incluir elementos CSS (estilos) dentro da tag;
lang=”…” – Define o idioma principal do elemento;
title=”…” – Define o título do elemento;
alt=”…” – Define um texto alternativo e, por isso, é muito utilizado em imagens, auxilia nas práticas de SEO;
hidden – Oculta o elemento;
align=”…” – Permite definir o padrão de alinhamento desse elemento, como por exemplo: right, center, left e justify;
width=”…” – Define uma largura para o elemento;
height=”…” – Define uma altura para o elemento.
```

## Tags básicas da estrutura de um html
``` 
<!DOCTYPE html> – A tag !DOCTYPE informa ao navegador a versão do HTML que está sendo utilizada no documento. 
<html>  – Esta tag é o elemento básico da estrutura do HTML. Assim sendo, ela conterá todos os elementos do  documento. Todo documento HTML deve iniciar e finalizar com essa tag;
<head></head> – Essa tag delimita o cabeçalho do documento. Não possui nenhum valor visível, porém é capaz de transmitir ao navegador diversas informações muito úteis e essenciais a uma boa apresentação do documento HTML;
<title></title> – Essa tag define o título da sua página, o nome que aparecerá na aba, janela ou guia.
<meta/> – Essa tag permite inserir metadados ao documento, como por exemplo a tag <meta charset="utf-8"/>, que garante a compatibilidade do código com os caracteres de padrão latino americano;
<body></body> – Finalmente, a tag que representa o corpo do documento. Em síntese, é nessa tag que todos os elementos visíveis do site devem ser inseridos.
``` 

## Tags HTML de título
``` 
<h1></h1> - Título de maior valor hierárquico
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6> - Título de menor valor hierárquico
``` 

## Tags HTML de texto
```     
<p></p> – Principal tag de texto, compõe um parágrafo;
<span></span> – Funcionalidade e características parecidas com os parágrafos, porém são utilizadas apenas para pequenas informações;
<pre></pre> – Tag utilizada para representar texto pré-formatado. Muito utilizada para inserir códigos;
<b></b> – Transforma o conteúdo em negrito;
<i></i> – Transforma o conteúdo em itálico;
<br/> – Essa tag não necessita de fechamento, ela executa a função de quebra de linha.
<hr/> – Essa tag não necessita de fechamento, ela forma uma linha horizontal.
``` 

## Tags HTML estruturais
``` 
<header></header> – Essas tags definem um cabeçalho. Portanto, todo conteúdo que estiver dentro dela faz parte de um cabeçalho, podendo ser utilizado dentro de outras sessões. Não confundir com as tags <head>;
<main></main> – Essas tags representam o conteúdo principal do corpo, ou seja, o conteúdo relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação;
<footer></footer> – Essas tags definem um rodapé para a página, geralmente utilizadas no final da página;
<section></section> – Essas tags definem uma sessão para uma página;
<article></article> – Essas tags definem um artigo da página. Nesse sentido, são utilizadas para separar o conteúdo da sua página. Muito utilizado principalmente por blogs ou páginas de conteúdo;
<aside></aside> – Essas tags representam uma seção de uma página cujo conteúdo é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo;
<nav></nav> – Essa tag define um conteúdo de navegação. Portanto, é muito utilizado em conjunto com listas e na criação de menus;
<div></div> – Define uma divisão da página. Desta forma, funciona como um container para conteúdo de fluxo. Uma vez que não possui um valor semântico, é muito utilizado para organizar melhor o conteúdo. 
``` 

## Tag de link HTML

  * A tag de link HTML é responsável por fazer a ligação entre um documento e outro, sendo ele da mesma página ou de uma página de outro domínio.
  * Para realizar um link, podemos chamar as tags <a></a> com o atributo href. Por exemplo, caso você queira criar um link no seu texto que redirecione à página inicial do google escreva:

    ```<p>Para acessar o Google, <a href="https://www.google.com">clique aqui.</a></p>```
    <p>Para acessar o Google, <a href="https://www.google.com">clique aqui.
  
## Tags HTML de multimídia
  
  * Img
    - Essa tag não necessita de fechamento, serve para incluir uma imagem ao seu texto. A partir dessa tag, utilizamos o atributo src=”” onde deve ser digitado o local em que a imagem se encontra. Também é muito utilizado em conjunto com o atributo alt para definir o texto alternativo da imagem.
    
    - Por exemplo: 
      ``<img src="imagens/imagem1.jpg" alt="imagem 1 da minha página">``
  
  * Video e Audio
    - Essa tag serve para indicar a inserção de um vídeo. Com isso, devemos colocar alguns atributos dentro da tag para poder ativar o controle, a principal dela é o controls. Posteriormente, incluímos a tag <source> com os atributos src e type, onde receberão o local em que está o vídeo e o tipo do vídeo. 
    - É recomendado utilizar mais de um tipo de source do mesmo vídeo, para garantir maior possibilidade de compatibilidade com o navegador. Finalmente, podemos incluir uma mensagem que será renderizada apenas se o navegador do usuário não suportar a tag video.
    - Por exemplo: 

    ```
      <video controls>
        <source src="video.mp4" type="video/mp4">
        <source src="video.ogg" type="video/ogg">
         Seu navegador não possui suporte para Vídeos.
      </video> 
    ```
    
    - A tag Audio funciona da mesma forma que a tag Video, portanto, utilizamos a tag Source dentro dela. Vejamos o exemplo a seguir:

    ```
      <audio controls>
        <source src="musica.ogg" type="audio/ogg"><br/>
        <source src="musica.mp3" type="audio/mpeg"><br/>
        Seu navegador não possui suporte para áudio.
      </audio>
    ```
  
  * Iframe
    - Os iframes são muito utilizados na atualidade, servem para incluir recursos de uma outra página nesta página. Vale a pena conferir o exemplo da W3C Schools, pagina de tutorias pertencente ao grupo W3C, a organização atualmente responsável pelos padrões da web.
    
    - Portanto, para inserir um iframe, basta utilizar a tag com o atributo src. Além disso, é possível incluir um texto dentro do elemento, caso o navegador do usuário não possua suporte para tal. Vejamos então o exemplo abaixo:

    ```
      <iframe src="https://www.homehost.com.br"> <br/>
        <p>Seu navegador não possui suporte para iFrames.</p>
      </iframe>
    ```