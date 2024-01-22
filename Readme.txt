La imagen creada se llama node-restapi

Para construir la imagen "docker build -t node-restapi:18 ."

El comando para ejecutar viendo la consola es  "docker run -it -p3000:3000 --name rest node-restapi" 

Para ejecutar y dejar esto como si fuera un proceso de segundo planot "docker run -d -p3000:3000 --name rest node-restapi"