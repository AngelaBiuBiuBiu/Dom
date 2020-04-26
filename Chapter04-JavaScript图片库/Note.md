# JavaScript图片库

## 事件处理函数
事件处理函数的作用是，在特定事件发生时调用特定的JavaScript代码。

给某个元素添加了事件处理函数后，一旦事件发生，相应的JavaScript代码就会得到执行。被调用的JavaScript代码可以返回一个值，这个值将被传递给那个事件处理函数。

例如，我们可以给某个链接添加一个onclick事件处理函数，并让这个事件处理函数所触发的JavaScript代码返回布尔值true或false。这样一来，当这个链接被点击时，如果那段JavaScript代码返回的值是true，onclick事件处理函数就被认为“这个链接被点击了”，反之，如果返回的值是false，onclick事件处理函数就认为“这个链接没有被点击”。

## childNodes属性
在一颗节点树上，childNodes属性可以用来获取任何一个元素的所有子元素。它是一个包含这个元素全部子元素的数组。

由childNodes属性返回的数组包含所有类型的节点，而不仅仅是元素节点。事实上，文档里几乎每一样东西都是一个节点，甚至连空格和换行符都被解释为节点，而它们也全都包含在childNodes属性所返回的数组中。

## nodeType属性
每一个节点都有nodeType属性，这个属性可以让我们知道我们正在与哪一种节点打交道。差劲的一点是nodeType的值并不是英文，而是一个数字。

nodeType属性总共有12种可取值，但其中仅有3种具有实用价值。
1. 元素节点的nodeType属性值是1
2. 属性节点的nodeType属性值是2
3. 文本节点的nodeType属性值是3

这意味着，可以让函数只对特定类型的节点进行处理。

## nodeValue属性
如果想改变一个文本节点的值，那就使用DOM提供的nodeValue属性，它用来得到（和设置）一个节点的值。

## firstChild和lastChild属性
```
node.firstChild === node.childNodes[0]

node.lastChild === node.childNodes[node.childNodes.length - 1]
```
