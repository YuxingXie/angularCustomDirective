# AngularCustomDirective

实现链式数据显示的自定义指令 

variable chain:
```json
{"id":"1","name":"first","next":{
    "id":"2","name":"second","next":{
        "id":"3","name":"third","next":{"id":"4","name":"fourth"}
      }
    }
}

```
```html
<div *lyChain="let item of chain" [nextVal]="next" >{{item.id}}:{{item.name}}</div>
```
遍历chain直到item.next不存在。
