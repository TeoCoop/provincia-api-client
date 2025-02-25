# provincia-api-client

Para hacer un deploy de una nueva version

1- Hacer el commit del trabajo

2- Hacer un pull rebase

3- Crear la nueva version con 

npm version minor

este comando hara el cambio de version y el commit al repositorio


Testing local:

Para testear de manera local se puede instalar el modulo desde file:

"provincia-api-client": "file:../provincia-api-client",
En el index => const provinciaClient = require("./src/client").client; en testing usar dist en produccion 