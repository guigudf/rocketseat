<!--
https://app.skule.com.br
-->
# [Voltar](../CSS.md)

# Cores
  * Usamos o CSS para alterar e manipular as cores no documento html

## Tipos
  * Background-color (para caixas)
  * Border-color (para caixas)
  * Color (para textos)
  * Outros

## Valores
  * Podem ser definidos por
    - keyword (blue, transparent)
    - hexadecimal (#ff0000)
    - funções (rgb, rgba, hsl, hsla)

    ```
    element{
      color: red;
      color: #ff0000;
      color: rgb(34, 12, 64, 0.6) => rgb(255, 0, 0, opacidade(%))
      color: hsl(180, 100%, 50%) => hsl(ângulo(360°), saturação(%), luz(%))
    }
    ```

# Background
  * Responsável por definir um fundo para o elemento
  * Atua sobre toda a caixa
  * Por default é transparente

## Shorthand
  * Estrutura: 
    ```
    main{
      background: color image repeat position / size origin clip attachment;
    }
    ```

