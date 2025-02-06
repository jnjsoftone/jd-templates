#!/bin/bash
# [syntax] ./publish.sh patch|minor|major
# default: patch

mode=${1:-patch}
PLUGIN_DIR="/Users/moon/JnJ-soft/Obsidian/liveSync/dev/.obsidian/plugins/jop-web"

# 플러그인 디렉토리가 없으면 생성
if [ ! -d "$PLUGIN_DIR" ]; then
  mkdir -p "$PLUGIN_DIR"
fi

# 1. git pull 먼저 실행하여 원격 변경사항 가져오기
git pull && \
# 2. 빌드
npm run build && \
# 3. git 변경사항 커밋
git add . && \
git commit -m "chore: build for publish to obsidian" && \
# 4. npm 버전 업데이트 (이때 자동으로 버전 태그가 생성됨)
npm version $mode && \
# 5. package.json의 버전을 manifest.json에 적용
version=$(node -p "require('./package.json').version") && \
node -e "
  const fs = require('fs');
  const manifest = require('./public/manifest.json');
  manifest.version = '$version';
  fs.writeFileSync('./public/manifest.json', JSON.stringify(manifest, null, 2) + '\n');
" && \
# 6. 변경된 manifest.json 커밋
git add public/manifest.json && \
git commit -m "chore: update manifest version to $version" && \
# 7. git push
git push --follow-tags && \
# 8. obsidian 플러그인 배포
cp -R dist/* "$PLUGIN_DIR/"