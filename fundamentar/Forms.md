<!--
https://app.skule.com.br
-->

# Formulários
  * Função:
    - Capturar dados de entrada
    - Interação do usuário com a aplicação
    - Controle de dados
  
## Estrutura
### Form
  * Elemento que define o formulário
  * Conteiner semelhante a section ou footer
  * Atributos:
    - action 
    - method
  * Estrutura:
    ```
    <form action="" method="POST"/"GET">
      
    </form>
    ```

### Fieldset
  * Agrupamento de campos que tenham o mesmo propósito
  * Usado para deixar o html mais semântico e acessivel
  * Atributos:
    - disable: desabilita todos os elementos internos e não envia os dados ao submeter o formulário
    - form: ID do formulário a qual o fieldset pertence
    - name: nome do grupo

### Label
  * Associa e identifica 1 ou mais tag de entrada de dados
  * Pode ser usado para mudar o foco dos inputs
  * Atributos:
    - for: 
      - conexão entre o label e a tag de input
      - feito via id
      - apenas funciona com elementos específicos (button, input, meter, output, progress, select)

### Button
  * Representa um elemento clicável na página
  * Usado para enviar formulários
  * Estilizado pelo user agent
  * Atributos comuns:
    - type (submit, reset, button)
    - autofocus
    - disabled
    - name 
    - value
    - form

### Datalist
  * Oferece ao usuário uma lista de valores a uma tag 'input'
  * Escolha opcional (não confundir com select que é obrigatório selecionar uma opção)
  * Estilização feita pelo browser
  * Estrutura:
    ``` 
    <datalist id="">
      <option>  </option>
    </datalist>
    ```