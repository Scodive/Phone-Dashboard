# 旧手机数据看板 (Old Phone Dashboard)

<img width="756" alt="image" src="https://github.com/user-attachments/assets/e8ab72c2-f413-46d1-b352-1da34c5ad5a2" />

这个项目旨在让闲置的旧手机重获新生，将其改造成一个 24 小时实时数据监控面板。通过简洁的界面展示各类实时数据，让旧手机发挥余热，成为你的专属数据中心。


## 最近更新
- 加入黑夜模式
- 添加上证指数大盘
- 优化UI
- 加入校巴


## 🌟 功能特点

- 📱 专为手机屏幕优化的响应式设计
- ⚡ 实时数据自动更新
- 🌈 简洁现代的 UI 界面
- 🔋 适合 24 小时持续运行

### 当前支持的数据显示
- ⏰ 实时时间（每秒更新）
- 🌤️ 实时天气信息（每30分钟更新）
  - 当前温度
  - 体感温度
  - 湿度
  - 天气状况
- 📊 B站视频数据（每60秒更新）
  - 视频标题
  - 播放量
  - 点赞数
- 👥 GitHub 仓库访问统计

## 🛠️ 技术实现

### API 说明

1. 天气 API

    ```text
    URL: https://api.openweathermap.org/data/2.5/weather
    参数:
    - lat: 纬度 (示例: 22.53291)
    - lon: 经度 (示例: 113.93029)
    - appid: OpenWeatherMap API密钥
    - units: metric (使用摄氏度)
    ```

2. B站视频 API

    ```text
    URL: /api/bilibili
    参数:
    - bvid: B站视频的BV号
    返回数据:
    - title: 视频标题
    - view: 播放量
    - like: 点赞数
    ```

3. GitHub 访问统计

    ```text
    使用 visitor-badge 服务
    URL: https://api.visitorbadge.io/api/VisitorHit
    参数:
    - user: GitHub用户名
    - repo: 仓库名
    - countColor: 统计数字颜色
    ```

## 🚀 部署方法

1. 克隆仓库

    ```bash
    git clone https://github.com/Scodive/Old_PHONE_Display.git
    ```

2. 配置环境
    - 注册并获取 OpenWeatherMap API 密钥
    - 在代码中替换相应的 API 密钥和 B站视频 BV 号

3. 部署到 Vercel

    ```bash
    npm install -g vercel
    vercel login
    vercel
    ```

## 💡 使用建议

1. 建议使用旧手机浏览器的全屏模式
2. 关闭手机自动锁屏
3. 保持充电状态
4. 建议使用深色模式以节省电量
5. 可以根据需要调整数据刷新频率

## 🔧 自定义配置

可以根据需要修改以下参数：
- 天气更新频率（默认30分钟）
- B站数据更新频率（默认60秒）
- 添加或移除数据模块
- 自定义样式和布局

## 📝 待优化功能

- [ ] 添加更多数据源支持
- [ ] 支持自定义数据模块
- [ ] 添加数据可视化图表
- [ ] 支持暗色主题切换
- [ ] 添加本地数据缓存

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来完善项目功能！

## �� 许可证

MIT License
