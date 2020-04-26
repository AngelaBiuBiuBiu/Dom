# DOM
## 3.1 文档：DOM中的“D”
如果没有document（文档）, DOM也就无从谈起。

当创建了一个网页并把它加载到Web浏览器中时，DOM就在幕后悄然而生。

它把你编写的网页文档转换为一个文档对象。
## 3.2 对象：DOM中的“O”
JavaScript中的对象可以分为三种：
1. 用户定义对象：程序员自行创建的对象
2. 内建对象：内建在JavaScript里的对象，例如Array、Math和Date等
3. 宿主对象：由浏览器提供的对象，window对象

window对象对应着浏览器窗口本身，这个对象的属性和方法统称为BOM（浏览器对象模型），但我觉得成为Window Object Model（窗口对象模型）更为贴切。

BOM提供了window.open和window.blur等方法，这些方法某种程度上要为到处被滥用的各种弹出窗口和下拉菜单负责。

值得庆幸的是，我们不需要与BOM打太多的交道，而是把注意力集中在浏览器窗口内的网页内容上。document对象的主要功能就是处理网页内容。
## 3.3 模型：DOM中的“M”
如果你能把一个文档的各种元素想象成一棵家谱树，我们就可以用同样的术语描述DOM。

不过，与使用“家谱树”这个术语相比，把文档称为“节点树”更准确。
## 3.4 节点
文档是由节点构成的集合。DOM中有很多不同类型的节点。
### 3.4.1 元素节点
DOM的原子是元素节点，标签的名字就是元素的名字，例如文本段落元素的名字是“p”。

元素可以包含其他的元素，比如所有的列表项元素都要包含在无序或有序的列表内部。

没有包含在其他元素里的唯一元素是`<html>`元素。
### 3.4.2 文本节点
元素节点只是节点类型的一种。如果一份文档完全由一些空白元素构成，它将有一个结构，但这份文档本身将不会包含什么内容。在内容为王的互联网上，绝大多数内容都是由文本提供的。

比如`<p>This is a paragraph.</p>`，`<p>`元素包含着文本“This is a paragraph.”，它就是一个文本节点。

在XHTML文档里，文本节点总是被包含在元素节点的内部。但并非所有的元素节点都包含有文本节点。比如`<ul></ul>`没有直接包含任何文本节点，它包含着其他的元素节点`<li></li>`，后者包含着文本节点。
### 3.4.3 属性节点
属性节点用来对元素做出更具体的描述。

`<p title="a gentle reminder">this is a text node.</p>`

在DOM中，title="a gentle reminder"是一个属性节点。因为属性总是被放在起始标签里，所以属性节点总是被包含在元素节点中。并非所有的元素都包含着属性，但所有的属性都被元素包含。
### 3.4.4 CSS
继承（inheritance）是CSS技术中的一项强大功能。

类似于DOM, CSS也把文档的内容视为一棵节点树。节点树上的各个元素将继承其父元素的样式属性。
### 3.4.5 获取元素节点
1. getElementById('idName')，返回一个DOM对象

文档中的每一个元素都是一个对象，利用DOM提供的方法能得到任何一个对象。

2. getElementsByTagName('tagName')，返回一个对象数组，每个对象分别对应着文档里有着给定标签的一个元素

3. getElementsByClassName('className1 className2 ...')，返回一个具有相同类名元素的数组
## 3.5 获取和设置属性

obj.getAttribute('attributeName')

obj.setAttribute('attributeName', value)

通过setAttribute对文档做出修改后，在通过浏览器的view source（查看源代码）选项去查看文档的源代码时，看到的仍然是改变前的属性值。也就是说，setAttribute做出的修改并不会反应在文档本身的源代码里。这种“表里不一”的现象源自于DOM的工作模式：先加载文档的静态内容，再动态刷新，动态刷新不影响文档的静态内容。

这正是DOM的真正威力，对页面内容进行刷新缺不需要在浏览器里刷新页面。