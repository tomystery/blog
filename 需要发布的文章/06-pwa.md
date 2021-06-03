# PWA (Progressive Web Apps)
webapp用户体验差（不能离线访问），用户粘性低（无法保存入口），pwa就是为了解决这一系列问题（Progressive Web Apps）,让webapp具有快速，可靠，安全等特点.

**PWA一系列用到的技术**

* Web App Manifest
* Service Worker
* Push Api & Notification Api
* App Shell & App Skeleton
* ...
## 1. Web App Manifest
将网站添加到桌面、更类似native的体验

Web App Manifest设置
```js
<link rel="manifest" href="/manifest.json">
```

```js
{
    "name": "PWA效果展示",  // 应用名称 
    "short_name": "PWA", // 桌面应用的名称  ✓
    "display": "standalone", // fullScreen (standalone) minimal-ui browser ✓
    "start_url": "/", // 打开时的网址  ✓
    "icons": [{ // 设置桌面图片 icon图标
        "src": "/icon.png",
        "sizes": "144x144",
        "type": "image/png"
    }],
    "background_color": "#aaa", // 启动画面颜色
    "theme_color": "#aaa" // 状态栏的颜色
}
```