# 移动App第一天

## 1.什么是混合移动App开发 【重点】
1. 苹果上的软件是如何开发出来的: 使用的是OC、或者Swift这门语言
2. 安卓平台上的软件又是如何开发出来的: 使用Android相关的语言开发的,Java,安卓的控件来进行开发
3. 苹果和安卓平台上的软件是如何开发出来的: xx招两套开发人员[开发组]
4. 前端移动App(Application)开发技术,去开发手机端的应用程序
5. 前端的混合移动App开发技术,并没有使用苹果或安卓官方推荐的开发平台和开发方式,而是抛弃了官方提供的方式,使用前端特有的技术,进行移动App开发体验!

> 什么是移动App开发: 通俗理解,就是把开发Web网站的技术(HTML+CSS+JS),通过某种方式,移植到App开发商进行使用,这种利用Web开发进行移动端开发体验的方式,叫做混合移动App开发!

### 1.1关于移动App开发,需要知道的几个概念
+ 原生开发: NativeApp, 指的就是使用 IOS、Android 官方提供的工具、开发平台、配套语言 进行手机App开发的方式。
+ 混合开发: HybirdApp, 使用前端已有的技术(HTML + CSS + JS),搭配一些相关的打包编译技术,开发出一个手机App,安装到手机钟进行使用。
+ 什么是App: Application的缩写,可安装的应用程序.
+ App的分类:
  - 按照平台划分:
    + PC端: 浏览器、代码编辑器(VS Code)、PC端的游戏、音乐播放器、视频播放器...
    + 移动端: 聊天工具、视频工具、手游...
  - 按照功能来划分:
    + 游戏: 愤怒的小鸟、植物大战僵尸...
    + 应用: 非游戏类的App(支付宝...)
+ App和Web的区别:
    + App概念: Application的缩写,可安装的应用程序.
      - 优点: 流畅、稳定、某些App可用脱网运行,用户体验好
      - 缺点: 不能跨平台
    + Web概念: 特指那些基于浏览器的Web网站(本质: 就是网页)
      - 优点: 可用跨平台(天生)
      - 缺点: 没有App流畅、不稳定,受限于网速和网络

## 2.为什么要学混合App开发
### 2.1从程序员的角度分析
1. 扩展自己能做的事
2. 能够接触到前端流行的技术和框架(在React中,全部都使用ES6语法)
+ 前端的发展: `只能做页面` -> `Ajax前后数据交互` -> `Jquery Bootstrap` -> `Web App`(网站端的开发,网站功能很复杂,与真正App功能基本无异) -> `三大框架`(Angular,React,Vue) -> `可用做手机混合App/桌面应用` -> `手机原生App` -> 大胆猜测`发射火箭,发射卫星,发射导弹!!!` -> `统一全宇宙....`

### 2.2从企业的角度分析: (选择合适自身的移动App开发方式) 【重点】
- 节省开发成本
  + 从工资上: 尽最大的可能,压榨员工的剩余劳动力
  + 从时间上: 原生的Android和IOS开发,开发效率并不事很高.原生的代码迭代比较多,比较复杂!开发周期比较久;如果采用移动Web开发,开发周期会很短(HTML + CSS + JS)足够简单.
- 市面上常见的App开发方式
  + WebApp: 基于浏览器实现的,有特定功能的网站,称作WebApp
     - 例如: 百度脑图、淘宝移动端...
     - 优点: 跨平台
     - 缺点: 依赖网络,有白屏效果,用户体验差;没有提供硬件底层设备
  + NativeApp: 用android和Object-C等原生语言开发的应用
     - 优点: 体验好;用户使用起来很流畅;非常适合做游戏【性能高】;可以直接调用底层硬件API;
     - 缺点: 不能跨平台
  + HybirdApp: 利用前端所学的知识去开发移动端App,兼具2者的优势
     - 优点: 能够跨平台;体验会更好一些;能够调用硬件底层的API
     - 缺点: 相对于原生体验稍微弱一丢丢;不适合做游戏;适合做非游戏类型的手机App
  + 注意: 在 Java 或者 IOS 写出来的代码和程序,在最终运行的适合,普通的文本代码,会被编译为原生的机器码去执行,并不像JS(解析执行),Java代码是编译运行的;

## 3.企业中项目开发流程
  + 需求调研: 产品定位、受众群体、市场需求、开发价值;【产出物: 需求文档】
  + 产品设计: 功能模块、流程逻辑;【产出物: 设计文档,交互稿】, 确定项目的基本功能;
  + 项目开发: 项目架构、美工、后台、测试【产品的把控】 **要理解前后端分离的概念**
  + 运营维护: 上线运行、调Bug、微调功能模块、产品迭代

> 根据需求搞设计,根据设计做开发

## 4.企业技术选型 - 几大主流技术之间的关系
1. Angular.js 和 Ionic
  + [Angular1官网](https://angularjs.org/)
  + [Angular2官网](https://angular.io/)
  + [Icon中文网](http://www.ionic.wang/)
  + [Icon 英文网](http://ionicframework.com/getting-started)
2. Vue.js 和 Weex
  + [Vue.js官网](https://cn.vuejs.org)
  + [Weex文档](http://weex.apache.org/cn/references/index.html)
  + [Weex - github地址 - 新](https://github.com/apache/incubator-weex)
  + [Weex - github地址 - 旧](https://github.com/alibaba/weex)
3. React.js 和 React-Native
  + [React.js英文官网](https://facebook.github.io/react)
  + [ReactNative中文网](http://reactnative.cn)
  + [ReactNative英文网](http://facebook.github.io/react-native)

> Angular,Vue,React 这三个都是前端框架,我们进行混合App开发的时候,这是用到了这三个框架的基础语法而已
> Ionic,Weex,ReactNative这三个都是打包工具(提供了相关的命令行,只要指定的命令,就能把项目打包成一个手机App出来),能够把我们开发出来的应用,最终打包成一个可安装在手机端程序安装包;同时,这三个东西,也提供了好用的一些小组件

## 5.前端混合App开发框架
1. Html5+、ReactNative、Weex、Ionic
2. [认识HTML5+](http://www.html5plus.org/#home)
    + h5+是一个产业联盟,它有一些互联网成员,专门在中国推广H5
3. [HBuilder官网](http://www.dcloud.io)

## 6.开发框架之间的区别
1. Html5+ 和 Ionic
    - 要先做出来一个完整的网站,然后,在网站的基础上,使用H5+ 或 Ionic提供的打包技术,把网站打包成一个应用
    - 为什么要打包:
      1. 为了安装到手机上
      2. 为了调用底层API
    - 打包好之后,就得到一个apk包(安卓应用),这个应用的内部运行的
    - [优点] : 开发效率高;
    - [缺点] : 内部本质上是一个网站,运行效率和性能不太好
2. ReactNative 和 Weex
    - 首先需要开发出一个完整的项目(不是一个网站,而是一个模板项目),<font color=red>既不能在网页中运行,也不能在移动端中运行</font>
    - 通过 RN 或 Weex 提供的打包命令行指令,将模板代码翻译成移动端的 Java 或 OC 代码;最终得到一个原生的App项目.
    - [优点] : 使用前端技术开发(开发成本更低),开发出来的应用性能好,更流畅.
    - [缺点] : 暂时,可用使用的组件比较少

## 环境变量的作用
将需要全局使用的工具或者应用程序,配置到Path环境变量中,可以很方便的通过命令行的形式,在任何想要运行这些应用程序的地方,运行它们


# 移动App第二天
## 1.ReactNative快速使用
### 1.1 ReactNative的安装
1. 安装完[node](https://nodejs.org/en/)后,建议设置npm镜像以加速后面的过程(或使用科学上网工具)。注意:**不要使用cnpm!** cnpm 安装的模块路径比较奇怪,package不能正常识别!
>  npm config set registry https://registry.npm.taobao.org --global
   npm config set disturl https://npm.taobao.org/dist -- global

2. Yarn、React Native的命令行工具(react-native-cli)
  - Yarn是FaceBook提供的代替npm的工具,可以加速node模块的下载。React Native的命令行工具用于创建、初始化、更新项目、运行打包服务等任务。

  > npm install -g yarn react-native-cli

  - 安装完yarn后同理也要设置镜像源:
  > yarn config set registry https://registry.npm.taobao.org --global
    yarn config set disturl https://npm.taobao.org/dist --global

3. 运行 `react-native init AwesomeProject` 创建React-Native项目
4. 运行 `cd AwesomeProject` 切换到项目根目录中, 运行 `adb devices`来确保有设备连接到了电脑上
5. 运行 `react-native run-android`打包编译安卓项目,并部署到模拟器或开发机中
6. 运行上一条命令之间,要确保有设备连接到了电脑上,可以运行`adb devices`查看当前介入的设备列表,打包好的文件,放到了 `android\app\build\outputs\apk` 目录下


## 2. Webpack的准备
- 在学React-Native之前,必须有React作为前驱学科.(RN几乎都是使用的react语法进行开发的)
- 学React之前,先需要了解Webpack(node编写),因为它相当于将React的语法,通过Webpack和React语法转换成最终的 html + css + javascript
- 学习Webpack更深层次的理由是,可以使用Webpack来极大的提高开发效率(如使用ES6进行开发)
- 所以下面的学习路径是 Webpack(深度学习) -> React -> React Native

### 2.1 Webpack发布的策略
1. 在实际开发中,一般会有两套方案:
   + 开发期间的项目:包含了测试文件、测试数据、开发工具、测试工具等相关配置,有利于项目的开发和测试,但是这些文件仅用于开发,发布项目的时候需要删除
   + 部署期间的项目,剔除了那些客户用不到的测试数据、测试工具和文件,比较纯净,减少了项目发布后的体积,有利于开发和部署
2. 为了满足我们的发布策略,需要新建一个配置文件,命名为`webpack.publish.config.js`,将`webpack.config.js`的配置拷贝过去,剔除一些开发配置项即可.
   + 将`devSever`节点删掉:
   ```
   devServer: {
     hot: true,
     open: true,
     port: 4321
   }
   ```
   + 将`plugins`节点下的热更新插件删掉:
   ```
   new webpack.HotModuleRupluComuntPlugin()
   ```

## 3. Webpack从0开始使用
### 3.1 项目初始化
<font color=red>注</font>: node当前的版本是 12.10.0
1. 新建项目(文件夹)`webpack-senior`
2. 进入`webpack-senior`新建下面三个:
    - 打包之后的文件夹: `dist`
    - 项目的源代码: `src`
    - webpack的配置文件: `webpack.config.js`
3. 初始化项目: `npm init -y`
    - 使用yarn安装 jquery: `yarn add jquery` (等同于 npm i -D jquery)
4. src的初始化,在其中新建如下文件和内容:
    - `src/index.js`
    ````html
    <html>
       <body>
         <ul>
           <li>这是第1个li</li>
           <li>这是第2个li</li>
           <li>这是第3个li</li>
           <li>这是第4个li</li>
         </ul>
       </body>
    </html>
    ````
    - `src/main.js`
    ````javascript
    import $ from 'jquery'
    $(function(){
      $('li:odd').css('backgroundColor','pink');
      $('li:even').css('backgroundColor','marron');
    })();
    ````
5. 上面完成了简单的页面和js对页面的操作,下面写Webpack的配置文件(webpack使用配置文件对项目进行打包构建)
    - `webpack.config.js`
    ````js
    const path = require('path');

    module.exports = {
      entry: path.join(__dirname, './src/main.js'),
      output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
      }
    }
    ````
    - 以上代码指明了webpack的入口和打包文件,下面需要装2个插件来使index.html和main.js在内存中生成:
    1. `yarn add webpack --dev`(webpack是在开发环境中进行的,因此需要在npm中使用-S,在yarn中则变为 --dev)
    2. `yarn add webpack-dev-server html-webpack-plugin --dev`: 安装在内存中生成index.html和main.js的插件,改写`webpack.config.js`如下:
    ````js
    const path = require('path');
    const htmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      entry: path.join(__dirname, './src/main.js'),
      output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
      },
      plugin: [
        new htmlWebpackPlugin({
          template: path.join(__dirname, './src/index.html'),
          filename: 'index.html'
        })
      ]
    }
    ````
    - 上面已经将html页面放到了内存中,接下来配置启动命令:`package.json`
    ````json
    {
      "scripts": {
        "dev": "webpack-dev-server --open --port 3000 hot"
      }
    }
    ````
6. 小检测点:对上面过程进行说明
  - 从启动命令`npm run dev`说起
    - 当在命令行,输入 `npm run dev`时
    - 工具: `webpack-cli`(安装在开发环境, yarn add webpack-cli --dev),会以命令行启动的目录作为当前目录,去寻找`package.json`文件
    - 找到`package.json`文件后,会寻找`"scripts"`
    - 找到`scripts`对象后,进而找到"dev"
    - 然后运行命令`webpack-dev-server --open --port 3000 --hot`
    - `webpack-dev-server`:
    1. 每次写完代码手动调用webpack去打包代码太麻烦,因此使用 webpack-dev-server来进行自动打包构建
    2. 会根据`package.json`中output的配置,生产一个内存中的`main.js`文件.

### 3.2 webpack中loader的配置
webpack默认只能解析`.js`和`.json`文件,若想解析其他类型的文件,需要配置loader

#### 3.2.1 配置loader解析`.scss`
1. 在src目录下新建目录结构`/src/css/index.scss`
2. 在`index.scss`中写入如下:
````scss
html,
body {
    margin: 0;
    padding: 0;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li{
      font-size:12px;
      line-height: 30px;
      padding-left: 10px;
    }

    .box {
		  width: 500px;
		  height: 230px;
      background: url('../images/开心.gif');
      background-size: cover;
    }
}
````
3. 在`/src/index.html`中添加如下:
````html
<div class="box"></div>
````
4. 在main.js中导入`index.scss`:
````javascript
import './css/index.scss';
````
此时项目肯定启动不了,因为未配置loader的webpack不能解析`.scss`,下配置:

  - 解析CSS、SCSS、URL加载
      -  安装依赖: `yarn add style-loader css-loader sass-loader node-sass url-loader file-loader --dev`

  ````js
  // webpack.config.js
  module.exports = {
    module:{
      rules:[
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|gif|bump|jpg)$/, use: ['url-loader?limit=5000']}
      ]
    }
  }
  ````
  - 解析ES6的高级语法
    - 安装依赖: `yarn add babel-core babel-loader babel-plugin-transform-runtime babel-preset-env babel-preset-stage-0 --dev`
    ````javascript
    // webpack.config.js
    module.exports ={
      module:{
        rules:[
          { test:/\.js$/, use:'babel-loader', exclude: /node_modules/ }
        ]
      }
    }
    ````
    ````js
    //  .babelrc
    {
      "presets": ["env", "stage-0"],
      "plugins": ["transform-runtime"]
    }
    ````
    - `Error: Cannot find module '@babel/core'`: 查看报错,是因为`babel-loader`的版本过高,根据提示输入`yarn add babel-loader@7 --dev`即可
    - `Module not found: Error: Can't resolve 'scss-loader' in 'D:\L-rn\HeiMa\webpack-senior'`:没有找到`scss-loader`模块,打开package.json可以看到,里面有一个'sass-loader',将`webpack.config.js`中的scss改为sass即可.

## 4. 使用Webpack打包项目
现在假设项目已经开发完毕,并且打算使用webpack将项目进行打包.

### 4.1 直接在命令行输入`webpack`命令进行打包
  - 直接打包,生成的项目体积会很大,许多不需要的内容都会被打包在里面

### 4.2 优化打包
  - 1.新建一个打包时的webpack配置文件: `webpack.pub.config.js`
  - 2.新建一个打包指令:`package.json`
  ````json
  {
    "scripts": {
      "build": "webpack --config webpack.pub.config.js"
    }
  }
  ````
  - 3.将打包后的所有图片放到`dist/images`中统一管理
    - 改变`webpack.pub.config.js`
  ````javascript
  module.exports ={
    module: {
      rules:[
        { test:/\.(png|gif|bump|jpg)$/, use: ['url-loader?limit=5000&name=images/[hash:8]-[name].[ext]']}
      ]
    }
  }
  ````
  - 4.每次打包都删除之前的dist文件
    - 安装插件 `yarn add clean-webpack-plugin --dev`
    - 配置: `webpack.pub.config.js`
    ````javascript
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    module.exports = {
      plugins: [
        new CleanWebpackPlugin()
      ]
    }
    ````
    - <font color=red>TypeError: cleanWebpackPlugin is not a constructor</font> : 规则配置的时候出错,不需要传入参数下面是官网原话,拿出组件时,用到了结构赋值.
    > By default, this plugin will remove all files inside webpack`s output.path directory,as well as all unused webpack assets after every successful rebuild

  - 5.将自己的代码和第三方包分离
    - `webpack.pub.config.js`
    ````javascript
    const webpack = require('webpack');
    const WebpackPlugin = new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename: 'common.js'
    });
    module.exports = {
      entry: {
        app: path.join(__dirname, './src/main.js'),
        common: ['jquery']
      },
      plugins:[
        WebpackPlugin
      ]
    }
    ````
    - 自动优先加载第三方模块,在加载自己的代码.
    &nbsp;

  - 6.将所有js文件放到js文件夹下面
    - webpack.pub.config.js
    ````git
    const WebpackPlugin = new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    -  filename: 'common.js'
    +  filename: 'js/common.js'
    });
    module.exports = {
      output: {
    -    filename:'[name].js'
    +    filename:'js/[name].js'
      }
    }
    ````
  - 7.压缩js代码
    ````js
    // 压缩JS代码
    const UglifyJsPlugin = new webpack.optimize.UgliJsPlugin({
      compress:{
        warnings: false
      }
    });

    // 定义生产环境,进一步压缩代码
    const DefinePlugin = new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'production'
    });

    module.exports = {
      plugins:[
        UglifyJsPlugin,
        DefinePlugin
      ]
    }
    ````
    &nbsp;
  - 8.压缩HTML代码
    - webpack.config.js
    ````javascript
    const HtmlPlugin = new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      minify:{
        // 合并多余的空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
        // 移出属性上的双引号
        removeAttributeQuotes: true
      }
    });
    ````
    - 更多minify参数: [官方github](https://github.com/kangax/html-minifier#options-quick-reference)
    &nbsp;
  - 9.将css代码从js中抽离出来放在同一个文件夹下
    - [官网](https://github.com/webpack-contrib/extract-text-webpack-plugin)
    - `yarn add extract-text-webpack-plugin --dev`
    ````javascript
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    module.exports = {
      module: {
        rules:[
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin("style.css")
      ]
    }
    ````
    - 报错`Module build failed: CssSyntaxError`: 注释掉css的配置文件如下
    ````javascript
    module.exports = {
      module: {
        rules[
    //      {
    //        test: /\.css$/,
    //        use: ExtractTextPlugin.extract({
    //          fallback: "style-loader",
    //          use: "css-loader"
    //        })
    //     }
        ...
        ]
      }
    }
    ````
  - 10.抽离css时候,图片路径不正确
    - 我们希望将CSS从js代码中抽出,单独存放在一个css文件夹下面.
    - 如果css中使用到了url属性(如`{background: url(path)}`),在抽离出来后路径会发生变化.
    - 需要在抽离后,自动添加路径如下:
    ````git
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
    +   publicPath: '../'
      })
    }
    ````
  - 11.压缩css文件
    - `yarn add optimize-css-assets-webpack-plugin --dev`
    ````javascript
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
    plugins: [
      new OptimizeCssAssetsPlugin()
    ]
    ````
    - `TypeError: Cannot read property 'compilation' of undefined`: 版本问题: `yarn add optimize-css-assets-webpack-plugin@3.2.0 --dev`

***

# 移动App最后一天
## 检测点
### 1.webpack如何提高效率
- 从文件中打开`.html`文件时,首先从磁盘上加载该文件的内容到内存中,然后在进行渲染
- 磁盘和内存的交互,远远没有内存中直接操作快
- `html-webpack-plugin` : 会根据给定的模板文件,生成在内存中的主页
- `webpack-dev-server` : 会根据配置,生成一个在内存中的主入口函数
- 优点是把能在内存中操作的部分,都放到内存中操作.缺点比较占用内存.

### 2.yarn和npm的命令行在使用的时候有什么区别.
- 首先理解`开发环境`和`生产环境`
- `开发环境`: 即开发过程中使用到的依赖,在npm中常常使用`-D`来将依赖添加到开发环境("devDependencies")中
- `生产环境`: 项目部署到服务器上所用到的依赖,在npm中常常使用`-S`来讲依赖添加到生产环境("dependencies")中
- 在yarn中,使用`yarn add`默认将包放在生产环境中,即对应npm的 `-S`
- 若需要添加到开发环境中,则需要使用`yarn add [packagename] --dev`

### 3.webpack中loader和plugins的区别
- 原生的webpack只能理解javascript和json文件,如果遇到如.css或.jsx这类的后缀名,是无法解析的,这个时候就需要用到loader了,而某些loader无法解析的,就用到plugins.
- loader是在开发过程用到的插件,而plugin贯彻整个开发和项目部署

### 4.几个产出路径的概念梳理



