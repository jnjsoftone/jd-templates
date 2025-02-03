## .env 파일

```sh
OBSIDIAN_PLUGIN_PATH=D:\Notes\Obsidian\liveSync\dev\.obsidian\plugins\jop-clipper
```

## package.json 수정

```json
{
  "name": "{{plugin-name-kebab}}",
  "version": "1.0.0",
  "description": "Obsidian plugin for {{plugin-name-pascal}}",
  "main": "dist/main.js",
  "scripts": {
    "dev": "webpack --config webpack.config.js --watch && xcopy /E /Y dist \"{{obsidian-plugin-path}}\"",
    "build": "webpack --config webpack.config.js --mode production && xcopy /E /Y dist \"{{obsidian-plugin-path}}\"",
    "copy-to-vault": "xcopy /E /Y dist \"{{obsidian-plugin-path}}\""
  },
  "keywords": [
    "obsidian",
    "plugin"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@types/node": "^16.11.6",
    "copy-webpack-plugin": "^12.0.2",
    "css-loader": "^6.8.1",
    "mini-css-extract-plugin": "^2.9.2",
    "obsidian": "^1.4.11",
    "style-loader": "^3.3.3",
    "ts-loader": "^9.5.1",
    "tslib": "^2.8.1",
    "typescript": "^5.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4"
  }
}
```

