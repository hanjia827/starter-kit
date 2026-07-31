# React Starter Kit 환경 구축 기록

> 마지막 업데이트: 2026-07

---

# 목표

React 컴포넌트 라이브러리(Starter Kit)를 제작하고,
GitHub와 Vercel을 이용해 자동 배포 환경을 구축한다.

최종 목표

- React
- Storybook
- GitHub
- Vercel
- 자동 배포(CI/CD)

---

# 개발 환경

## OS

- Windows 11

## 에디터

- VS Code

## 브라우저

- Google Chrome

## Node.js

설치 완료

## 패키지 매니저

pnpm 사용

이유

- npm보다 빠름
- 디스크 사용량 절약
- 의존성 관리가 안정적

---

# VS Code 확장 프로그램

설치 완료

- Prettier
- ESLint
- Material Icon Theme
- Error Lens
- ES7+ React Snippets
- GitLens
- npm Intellisense

---

# Git 설정

Git 설치 완료

사용자 정보 등록

```bash
git config --global user.name "지아"

git config --global user.email "hanjia82@users.noreply.github.com"
```

확인

```bash
git config --list
```

---

# 프로젝트 생성

프로젝트 폴더

```text
D:\REACT-APP
```

생성

```bash
pnpm create vite starter-kit
```

선택

```
React

JavaScript

ESLint
```

프로젝트 이동

```bash
cd starter-kit
```

의존성 설치

```bash
pnpm install
```

개발 서버 실행

```bash
pnpm run dev
```

---

# Git 초기화

초기화

```bash
git init
```

메인 브랜치 변경

```bash
git branch -M main
```

---

# GitHub

Repository 생성

```
starter-kit
```

remote 연결

```bash
git remote add origin https://github.com/hanjia827/starter-kit.git
```

확인

```bash
git remote -v
```

---

# 첫 Commit

```bash
git add .

git commit -m "Initial commit"
```

Push

```bash
git push -u origin main
```

GitHub 업로드 완료

---

# Storybook 설치

설치

```bash
pnpm dlx storybook@latest init
```

선택

```
Onboarding : No

Configuration : Recommended

AI : No

Playwright : Yes
```

---

# pnpm approve-builds

Storybook 설치 중

esbuild 승인 필요

실행

```bash
pnpm approve-builds
```

선택

```
esbuild
```

---

# Storybook 실행

```bash
pnpm run storybook
```

기본 주소

```
http://localhost:6006
```

실행 확인 완료

---

# GitHub Push

Storybook 설치 후 변경사항

```bash
git add .

git commit -m "Install Storybook"

git push
```

---

# Vercel

회원가입

GitHub 로그인

GitHub App 설치

Repository

```
starter-kit
```

Import

Deploy

성공

배포 주소

https://starter-kit-iota-plum.vercel.app/

---

# 자동 배포

앞으로의 작업 순서

코드 수정

↓

```bash
git add .
```

↓

```bash
git commit -m "커밋 메시지"
```

↓

```bash
git push
```

↓

GitHub 업데이트

↓

Vercel 자동 배포

---

# 현재 완료된 환경

✅ VS Code

✅ Git

✅ GitHub

✅ Node.js

✅ pnpm

✅ React (Vite)

✅ ESLint

✅ Storybook

✅ Vercel

✅ GitHub 자동 배포

---

# 앞으로 진행할 내용

- 프로젝트 폴더 구조 정리
- 공통 CSS 구조 설계
- Storybook 구조 이해
- Button 컴포넌트 제작
- Input
- Checkbox
- Radio
- Select
- Modal
- Toast
- Tooltip
- 디자인 시스템 구축