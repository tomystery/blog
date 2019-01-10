# wordpress的安装步骤
## 1.安装Apache HTTP服务
```
#yum -y install httpd
#yum -y install httpd-manual mod ssl mod perl mod auth mysql -安装apache服务相关的一些模块，支持Mysql和php相关的一些模块
#service httpd start
#chkconfig httpd on -开机自动启动
```

## 2.安装Mysql数据库

```
#yum -y install mysql mysql-server -安装数据库
#service mysqld start -将mysql数据库启动起来
#mysql_secure_installation -配置mysql数据库的密码
root 名：
root密码：123123
其他：yes
~#mysql -uroot -p123123 //登陆数据库
mysql>show databases;
CREATE DATABASE wordpress; -注意一定要加；
exit
#chkconfig mysqld on -开机重启mysql
```

## 3.安装PHP语言环境

```
#yum -y install php php-mysql
#yum -y install gd php-gd gd-devel php-xml php-common php-mbstring
php-ldap php-pear php-xmlrpc php-imap-安装php相关支持的模块
#service httpd restart -把apache http服务器重启一下
#echo “”>/var/www/html/phpinfo.php
```

## 4.安装WordPress并配置mysql

```
#wget https://cn.wordpress.org/wordpress-4.7.4-zh_CN.tar.gz
 -安装wordpress安装包
#tar -xzf wordpress-4.7.4-zh_CN.tar.gz -解压
#cd wordpress 进入到这个文件
#cp wp-config-sample.php wp-config.php -把sample这个文件变成php
#vim wp-config.php -进入到这个文件里面配置数据库信息
#mkdir /var/www/html/wp-blog -新建一个目录
#mv * /var/www/html/wp-blog/ -把 本地所以信息全部拷贝过来，拷贝完成之后就可以通过浏览器去配置它
```

## 5
打开浏览器就发现已经完成了
47.95.117.182/wp-blog/readme.html


## 6.现在讲的是网站的优化

* 2.1. 微博是使用博客挂件工具
* 2.2 友盟cnzz来 https://www.umeng.com/
* 2.3 视屏是通过smartideo插件
* 2.2 有盟是将代码放入到wordpress管理工具的文本中
* 2.3视频软件是需要安装插件，但是你若是正常点击安装的时候会发现安装不了，这是因为安装插件的时候，它会在我们本地写一些文件，因此我们要去把他的权限开通。进入到服务器到下面图所示的列表中

这里是提高wp-content和wp-plugins的权限，若要安装主题，则提高主题的权限。在vim wp-config.php的时候，在页面的底部加入如下代码

define(“FS_METHOD”,”direct”);
define(“FS_CHMOD_DIR”,0777);
define(“FS_CHMOD_FILE”,0777);

完成以后退出。再次重新安装视频插件，成功以后则启用，这是你编辑文章的时候，发现链接一段优酷链接就能发现那个链接变成了视频。
![](/Users/yangran/Desktop/屏幕快照 2018-04-29 上午11.10.00.png)

