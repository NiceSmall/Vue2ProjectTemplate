# 前端分离项目开发模板 V1.0

使用CDN进行打包生成文件的优化,压缩后开启`Gzipped`的大小在20kb,其中包含了`@babel/polyfill`/`axios`/`vuex`/`vue`/`vue-router`/`echarts`/`element-ui`/`高德地图API`

```
$ npm run build:prod

> loading@0.1.0 build E:\nginx-1.17.0\html\Vue2ProjectTemplate
> vue-cli-service build


-  Building for production...当前打包模板=> E:\nginx-1.17.0\html\Vue2ProjectTemplate\templates\index.prod.html
-  Building for production...

 DONE  Compiled successfully in 6691ms                                                                 下午1:13:03
  File                                      Size             Gzipped  

  dist\static\js\chunk-vendors.b674b09b.    49.41 KiB        17.66 KiB
  dist\static\js\app.ef1264ac.js            5.65 KiB         2.63 KiB
  dist\static\js\chunk-2d0e19c3.6b9eac91    0.40 KiB         0.33 KiB
  .js
  dist\static\css\app.2c0ad6f5.css          1.66 KiB         0.77 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html

```

## 版本更新记录详细

[更新记录](./VSERSION.md)

## 项目目的

由于项目非常大有重构和继续新增的需求，维护和更新都有很大的成本，所以分离出每个大菜单单独成为一个项目

此项目为每个子菜单的单独项目

使用`webpath`为新版和重构路径

- 好处1 是不影响以前的功能 更新也只需要部署单个菜单
- 好处2 每个人负责单独的菜单 类似于独立项目 专注和效率
- 好处3 一个域名下多个前端项目

> 其它：需要`nginx`单独配置 才能支持这种方式的访问

> 其它：如果只是单独项目 则可以考虑此项目是单独解决打包大小 不需要的包直接移除即可

### 前置准备

> 根据不同的项目或菜单更改不同的 `base`

#### 1、修改 `router/index.js`

``` javascript
const router = new VueRouter({
  mode: 'history',
  base: '/webpath/a/',
  routes
})
```

A项目            `/webpath/a/`   
B项目            `/webpath/b/`  
你的项目         `/webpath/项目名称/`


#### 2、 验证修改是否成功

新增路由 `path: '/index'` 

打开页面 `http://localhost:9528/index` 可以访问

打开页面 `http://localhost:9528/webpath/项目名称/index` 可以访问

## git提交规范

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本
- workflow: 工作流相关文件修改


1. scope: commit 影响的范围, 比如: route, component, utils, build...

2. subject: commit 的概述

3. body: commit 具体修改内容, 可以分为多行.

4. footer: 一些备注, 通常是 BREAKING CHANGE 或修复的 bug 的链接.


### 示例

#### fix（修复BUG）
如果修复的这个BUG只影响当前修改的文件，可不加范围。如果影响的范围比较大，要加上范围描述。
例如这次 BUG 修复影响到全局，可以加个 global。如果影响的是某个目录或某个功能，可以加上该目录的路径，或者对应的功能名称。

```
// 示例1
fix(global):修复checkbox不能复选的问题
// 示例2 下面圆括号里的 common 为通用管理的名称
fix(common): 修复字体过小的BUG，将通用管理下所有页面的默认字体大小修改为 14px
// 示例3
fix: value.length -> values.length
F 修复 checkbox不能复选的问题
```

#### feat（添加新功能或新页面）

```
feat: 添加网站主页静态页面
FE 添加 网站主页静态页面
```

#### chore（其他修改）
chore 的中文翻译为日常事务、例行工作，顾名思义，即不在其他 commit 类型中的修改，都可以用 chore 表示。
```
chore: 将表格中的查看详情改为详情
C 将表格中的查看详情改为详情
```