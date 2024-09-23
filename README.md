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


# Uso da API

## Backend

O servidor da API será iniciado em [http://localhost:8080](http://localhost:8080). Aqui estão alguns exemplos de uso da API:

### Criar uma sala

    ```bash
      curl -X POST http://localhost:8080/api/rooms -H "Content-Type: application/json" -d '{"theme": "Nova Sala"}'

## Enviar uma Mensagem

Para enviar uma mensagem para uma sala, você pode usar o seguinte comando curl:
  ```bash
    curl -X POST http://localhost:8080/api/rooms/{room_id}/messages -H "Content-Type: application/json" -d '{"message": "Olá mundo!"}'










   

 
 
