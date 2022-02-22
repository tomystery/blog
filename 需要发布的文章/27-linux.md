# 1. 命令行相关
## 1.1 重命名和移动相关
  1. 重命名文件夹 `mv A B` 将A文件夹命名为B
  2. 移动A文件夹到B下面
  3. [远程间服务器的移动](https://blog.csdn.net/szy525525/article/details/85327416?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.base&spm=1001.2101.3001.4242)
## 1.2 打开文件夹相关
  1. 打开Home `nautilus`
  2. 打开当前文件夹`nautilus .`
  3. 打开制定的文件夹`nautilus /var/www/aaa` 打开aaa这个文件夹



## 1.3 包相关
  1. 下载之后进行安装 ` sudo dpkg -i <包名>`
  2. [包卸载相关](https://blog.csdn.net/luckydog612/article/details/80877179)

# 2. app安装
## 2.1 微信和qq的安装 
1. [微信的安装](https://blog.csdn.net/qq_37655607/article/details/112590248)

2. 这是旧版的微信（有时间再弄新的）和QQ的 里面的两个文件下载下来了，放在doc当中
3. [使用中出现的小问题解决](https://blog.csdn.net/yaoyaohyl/article/details/112519463)


# 3. 在项目启动的时候遇到问题 尤其在linux系统中
1. [监控的文件数太多，使得yarn run **启动报错的问题](https://blog.csdn.net/feinifi/article/details/103777406)

# 4. linux卸载node npm 干净
```js
  #apt-get 卸载
  sudo apt-get remove --purge npm
  sudo apt-get remove --purge nodejs
  sudo apt-get remove --purge nodejs-legacy
  sudo apt-get autoremove

  #手动删除 npm 相关目录
  rm -r /usr/local/bin/npm
  rm -r /usr/local/lib/node-moudels
  find / -name npm
  rm -r /tmp/npm* 


  //node -v之后如果还有node的版本号显示
  sudo whereis node //查看node的地址
  sudo rm -rf 上面显示的地址

```