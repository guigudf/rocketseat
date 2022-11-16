# [Voltar](CSS.md)

# Box Model
  * Fundamental para criar layouts
  * Facilita a aplicação do CSS
  * Definição: Caixa retangular com propriedades de uma caixa 2D 
    - Tamanho (width x height)
    - Conteudo (content)
    - Bordas (border)
    - Preenchimento (padding)
    - Espaço fora da caixa (margin)

## Box Sizing
  * Responsável pelo cálculo do tamanho da caixa
    - content-box|border-box
  ```
  div{
    box-sizing: border-box;
  }
  ```

## Display-block-inline
  * Comportamento externo das caixas em relação as outras
  |                           **Block**                           	|                                  **Inline**                                 	|
  |:-------------------------------------------------------------:	|:---------------------------------------------------------------------------:	|
  | Ocupa toda a linha, colocando o proxímo elemento abaixo desse 	|                         Elemento um ao lado do outro                        	|
  |                Largura e Altura são respeitados               	|                     Largura e Altura podem ser alterados                    	|
  |         Padding, margin e border funcionam normalmente        	| Somente os valores horizontais do padding, margin e border são respeitados  	|

  * Por default **div** utiliza um display em block e **span** um display inline

## Margin
  * Espaços entre os elementos
  * Margin properties:
    - margin-top
    - maring-right
    - margin-bottom
    - margin-left
  * Margin values:
    - lenght
    - percentage
    - auto

  ```
  div{
    /* utiliza-se shorthand no sentido horário*/
    margin: margin-top maring-right margin-bottom margin-left;
    margin: margin-top margin-sides margin-bottom;
    margin: margin-top/bottom margin-sides;
    margin: margin-all;
  }
  ```

## Padding
  * Preenchimento interno da caixa
  * Semelhante ao margin
  * Padding properties:
    - padding-top
    - padding-right
    - padding-bottom
    - padding-left
  * Padding values
    - lenght
    - percentage
    - auto
  ```
  div{
    /* utiliza-se shorthand no sentido horário*/
    padding: padding-top padding-right padding-bottom padding-left;
    padding: padding-top padding-sides padding-bottom;
    padding: padding-top/bottom padding-sides;
    padding: padding-all;
  }
  ```



## Border & Outline
  * Representam as bordas da caixa
  * Border values:
    - border-style
    - border-width
    - border-color
  ```
  div{
    /* utiliza-se shorthand no sentido horário*/
    border: width style color;
  }
  ```
### Outline
  * Semelhante a border, mas não modifica o tamanho da caixa
  * Pode ter um formato não-retangular
  * Não permite ajustes individuais das bordas
  * Mais usado pelo user agent para acessibilidade
