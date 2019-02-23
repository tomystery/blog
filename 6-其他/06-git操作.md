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
> * 查看其他人提交的修改内容或自己的历史记录的时候，提交信息是需要用到的重要资料。所以请用心填写修改内容的提交信息，以方便别人理解。
以下是Git的标准注解：
>
```
第1行：提交修改内容的摘要
第2行：空行
第3行以后：修改的理由
```
请以这种格式填写提交信息。提交的时候先是git commit -m 先输入双引号，后面的引号最后输入。

### 1.3 合并分支


```
git chekout b
git merge a //合并a到b分支
git push
```