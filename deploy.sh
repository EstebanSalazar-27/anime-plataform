#!/usr/bin/env sh

# abortar por errores
set -e

# build
npm run build
cp 404.html dist/404.html
# navegar al directorio de salida de la compilación
cd dist

# si está implementando en un dominio personalizado
# echo 'www.example.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# si está implementando en https: // <USERNAME> .github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# si está implementando en https: // <USERNAME> .github.io / <REPO>
 git push -f git@github.com:EstebanSalazar-27/anime-plataform.git main:gh-pages

cd -