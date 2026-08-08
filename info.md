# formularios
Sào utulizados para envio de informações

## Atributos

*action*: Informa qual arquivo será responsável pelo processamento do formulário -  apenas funciona em back-end.
`Exemplo:`: Envio de e-mail, cadastro de usuário etc.
*method*: Método de envio dos dados do formulário:

`get`: Envia os dados pela url.
Ex: https://meusite.com.br/pagina.html?nome=Ana&dobrenome=silva
?: indica inicio do parâmetro enviado.
nome= é o nome do parâmetro.
&: indica que existe mais de um parâmetro.
Ana: é o valor passado no parâmetro.
*pontos negativos do GET*: Expõe o conteúdo enviado.
*Pontos positivos: É possivél compartilhar link já com os parâmetros, funciona no front-end.

`post`: Envia dados de forma encapsulada pelo navegador,não expõe os dados na URL, carrega as informações na requisi,cão HTTP.
*Pontos negativos: Não pode sser compartilhado ou acessar pelo frint-end.
*Pontos posotivos*: Aumenta a segurança no envio de formulário para tratamento pelo back-end.
