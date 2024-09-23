# Project AMA

Este projeto é uma aplicação de mensagens em tempo real que permite a criação de salas de discussão, envio de mensagens, reações e atualizações em tempo real via WebSocket. O projeto é dividido em duas partes: **Backend** (API) e **Frontend** (React SPA).

## Índice

- [Recursos](#recursos)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
- [WebSockets](#websockets)
- [Tecnologias](#tecnologias)

## Recursos

- **Criação de Salas:** Criação e gerenciamento de salas de discussão.
- **Mensagens em Tempo Real:** Envio e recebimento de mensagens em tempo real.
- **Reações a Mensagens:** Reagir e remover reações de mensagens.
- **Marcar como Respondida:** Mensagens podem ser marcadas como respondidas.
- **Frontend em React:** SPA (Single Page Application) construída com React, utilizando React Router e React Query para gerenciamento de estado e cache de dados.
- **Tailwind CSS:** Estilização do frontend com utilitários CSS.
- **Backend com Go:** API desenvolvida em Go com comunicação via WebSocket.

## Requisitos

- **Node.js:** Versão 18 ou superior
- **Golang:** Versão 1.22.5 ou superior
- **PostgreSQL:** Banco de dados relacional para armazenamento de dados de salas e mensagens

## Instalação

### Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/kennedysferreira/projectAMA
   cd projectAMA/backend
2. Instale as dependências Go:

   ```bash
   go mod download

3. Execute o backend:
   
    ```bash
   go run main.go

### Frontend

1. Navegue até a pasta web:

   ```bash
   cd ../web

2. Instale as dependências do frontend:

   ```bash
   npm install

3. Para rodar o projeto em modo de desenvolvimento, execute:

   ```bash
   npm run dev

## **Crie seu próprio mundo virtual!** 

**Já imaginou ter seu próprio cantinho online onde você e seus amigos podem conversar e se divertir?** Com esta ferramenta incrível, você pode fazer exatamente isso!

### **O que você pode fazer:**

* **Criar salas:** Crie espaços personalizados para diferentes temas ou grupos de amigos.
* **Enviar mensagens:** Converse com seus amigos em tempo real e compartilhe suas ideias.
* **Reagir às mensagens:** Mostre como você se sente com emojis divertidos.
* **Marcar mensagens:** Destaque as mensagens importantes.

### **Como começar:**

1. **Inicie o servidor:** No seu computador, execute o comando `npm run dev` para iniciar o servidor da sua aplicação.
2. **Acesse a aplicação:** Abra o seu navegador e digite `http://localhost:5173`.
3. **Explore:** Comece a criar salas, enviar mensagens e se divertir!

### **Por trás da magia:**

* **Golang:** Uma linguagem de programação super rápida que faz tudo funcionar nos bastidores.
* **React:** Uma ferramenta incrível para criar interfaces bonitas e interativas.
* **WebSocket:** A tecnologia que permite que as mensagens sejam enviadas e recebidas instantaneamente.

**Dica:** Use a sua criatividade para criar salas com temas divertidos, como "Games", "Livros" ou "Música"!

**Gostou?** Que tal convidar seus amigos para explorar este mundo virtual com você?





   

 
 
