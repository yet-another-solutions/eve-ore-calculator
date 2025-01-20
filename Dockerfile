from node:latest as builder
copy . .
run npm install
run npx weblack

from nginx:latest
copy --from=builder dist/* .
