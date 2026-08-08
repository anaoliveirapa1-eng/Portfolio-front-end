# comandos Git
## Adicionar usúario 
### h3
###### h6

 Para adicionar o seu usúario do Github ao VS Code, utilize os comandos a baixo:  
 *Para verificar credenciais ativas*
 ```git config --global --list```
*Para adicional usuario*
```git config --global usar,name "seu nome_de_usuario_github"```
*Para add o email*
```git config --global usar,name "seu nome_de_usuario_github"```

## Trabalhando com repositório
para inicar o repositório local:
```git init```
Para trocar o nome da branch:
```git branch -M main```
Para exibir status:
```git status```
Para utilizar `main`como nome padrão da branch principal para novos repositórios:
```git config ---global int.defaultBranch main```
Para limpar o repositório:
```clear```
Para add os arquivos do projeto ao rep. local:
```git add .```
Adicionando o repositório iniciais:
```git commit -m "arquivos iniciais"```
Adicinando o repositório remoto:
```git remote add origin endereço_do-repositorio"```
```git remote add ```

Para enviar os arquivos para o repositório remoto:
```git plus origin main```
onde *main é o nome da branch onde estamos trabalhando.

### corrigindo erros 
#### Tamanho do buffer de transferência
Aumentar o tamanho do buffer para 500MB(global):
```git config --global http.postBuffer 524288000```

Aumentar o tamanho do buffer para 500MB(Apenas local):
```git config http.postBuffer 524288000```
Verificar o tamnho do Buffer atual:
```git config ---get http.postBuffer```
Reset para configuração padrão
```git config --global --unset http.postBuffer```
Rest completo do repositório local
```rm -rf .git```
Quando oprecisar atualizar o repositório:
```git add .```
```git commit -m 'anotação da commit```
```git push origin main```
