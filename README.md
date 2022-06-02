# Boas vindas ao repositório do projeto Teste Diwe!

![Diwe](diwe.jpeg)

## Descrição do projeto

O desafio consistiu na criação de uma aplicação web para gerenciamento de uma lista de contatos. Nesta aplicação eu deveria pegar os dados de uma API onde eu poderia visualizar os dados dos contatos, selecionar um contato, criar contato, editar contato e deletar contato.
O layout tem como foco aplicações web e dispositivos móveis.

---

## Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projeto-humberto
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projeto-humberto
  git clone git@github.com:Humberto-Bonadiman/teste-diwe.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd teste-diwe
  npm install
```

4. Por último, rode o comando **npm start** e acesse o projeto via browser, no caminho `http://localhost:3000/`.
```javascript
  npm start
```

---

## Referências

- [API](https://contacts-api.prd.parceirodaconstrucao.com.br/)
- [Figma](https://www.figma.com/file/MlDF7BP1BgodRv0BO4EQ4C/Desafio)
- [Ícones](https://feathericons.com/)
- [Tipografia - Montserrat](https://fonts.google.com/specimen/Montserrat?query=mont)

---

## Login

### Para fazer login utilize o email e senha disponibilizados abaixo
```javascript
  "email": "user@diwe.com.br",
  "password": "Mob20we23##"
```

## Requisitos do projeto

## Login

### 1 - Adicionar os textos descritos abaixo na página de login para mobile
```javascript
Bem-vindo! É hora de começar  uma nova experiência
```

```javascript
Para ter acesso a todas as funcionalidades que podemos oferecer, faça login ou crie uma nova conta.
```
### 2 - Adicionar a imagem mostrada abaixo

Obs.: Ela deve ficar acima do texto do requisito 1
![Secure_login-amico_1](src/images/Login.png)

### 3 - Adicionar botão que direciona para a página de verificação de dados do login com texto **Começar**

### 4 - Adicionar os textos descritos abaixo na verificação de dados do login
```javascript
Bem-vindo(a)!
```

```javascript
Faça login para acessar nossa plataforma
```
### 5 - Crie dois inputs, um para o email, onde deverá ser adicionado um email válido, e um para a senha

### 6 - Adicione um botão com texto **Entrar** que irá verficar na API se os dados digitados nos inputs são válidos. Caso algum dos dados não saja válido, retornar uma mensagem de erro.

### 7 - Criar a aplicação web da página de login com a imagem do requisito 2, os textos do requisito 4, os inputs do requisito 5 e o botão do requisito 6 (obs.: neste botão o texto é **Fazer Login**.

### 8 - Realizar testes para a página de login

---

## Listagem dos contatos

### 9 - Criar um header fixo que indique a página que a pessoa se encontra e com link contendo a opção para voltar a página anterior

### 10 - Adicionar um botão para cadastrar usuário com o texto **Cadastrar Contato**

### 11 - Ao clicar no botão de cadastrar contato, encaminhar o usuário para a página de cadastrar contato

### 12 - Adicionar um span onde é possível ver o total de pessoas cadastradas com o texto **Total: x usuários**, onde x é o número de usuários.

### 13 - Adicionar um link com o texto **Ver todos** onde é possível visualizar todos os contatos.

### 14 - Criar um card que mostre as informações do usuário (nome, email, número de telefone), e que tenha dois botões um com o texto **Editar** e outro com o ícone de uma lixeira.

### 15 - Ao clicar no botão de Editar, encaminhe o usuário para a página de atualizar contato.

### 16 - Ao clicar no botão com ícone de uma lixeira, mostrar um alerta perguntando se o usuário quer realmente apagar o contato.

## Aplicação Web

### 17 - Ao invés de mostrar a página que a pessoa se encontra, mostrar um texto escrito **voltar**

### 18 - Adicionar um h2 com o texto **Listagem de contatos**

### 19 - O botão do requisito 10 agora deve conter o texto **Adicionar novo contato**

### 20 - Criar uma tabela com **#** onde estarão os ids, **Nome** com os nomes dos contatos, **Celular** com os números dos contatos, **Email** com o email dos contatos e **Ações** onde é possível editar e deletar os contatos.
Obs.: nos botões de Editar e Excluir, estes devem ter os icones ao seu lado conforme o figma

### 21 - Realizar testes para a página de listagem dos contatos

---

## Cadastrar contatos

### 22 - Adicionar header com o texto **Cadastrar um novo contato** e com botão para voltar

### 23 - Adicionar um paragraph com texto **Preencha as informações para cadastrar um novo contato**

### 24 - Criar os inputs com para adicionar nome, email e celular

### 25 - Criar um botão com o texto **Cadastrar contato**

### 26 - Ao clicar no botão, adicionar o contato ao banco de dados e voltar para a página de listagem de contatos

### 27 - Ao criar um contato mostrar um ícone de Check e o texto **Contato cadastrado com sucesso!** no lugar do header por 5 segundos na página de listagem de contatos

### 28 - Realizar os testes para a página de cadastrar contatos

---

## Atualizar contatos

### 29 - Adicionar header com o texto **Atualizar contato** e com botão para voltar

### 30 - Adicionar um paragraph com o texto **Faça as alterções necessárias e ao terminar salve seu contato**

### 31 - Criar os inputs com para alterar o Nome Completo, Email e Celular
Obs.: Os inputs já devem estar preenchidos com os dados do contato selecionado

### 32 - Criar um botão com o texto **Salvar alterações**

### 33 - Ao atualizar um contato mostrar um ícone de Check e o texto **Contato atualizado com sucesso!** no lugar do header por 5 segundos na página de listagem de contatos

### 34 - Realizar os testes para a página de atualizar contatos

## Deletar contatos

### 35 - Após clicar no ícone com a lixeira, deve aparecer um alerta

### 36 - O alerta deve conter dois textos, no primeiro deve conter **Tem certeza que deseja excluir este contato?**, e no segundo deve conter **Após excluir, não será possivel recuperar o contato.**

### 37 - Criar dois botões dentro do alerta onde um exclui os dados do contato e retorna para a página de listagem de contatos, e o outro em que retorna para a página de listagem de contatos

### 38 - Realizar os testes para de deleção de contatos
