# [Voltar](CSS.md)

# Estrutura do CSS
  * Anatomia:
    * Selector
    * Declaration
    * Properties
    * Property Value 
    ```
    Selector{
      property: property value;
    }
    ```

## Selector
  * Objeto usado para conectar o elemento HTML com o CSS

### Tipos de Seletores
  * Global Selector (*)
  * Element/Type Selector (h1, h2, div)
  * ID Selector (#box, #container, #id)
  * Class Selector (.red, .margem)
  * Attribute Selector, pseudo-class, pseudo-element, etc...

## Cascata
  * O browser segue a ordem de cima para baixo
  * Fatores de ordenação:
    * Origem do Estilo
    * Especificidade
    * Importância

### Origem do Estilo
  * Inline -> Tag style -> Tag link

### Especificidade
  * Cada tipo de seletor possui um valor diferente de importância 
    | Valor 	|                Tipo de Seletor               	|
    |:-----:	|:--------------------------------------------:	|
    |   0   	| Universal, combinator, negation pseudo-class 	|
    |   1   	|         Element type, pseudo-elements        	|
    |   10  	|               Class, attribute               	|
    |  100  	|                      ID                      	|
    |  1000 	|                    Inline                    	|

### Regra do (!Important)
  * Valor absoluto para o estilo
  * Ignora as regras de importância
  * Deve ser evitado quando possível