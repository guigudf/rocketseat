<!--
https://app.skule.com.br
-->
# [Voltar](../CSS.md)

# Audio
  * Elementos:
    - src
    - controls 
    - tags (width, height, autoplay, preload, muted, loop, poster)
    - fallback
    - source (src type)

  * Estrutura:
    ```
      <audio src="./audio.mp3" controls>
      <source src="./audio.mp4" type="audio/mp3" >
    ```

# Video
  * Elementos:
    - src
    - controls 
    - tags (width, height, autoplay, preload, muted, loop, poster)
    - fallback
    - source (src type)

  * Estrutura:
    ```
      <video src="./video.mp4" controls>
      <source src="./video.mp4" type="video/mp4" >
    ```

# Iframe
  * Elemento que traz conteúdo externo
  * Atributos:
    - src
    - height
    - width
    - title
    - allowfullscreen
    - frameborder
  * Estrutura:
    ```
      <iframe
        width="720"
        height="560"
        title="video"
        src="https://www.youtube.com/embed/Aqfs0F45"
        frameborder="0"
        allow="autoplay; gyroscope; tags"
      >
    ```