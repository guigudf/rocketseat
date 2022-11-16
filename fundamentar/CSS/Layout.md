# [Voltar](../CSS.md)

# Layout
  * Ferramentas de layout:
    - tables
    - floats
    - frameworks e grid system
    - flexbox
    - grid

## Posicionamentos
  * Controle da localização do elemento na página além do fluxo normal
  * Fluxo normal dos elementos:
    - block: um abaixo do outro
    - inline: um do lado do outro
  * Tipos de posicionamento:
    - name: position
    - value: static|relative|absolute|fixed

### Relative
  * Propriedades:
    - top
    - right
    - bottom
    - left
    - z-index

### Absolute
  * Cada elemento entra em uma nova 'camada'
  * Propriedades:
    - top
    - right
    - bottom
    - left
    - z-index

### Fixed
  * O elemento fica fixo na página
  * Propriedades:
    - top
    - right
    - bottom
    - left
    - z-index

### Element Stacking
  * Utiliza a propriedade z-index para controle de posicionamento
  * z-index indica a camada do elemento

## Flexbox
  * Permite posicionar os elementos dentro da caixa
  * Controle em um dimensão (horizontal ou vertical)
  * Estrutura:
    ```
    div.parent{
      display: flex;
    }
    ```

## Grid
  * Permite posicionar os elementos dentro da caixa
  * Controle das duas dimensões simultaneamente
  * Posicionamento flexível ou fixo
  * Cria espaços para os elementos filhos habitarem
   