## Team IDE UI 弹框&提示

### 提示

提示框

``` javascript
// 弹出默认提示框
teamide.info('这是默认提示框！');

// 弹出成功提示框
teamide.success('这是成功提示框！');

// 弹出警告提示框
teamide.warn('这是警告提示框！');

// 弹出错误提示框
teamide.error('这是错误提示框！');

```

### 弹框

弹框

``` javascript
// 弹框
teamide.alert('弹框！').then(()=>{
    teamide.info('回调！');
});

// 确认框
teamide.confirm('确认框？').then(()=>{
    teamide.info('确定回调！');
}).catch(()=>{
    teamide.info('取消回调！');
});

```
