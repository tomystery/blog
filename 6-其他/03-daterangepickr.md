
# 1. dateRangepickr的配置信息


```
$('#config-demo').daterangepicker({
            maxDate: moment(), //最大时间
            dateLimit: {
                days: 30
            }, //起止时间的最大间隔 
            showDropdowns: true,
            showWeekNumbers: true, //是否显示第几周
            timePicker: true, //是否显示小时和分钟
            timePickerIncrement: 60, //时间的增量，单位为分钟
            timePicker12Hour: false, //是否使用12小时制来显示时间
            ranges: {
                //'最近1小时': [moment().subtract('hours',1), moment()],
                '今日': [moment().startOf('day'), moment()],
                '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
                '最近7日': [moment().subtract('days', 6), moment()],
                '最近30日': [moment().subtract('days', 29), moment()]
            },
            opens: 'right', //日期选择框的弹出位置
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary blue',
            cancelClass: 'btn-small',
            format: 'YYYY-MM-DD HH:mm:ss', //控件中from和to 显示的日期格式
            separator: ' to ',
            ranges: {
                //'最近1小时': [moment().subtract('hours',1), moment()],  
                '今日': [moment().startOf('day'), moment()],
                '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
                '最近7日': [moment().subtract('days', 6), moment()],
                '最近30日': [moment().subtract('days', 29), moment()]
            },
            opens: 'right', //日期选择框的弹出位置  
            buttonClasses: ['btn btn-default'],
            applyClass: 'btn-small btn-primary blue',
            cancelClass: 'btn-small',
            format: 'YYYY-MM-DD HH:mm:ss', //控件中from和to 显示的日期格式  
            separator: ' to ',
            locale: {
                applyLabel: '确定',
                cancelLabel: '取消',
                fromLabel: '起始时间',
                toLabel: '结束时间',
                customRangeLabel: '手动选择',
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                    '七月', '八月', '九月', '十月', '十一月', '十二月'
                ],
                firstDay: 1
            }
        }, function (start, end, label) {
            console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
        });

```

# 2. 上面没有的配置部分讲解

* timePicker24Hour :true false -是否使用24小时来显示时间
*  showDropdowns: true,//年份和月份允许通过下拉框的形式选择
* autoApply：不用点击Apply或者应用按钮就可以直接取得选中的日期

　　可选值：true（自动选中） false（点击Apply后选中日期）

　　默认值：false

* singleDatePicker：设置为单个的datepicker，而不是有区间的datepicker

　　可选值：true（单个的datepicker） false（有区间的datepicker）

　　默认值：false

* startDate：设置默认的开始日期 

　　格式：MM/DD/YYYY

　　示例："startDate":"10/14/2017"


* endDate：设置默认的结束日期

　　格式：MM/DD/YYYY

　　示例："endDate":"10/22/2017"

* minDate：设置最小可用日期

　　格式：MM/DD/YYYY

　　示例："minDate":"10/14/1995"

* maxDate：设置最大可用日期

　　格式：MM/DD/YYYY

　　示例："maxDate":"10/14/2017"　　

* timePickerSeconds：可选中秒


* opens：设置datepicker面板防止的位置：左边、右边或者中间

　　可选值：right left center

　　默认值：center

　　示例："opens":"left"

* drops：设置面板防止的位置：input输入框上面或者input输入框下面

　　可选值：down up

　　默认值：down

　　示例："drops":"down"

*  为了获取对应格式的时间需要的代码：
	"locale": {
      format: 'YYYY-MM-DD hh:mm:ss',
      }
      　　
*   buttonClasses: ['btn btn-default']
    
    applyClass: 'btn-small btn-primary blue',
    
    cancelClass: 'btn-small',　　
    
    给按钮 确认按钮 取消按钮设置类名
    
# 3. 引入的时候得按照顺序

    