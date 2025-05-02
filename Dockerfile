# Usar Debian como base
FROM debian:bullseye

# Actualizar paquetes e instalar dependencias necesarias
RUN apt-get update && apt-get install -y curl make g++

# Instalar Node.js 20
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos del proyecto a la imagen
COPY . .

# Instalar dependencias de Node.js
RUN npm install

# Exponer el puerto 8080 (o el que usará tu API)
EXPOSE 8080

# Comando para ejecutar el servidor
CMD ["node", "server.js"]
