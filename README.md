### APLICACION NODE USANDO BASE DE DATOS MYSQL Y TYPESCRIPT


Para montar la base de datos en este caso use una imagen  de docker y se administro usando Workbench

```
docker run -p 3306:3306 --name node-mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest --default-authentication-plugin=mysql_native_password
```

luego de ello crear la base de datos y listo!!