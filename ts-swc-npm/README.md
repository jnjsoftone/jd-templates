---
- name: "{{name}}"
- description: "{{description}}"
- author: "{{author}}"
- github-id: "{{github-id}}"
---

## install

```sh
# cd [PARENT DIR]
cd {{current-dir}}

# <syntax> xcli -e init -r "[REPO_NAME]||[USER_NAME]||[TEMPLATE_NAME]||[DESCRIPTION]"
xcli -e init -r "{{name}}||{{github-id}}||ts-swc-npm||{{description}}"

# package install
npm install 
```
## functions


## tech

- typescript
- swc
- npm
- yarn

## publish

```sh
# npm login
npm login {{github-id}}

# windows
./publish.bat

# macos
./publish.sh
```
