#!/bin/bash

# Verificar si se ha proporcionado la ruta del archivo
if [ -z "$1" ]; then
  echo "Uso: $0 <ruta-del-archivo-json>"
  exit 1
fi

# Ruta del archivo JSON pasado como argumento
json_file="$1"

# Crear un archivo temporal para almacenar el resultado minimizado
temp_file="temp_minimized.json"

# Minimizar el contenido del campo "content" dentro del JSON
jq '.content |= gsub("[\n\t]"; "") | .content |= gsub("  +"; " ")' "$json_file" > "$temp_file"

# Sobreescribir el archivo original con el archivo minimizado
mv "$temp_file" "$json_file"

echo "Minimización completada para el archivo: $json_file"
