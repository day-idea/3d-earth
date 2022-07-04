# baidumap-react

## 环境准备

首先得有 node，并确保 node 版本是 14 或以上。（推荐用 nvm 来管理 node 版本，windows 下推荐用 nvm-windows）

mac 或 linux 下安装 nvm。

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

## 安装 node

```bash
$ nvm install 16`
$ nvm use 16
$ node -v
v16.10.0
```

然后需要包管理工具。node 默认包含 npm，但也可以选择其他方案，

- pnpm
- Yarn

安装 pnpm。

## 启动项目

执行 **pnpm dev** 命令，

```bash
$ pnpm dev
ready - App listening at http://127.0.0.1:8000
event - compiled successfully in 1121 ms (388 modules)
event - MFSU compiled successfully in 1308 ms (875 modules)
```
