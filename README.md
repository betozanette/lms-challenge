# lms-challenge

#### postgres
```cmd
docker run --name lms-db -e POSTGRES_USER=usr -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=lms -p 5433:5432 -d postgres
```

#### backend
```cmd
cd server
yarn start
```

#### frontend
```cmd
cd client
yarn start
```
