# Tecnologies:

- Graphql
- NextJS (React)
- Auth0
- NestJS (NodeJS)
- PrismaORM
- Docker
- Apache Kafka
- Apollo Federation

# Flow Kafka

Purchase -> KafkaCla

Classroom <-- Kafka
Service 2 <-- Kafka
Service 3 <-- Kafka

Publish /Subscribe

# Back-end (Microservices)

- Purchases (http://localhost:3333/graphql) (https://purchases.com.br)
- Classroom (http://localhost:3334/graphql) (https://classroom.com.br)

# Front-end

- Client (http://localhost:3000)

# Apollo Federeation

- Gateway (http://localhost:3332/) - PROXY, to mix all the microservices

# Commands:

### Run containers:
```bash
docker-compose up -d
```

### Run back-ends:
```bash
yarn start dev
```

### Run front-end:
```bash
yarn dev
```