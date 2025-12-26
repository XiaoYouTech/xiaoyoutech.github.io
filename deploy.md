# 部署指南：将 MindGuard 网站部署到 GitHub Pages

本指南将详细介绍如何将 MindGuard 产品介绍网站部署到 GitHub Pages 上。

## 什么是 GitHub Pages

GitHub Pages 是 GitHub 提供的静态网站托管服务，可以免费托管你的静态网站，支持自定义域名，并且自动支持 HTTPS。

## 部署前准备

1. **GitHub 账号**：确保你已经拥有 GitHub 账号
2. **Git 安装**：确保你的电脑上已经安装了 Git
3. **项目文件**：确保你已经准备好 MindGuard 网站的所有文件

## 部署步骤

### 步骤 1：创建 GitHub 仓库

1. 登录你的 GitHub 账号
2. 点击右上角的 "+" 图标，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**：可以使用 `mindguard-website` 或其他你喜欢的名称
   - **Description**：可选，填写 "MindGuard 产品介绍网站"
   - **Visibility**：选择 "Public"（GitHub Pages 免费版只支持公开仓库）
   - **Initialize this repository with**：不要勾选任何选项
4. 点击 "Create repository"

### 步骤 2：将本地项目推送到 GitHub

1. 在你的电脑上，打开终端，导航到 `website` 目录：
   ```bash
   cd /Users/tomchen/Documents/iOS/MindCalm/website
   ```

2. 初始化 Git 仓库：
   ```bash
   git init
   ```

3. 添加所有文件到 Git：
   ```bash
   git add .
   ```

4. 提交文件：
   ```bash
   git commit -m "Initial commit"
   ```

5. 关联远程仓库：
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   ```
   （替换为你实际的 GitHub 用户名和仓库名）

6. 推送代码到 GitHub：
   ```bash
   git push -u origin master
   ```

### 步骤 3：配置 GitHub Pages

1. 回到 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧导航栏中，点击 "Pages"
4. 在 "Build and deployment" 部分：
   - **Source**：选择 "Deploy from a branch"
   - **Branch**：选择 "master" 或 "main"，然后选择 "/ (root)"
   - 点击 "Save"
5. 等待几分钟，GitHub Pages 会自动构建和部署你的网站
6. 部署成功后，你会在 "GitHub Pages" 部分看到你的网站 URL，格式为：`https://你的用户名.github.io/你的仓库名/`

### 步骤 4：验证部署

1. 打开浏览器，访问部署成功后的 URL
2. 检查网站是否正常显示
3. 测试各种设备尺寸下的响应式效果
4. 测试所有交互功能是否正常工作

## 自定义域名配置（可选）

如果你有自己的域名，可以将其绑定到 GitHub Pages 网站：

1. 在你的域名注册商处，添加以下 DNS 记录：
   - A 记录：指向 GitHub Pages 的 IP 地址（可以在 GitHub Pages 设置页面查看）
   - CNAME 记录：指向 `你的用户名.github.io`

2. 在 GitHub 仓库的 "Settings > Pages" 部分：
   - 在 "Custom domain" 字段中，输入你的自定义域名
   - 点击 "Save"
   - 勾选 "Enforce HTTPS" 选项，启用 HTTPS

## 部署后的维护

### 更新网站内容

当你需要更新网站内容时，按照以下步骤操作：

1. 在本地修改网站文件
2. 使用 Git 提交修改：
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin master
   ```
3. GitHub Pages 会自动重新构建和部署你的网站
4. 等待几分钟后，访问网站查看更新效果

### 查看部署状态

你可以在 GitHub 仓库的 "Actions" 选项卡中查看部署状态和历史记录。

## 常见问题及解决方案

### 1. 部署后网站显示 404

- 确保你选择了正确的分支和目录
- 确保你的仓库中有 `index.html` 文件
- 等待几分钟，GitHub Pages 可能还在构建中
- 检查你的仓库是否为公开仓库

### 2. 样式或图片不显示

- 确保 CSS 和 JavaScript 文件的路径正确
- 确保图片文件存在且路径正确
- 检查浏览器控制台的错误信息

### 3. 自定义域名无法访问

- 确保 DNS 记录配置正确
- 等待 DNS 记录生效（可能需要 24-48 小时）
- 确保你在 GitHub Pages 设置中正确配置了自定义域名

### 4. 网站加载速度慢

- 优化图片大小，压缩图片
- 精简 CSS 和 JavaScript 文件
- 考虑使用 CDN 加速（可选）

## 其他部署选项

除了 GitHub Pages，你还可以考虑以下静态网站托管服务：

- **Netlify**：提供更强大的构建功能和部署选项
- **Vercel**：适合 Next.js 等现代前端框架
- **Cloudflare Pages**：提供强大的 CDN 和安全功能
- **AWS S3 + CloudFront**：适合需要高度自定义和扩展的场景

## 技术支持

如果在部署过程中遇到问题，可以参考以下资源：

- [GitHub Pages 官方文档](https://docs.github.com/zh/pages)
- [GitHub Pages 故障排除](https://docs.github.com/zh/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-builds-for-github-pages-sites)
- GitHub 社区论坛

或者联系我们：
- 邮箱：support@freemind.app
- 网站：https://www.freemind.app

## 总结

通过本指南，你应该已经成功将 MindGuard 网站部署到了 GitHub Pages 上。GitHub Pages 是一个免费、稳定、易用的静态网站托管服务，非常适合部署产品介绍网站、个人博客、项目文档等静态网站。

祝你部署顺利！🎉