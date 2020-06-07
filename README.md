# jb-web-help-test

Table of content without any UI component library.

## Global packages

- Node v12.13.0
- MPM v6.12.0
- Or Docker 2.3.0.2

## 

---

## How to start

Using Node (with webpack-dev-server config):
```$xslt
npm start
# Wait while dev-server start
# Check it http://localhost:8081/
```
Using Docker (with webpack-dev-server config):
```$xslt
docker-compose up -d
# Wait while dev-server start
docker logs -f web-help
# Check it http://localhost:8081/
```
Using Docker to emulate production environment (with webpack.prod config and reverse-proxy to handle with CORS)
```
docker-compose -f docker-compose.prod.yml up -d --build
# Check it http://localhost:8081/
```

---

### IDE Settings

- Languages & Frameworks -> Javascript -> Code Quality Tools -> Eslint -> Enable
- Languages & Frameworks -> Style Sheets -> Stylelint -> Enable
