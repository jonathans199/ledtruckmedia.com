rm -rf dist/
npm run build
rsync -azP dist/* root@185.39.11.13:/usr/share/nginx/asoftio/clients/ledtruckmedia/prod/api/landing