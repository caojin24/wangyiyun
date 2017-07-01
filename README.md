# 网易云音乐项目总结
首先利用create-react-app脚手架搭建项目的架构，其中缺少scss转css的功能，查阅资料，加上：

```
”build-css”: “node-sass src/  -o src/“, “watch-css”: “npm run build-css && node-sass src/ -o src/ —watch”
```
这个脚手架有个比较好的功能是能智能提示错误和警告，提高了debug的效率。
##主要实现的功能
1. banner轮播图（同时变化背景图片）
2. 新碟上架的无缝滚动轮播图
3. 底部播放器（自动获取歌曲总时间、自动下一曲播放，循环播放、点击歌单按钮播放等等）
4. 注册、登陆（登陆后跳转到相对应的页面）、以及页面上歌曲点击播放的功能。
5. 歌单详情、评论（专辑和歌曲的加载、歌曲点播、歌词下载、评论功能）
6. 页面之间的数据交互通过url进行单向传输


##用到的插件
1. react-bootstrap    
在react用bootstrap框架，如果用传统的link和script引入的话，最后项目的体积会很大，而且我们一般只会用到bootstrap里面的一部分组件。react-bootstrap可以进行按需加载，在需要的组件引入用到的bootstrap模块。
我在首页的banner轮播图上用到了其中的Carousel模块，利用的是第二种自主扩展模式，可以利用onSelect事件函数，获取当前图片的index，然后设置state中的背景图片地址跟着改变，就实现了图片和背景图同步的效果。
2. fetch   
在项目中遇到需要进行ajax请求的时候，由于原生ajax比较麻烦，而利用jQuery的ajax又需要引入jQuery，影响项目体积，通过查找资料找到fetch小插件，同样可以实现类似ajax请求的功能。在用到的组件上面需要引入：
`require('es6-promise').polyfill(); require('isomorphic-fetch');`
3. react-slick   
在首页中遇到一个无缝滚动并且带动画的轮播图效果，在antd中看到它的轮播图插件，只有简单的几种类型，不能满足要求，但其也是参考的另外一个插件（react-slick）。
react-slick扩展性非常好，里面可以自己设置很多参数，来实现不同的轮播图效果，比如可以通过slidesToShow和slidesToScroll来设置框内的图片数量和一次点击滚动的图片数量。
4. react-player   
在做播放器的时候，原生的HTML5的audio标签也能实现播放器效果，但其功能和界面很单一，通过查找资料找到了react-player插件。react-player功能很丰富，其中提供了很多参数和函数。所以我就通过网易云音乐官方的界面和react-player的功能相结合，实现了比较简单的播放器，由于时间关系，里面很多功能还没加，以后如果再做比较复杂的播放器可以利用这个插件实现。
5. antd    
在写注册登录等功能和布局的时候，引用了蚂蚁金服的ant design模块。 import { Card, Col, Row } from 'antd'; 使用什么组件就在文件就import 什么组件。通过文档可以找到例子的代码与属性方法的设置。https://ant.design/index-cn
6. jquery   
在歌曲列表专辑和歌曲的数据请求、评论的更新和登录判断验证等功能引用了jquery.对元素的获取，页面的js功能实现更加简单，ajax请求更加方便。

##经验总结
1. 样式类冲突,
刚开始各自写组件的样式的时候，没有注意类的取名，最后合并的时候遇到了冲突，后面通过在每个组件最外面定义一个id来封闭这些样式来解决了这个问题。
2. 使用别人插件遇到的问题,
有些插件，封装的很好，简单使用很方便，但扩展性很差，不能定制。这时就需要找一些同类型的扩展性较好的插件，但这些插件里面的参数和函数比较多，相对于的学习成本增加。如果实在找不到合适的插件，也不用太纠结于此，直接用原生或者之前学过的框架实现。
3. 要对框架实现功能有所了解，这样才能快速debug，并且能够通过改些参数得到自己想要的功能。在项目初期挑选框架的时候要做全面的评估。
4. 基础知识，要扎实。不管用什么框架，引用别人的插件，必须重视基础知识。所以多查阅官方文档。
5. 改善查阅解决方法的方法。如 各大神的博客 GitHub Google 等。
6. 项目做下来后，对哪一方面知识应用的还不够灵活 要在空余的时间温故一遍。对一些容易入坑的问题记录下来。
7. 写代码的规范，多加注释。最好可以有一张流程图，把解决问题的思路记录下来。
8. 对项目进行分割很重要，每个人负责各自的模块容易提高做项目的效率。对自己的模块进行的划分与重组可以更好的对代码管理和功能的实现。
9. 多使用工具 git 等
