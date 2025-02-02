0. Requirements

## 환경 설정

### macos / linux
```ini:~/.zshrc
export DEV_CONFIG_ROOT="/Users/moon/JnJ-soft/Developments"
```

### windows
> 시스템 환경 변수 편집
DEV_CONFIG_ROOT="C:\Users\moon\JnJ-soft\Developments"


## xcli 설치

```sh
npm install -g jnu-base
```

1. 프로젝트 생성/설정

## 프로젝트 생성

```sh
# <syntax> xcli -e init -r "[REPO_NAME]||[USER_NAME]||[TEMPLATE_NAME]||[[DESCRIPTION]]"
xcli -e init -r "{{name}}||{{github-id}}||ts-swc-npm||{{description}}"
```

## npm 패키지 설치
```sh
# jnu-base(dotenv yargs @octokit/rest 포함) + 프로젝트 의존 패키지
npm install jnu-base  --save
```

2. 프로젝트 개발

## cursor.ai 용 문서 수정

### `.cursorrules` 수정
```yaml:.cursorrules
```

### nodepads 용 파일 생성

```md:docs/cursor/requirements.md
```

### nodepads 등록

- cursor.ai > 설정 > NOTEPADS > '+ Create New Notepad'


3. 버전 관리

## macos / linux
```sh
cd {{current-dir}}/{{project-name}}
./publish.sh
```

## windows

```sh
cd {{current-dir}}/{{project-name}}
./publish.bat
```


