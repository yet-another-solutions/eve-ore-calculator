from node:latest as builder
copy . .
run npm install
run npx webpack

from nginx:latest
copy --from=builder dist/* /usr/share/nginx/html/
