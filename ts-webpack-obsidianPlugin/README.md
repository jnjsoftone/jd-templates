---
- name: "{{name}}"
- type: obsidian plugin
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
xcli -e init -r "{{name}}||{{github-id}}||ts-webpack-obsidianPlugin||{{description}}"

# package install
npm install 
```

## functions
