# 简介
关于MicroApp的使用demo [micro-app](https://github.com/smalller/MicroApp-demo)

本项目主应用采用了vue2，子应用采用了vue2、vue3和react

# 目录结构
```
.
├── child-app
│   ├── react            // 子应用 react (hash路由)
│   ├── vue2             // 子应用 vue2 (history路由)
│   └── vue3             // 子应用 vue3 (history路由)
├── main-app
│   ├── vue2             // 主应用 vue2 (history路由)
└── package.json
```

# 开始

## 1、安装依赖

```bash
yarn bootstrap
```

> 如果失败，建议单独进入子目录执行 `yarn` 或 `npm install` 安装。


## 2、运行项目
**启动 vue2 主应用**

```bash
npm run dev:main-vue2
```

访问：`http://localhost:8087/main-vue2`

此时分别运行 `main-app/vue2` 以及 `child-app` 文件夹下的所有子应用。


# 注意
- 如果你在安装依赖或启动项目时发生错误，可以尝试单独进入每个项目执行操作。
