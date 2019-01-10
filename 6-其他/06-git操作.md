# 1.基础

### 1.1 从第一个仓库推送到另外一个仓库

```
git checkout <second_pro>
git merge origin/<first_pro>
git push
```

### 1.2 删除本地远程没有的分支

```
git  remote show origin
git remote prune origin 
```

> * 不同类别的修改 (如：Bug修复和功能添加) 要尽量分开提交，以方便以后从历史记录里查找特定的修改内容。
> * 

