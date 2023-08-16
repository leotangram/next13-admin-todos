# Development

Pasos para levantar la app desarrollo

1. Levantar la base de datos

```
docker compose up -d
```

2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno en el .env
4. Ejecutar comando `yarn`
5. Ejecutar comando `yarn dev`
6. Ejecutar estos comandos de Prisma

```
npx prisma init
npx prisma migrate dev --name dev
npx prisma generate
```

7. Ejecutar el SEED para [crear la base de datos local](localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev --name dev
npx prisma generate
```
