 # 1

 下面这个是我最早接触action creator的写法。首先引入addRecipe和removeFromCalendar这两个action creator


```
function mapDispatchToProps(dispatch) {
  return {
    selectRecipe: (data) => dispatch(addRecipe(data)),
    remove: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)



```

这样写的作用是将dispatch方法映射到特定的props,现在我们的组件props上将有上面的这两个属性，然后当这些函数调用时，它将自动为我们派发。这里我们基本上将action creator 包裹在mapDispatchToProps的dispatch内 以使我们的组件更简洁一些

下面是调用的写法

```
<FoodList food={food} onSelect={(recipe) => {
                    selectRecipe({ recipe, day: this.state.day, meal: this.state.meal })
                    this.closeFoodModal()
                  }} />
```

# 2 

前些天写代码发现有一个bindActionCreators,其实它的用法和上面是一样的，只不过不是把单独的action creator 的函数暴露出来，而是把多个action creator组成一个。查了一下意思：bindActionCreators的作用是将一个或多个action和dispatch组合起来生成mapDispatchToProps需要生成的内容

```
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' //引入了多个action creator


function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}




this.props.userInfoActions.update({
            cityName: cityName
        })//用的时候直接调用相应的action creator

```
