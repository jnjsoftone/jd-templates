---
- name: "{{name}}"
- type: chrome extension
- lang: typescript
- bundle: webpack
- description: "{{description}}"
- author: "{{author}}"
- github-id: "{{github-id}}"
---

## install

```sh
# cd [PARENT DIR]
cd {{current-dir}}

# <syntax> xcli -e init -r "[REPO_NAME]||[USER_NAME]||[TEMPLATE_NAME]||[DESCRIPTION]"
xcli -e init -r "{{name}}||{{github-id}}||ts-webpack-chromeExtension||{{description}}"

# package install
npm install 
```

## functions
