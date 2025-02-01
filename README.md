# Mon CV


## Installer le npm
docker-compose --profile install-only up install-frontend && sudo chown -R ${USER}:${USER} frontend 


## Lancer en dev
docker-compose up


## Lancer en prod
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build