# 素材与许可

| 文件/用途 | 来源 | 许可 | 备注 |
|-----------|------|------|------|
| `assets/hero-space.jpg` | 文生图 API `https://c2a.xyii.cc.cd/v1` · model `gpt-image-2` | 生成图，仅本页展示 | 三体恒星乱纪元氛围 Hero |
| `assets/water-drop.jpg` | 同上 | 同上 | 水滴探测器概念图 |
| `assets/sophon.jpg` | 同上 | 同上 | 智子/高维网格意象 |
| 星空 / 三体模拟 / 水滴 3D / 二向箔 | 本仓库 Canvas + CSS 程序化 | 自有代码 | 主视觉不依赖位图 |
| 氛围音 | Web Audio API 程序化合成（低频 drone + 噪声垫） | 本页原创合成，无需第三方音源 | 点击导航「播放氛围音」；浏览器需用户手势解锁 |
| 噪声纹理 | 内联 SVG `feTurbulence` | 程序化 | CSS data-URI |
| Orbitron / Noto Sans SC / Share Tech Mono | [Google Fonts](https://fonts.google.com) | OFL | 网页嵌入 |

UI 图标均为内联 SVG（Lucide 风格描边），无 emoji。

## 外链检索说明

曾尝试从 FreePD / Mixkit / Pixabay / Incompetech 下载免费环境音，多数 CDN 返回 403/404 或体积过大（>7MB）。为稳定部署与许可清晰，最终采用本页 Web Audio 程序化氛围音，避免第三方托管失效与版权灰区。
