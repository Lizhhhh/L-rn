# React Native开发基础
- React Native 是一个专注UI构建的框架,设计的初衷是为了屏蔽平台的差异化显示,所以,界面是React Native开发中一个重要的组成部分。

# 3.1 FlexBox布局
- FlexBox是flexible box的缩写,译为"弹性盒布局",FlexBox是React Native开发中必不可少的页面组成部分,下面针对FlexBox的基础属性和实例做简单的讲解

# 3.1.1 FlexBox简介
- 做过前端开发的人都知道,传统的页面布局基于盒子模型而设计,主要依赖定位属性、流动属性和显示属性。而处理一些伸缩性的布局,传统的盒子模型处理起来很麻烦。于是在2009年,由W3C组织提出了一种全新的布局方案,即Flex布局方案。该布局可以解决传统页面无法伸缩的问题,相比传统的盒子布局,FlexBox更加灵活。
- 引入FlexBox布局模型的目的是提供一种更加有效的方式来对一个容器中的条目进行排列、对齐和空白空间分配。即便容器中条目的尺寸未知或是动态变化的,FlexBox布局模型也能正常工作。在FlexBox布局模型中,容器会根据布局的需要,调整其中包含的条目的尺寸和顺序来恰当地填充所有可用地空间,当容器地尺寸由于屏幕大小或窗口尺寸发生变化时,其中包含的条目也会动态的调整
- FlexBox主要由伸缩容器和伸缩项目组成,[flex-container]定义一个伸缩容器,伸缩容器中的每一个子元素都是一个伸缩项目。简单来说,FlexBox就是为了伸缩容器内伸缩项目的布局而设计的.

# 3.1.2 FlexBox布局模型
- FlexBox布局的容器(flex container)指采用了FlexBox布局的DOM元素,而FlexBox布局的条目(flex item)指容器中包含的子DOM元素
- FlexBox布局主要由两个相互垂直的坐标轴组成: 主轴(main axis)和交叉轴(cross axis)。主轴并不一定为水平方向的x轴,交叉轴也不一定为垂直方向的y轴。

# 3.1.3 FlexBox布局属性
- [常用属性]
  - display-flex
  - flex-direction
  - flex-wrap
  - flex-flow
  - justify-content
  - align-items
  - align-content
- display-flex
  - 本属性用来指定元素是否使用弹性盒布局。当使用FlexBox布局的时候,需要先给父容器的display值定位flex(块级)或者inline-flex(行内级)。其语法为:`display: flex`
  - 下面简要介绍下面这两个属性的含义。
  - flex用于块级伸缩属性。实例代码如下:
  ````css
  .flex-container{
    display: flex;
    ...
  }
  ````
  - inline-flex用于行内伸缩属性。示例代码如下:
  ````css
  .flex-container{
    display: inline-flex;
    ...
  }
  ````
- flex-direction
  - 本属性用来控制伸缩容器中主轴的方向,同时也决定了伸缩项目的方向。常用的属性如下:
    - flex-direction: row: 默认值,主轴方向和正常的方向一致,从左到右排列.
    - flex-direction: row-reverse: 和row的方向相反,从右到左排列.
    - flex-direction: column: 从上到下排列
    - flex-direction: column-reverse: 从下到上排列
- flex-wrap
  - 本属性用来控制伸缩容器是单行还是多行,也决定侧轴方向。常见的属性值如下所示。
    - flex-wrap: nowrap: 默认值,伸缩容器单行显示。
    - flex-wrap: wrap: 伸缩容器多行显示;排列顺序由上到下。
    - flex-wrap: wrap-reverse: 伸缩容器多行显示,排列顺序由下到上排列。
- flex-flow
  - 本属性是flex-direction(主轴方向)和flex-wrap(侧轴方向)的缩写。这两个属性决定了伸缩容器的主轴与侧轴,默认值为row nowrap
- justify-content
  - 本属性用来定义伸缩项目在主轴上的对齐方式。当一行上的所有伸缩项目都不能伸缩或伸缩但是已经
  ...

# 3.2 ES6语法基础
- ECMAScript 6 (以下简称ES6)是JavaScript语言的下一代标准,因为ES6是2015年发布的,所以称其为ECMAScript 2015。和上一版ES5不同,ES6引入了大量的新思维和语法,下面重点讨论ES6常见的一些新特性.

# 3.2.1 组件的导入与导出
- 组件导出
  - 在组件导出方面,在ES5语法里,导出类通过`module.exports`来导出:
  ````javascript
  // ES5 导出类
  var MyComponent = React.createClass({
    ...
  })
  module.exports = MyComponent;
  ````
  - 在ES6语法里,使用export default 来导出类或组件
  ````javascript
  export default class MyComponent extends Component {
    ...
  }
  ````
- 组件导入
  - 在组件的导入方面,在ES5语法里,使用CommonJS标准导包,通过require来导入组件.
  - 例如:
  ````javascript
  // ES5 导入 React Native组件
  var ReactNative = require('react-native');
  var {
    Image,
    Text
  } = ReactNative;
  // ES5 导入自定义组件
  var MyComponent = require('./MyComponent');
  ````
  ````javascript
  // ES6 导入 React Native 组件
  import { Image, Text } form 'react-native'
  // ES6 导入自定义组件
  import MyComponent from './MyComponent';
  ````

# 3.2.2 类
- 在传统的JavaScript中,通常使用function和protoType来模拟类的概念,每个函数(function)就是一个对象,而每个函数对象又包含一个prototype对象。但是,在ES6中引入class关键字,添加了对类的支持,使用类的概念之后,对象的创建和继承就更加直观,对父类的调用、实例化、静态方法和构造函数等概念都更加形象化,代码结构也更加清楚直观。JavaScript本身就是面向对象的语言,ES6中提供的类,实际上更加方便开发者对JavaScript原型模型的包装.
- 创建类:
  - 在ES5里,通过React.createClass来创建一个类。
  ````javascript
  // ES5创建类
  var Demo = React.createClass({
    ...
  });
  ````
  - 在ES6里,则可用通过继承自React.Component的class类来定义一个组件类。
  ````javascript
  class Demo extends React.Component {
    ...
  }
  ````
- 组件类方法
  - 在传统的JavaScript中,通常使用function函数来给组件定义方法。在ES6中,则可以直接使用函数名字来定义方法,在方法结束外也不需要使用逗号.
  ````javascript
  // ES5定义类内部方法
  var Demo = React.createClass({
    componentWillMount: function(){
    },
    ...
  });
  // ES6 定义类内部方法
  var Demo = React.createClass({
    componentWillComponent(){
    }
    ...
  });
  ````
# 组件的属性与属性类型
  - 在ES5语法中,属性类型和默认属性通过propTypes和getDefaultProps()来实现。
  - 例如:
  ````javascript
  var Video = React.createClass({
    getDefaultProps: function() {
      return {
        autoPlay: false,
        maxLoops: 10
      };
    },
    propTypes: {
      autoPlay: React.PropTypes.bool.isRequired,
      maxLoops: React.PropTypes.number.isRequired,
      videoSrc: React.PropTypes.string.isRequired,
    },
    ...
  })
  ````
  - 在ES6里,统一使用static成员来修饰属性类型和默认属性。例如:
  ````javascript
  // ES6属性与属性类型定义
  class Video extends React.Component {
    static defaultProps = {
      autoPlau: false,
      maxLoops: 10,
    };
    static propTypes = {
      autoPlay: React.PropTypes.bool.isRequired,
      maxLoops: React.PropTypes.number.isRequired,
      videoSrc: React.PropTypes.string.isRequired,
    };
    ...
  }
  ````

# 3.2.3 状态变量
  - 在React框架中,所有的界面被视为一个简单的状态机,那么任意一个UI场景就是状态机中的一种状态。状态机的状态一旦发生变化,就会触发界面的重新渲染。
  - 在ES5语法中,React Native 的状态变量在getInitialState()中声明。例如:
  ````javascript
  // ES5 状态机变量的声明
  let Index = React.createClass({
    getInitialState: function (){
      return {
        var1: 'value of var1',
        var2: 30,
        var3: true
      }
    };
  })
  // ES6状态机变量声明
  var Index extends Component {
    constructor(props) {
      super(props);
      this.state ={
        var1: 'value of var1',
        var2: 30,
        var3: true
      }
    }
  }
  ````
# 3.2.4回调函数
  - 在ES5语法中,回调函数可以直接调用本地组件的某个成员方法。例如:
  ````javascript
  // ES5添加回调函数
  let Login = React.createClass({
    getInitalState: function () {
      return {
        inputedNum: ''
      };
    },
    updateNum: function (num) {
      // 更新成员数量作为回调函数
      this.setState((state) =>{
        return {
          inputedNum: num
        };
      });
    },
    // 省略...
    render: function () {
      return (
        <View style = {styles.container}>
          <TextInput style={styles.innerViewStyle}
            placeholder = {"请输入账号"}
            // 指定第一个回调函数
            onChangeText = { (num) => this.updateNum(num)}
          />
          // 省略...
        </View>
      );
    }
  });
  ````
  - 在使用ES6语法编写React Native组件时,组件的回调函数必须在组件的构造函数中执行绑定操作。使用ES5语法绑定舰操作也是在这一步,但是React类的createClass()代劳了这一操作,React.createClass()会把所有的方法都绑定一遍。使用ES6绑定回调函数时,开发者必须手动在代码中添加绑定操作。例如;
  ````javascript
  // ES6开发者在构造函数中手动添加绑定
  class Login extends Component {
    constructor (props) {
      super(props);
      this.state = {
        inputedNum: ''
      };
      // 手动绑定回调函数
      this.updateNum = this.updateNum.bind(this);
    }
    updateNum(num) {
      this.setState((state) => {
        return {
          inputedNum: num
        };
      });
    }
    // 省略...
    render() {
      return (
        <View style= {styles.container}>
          <TextInput style={styles.innerViewStyle} placeholder ={"请输入账号"}>
          // 指定回调函数
          onChangeText = { (num) => this.updateNum(num) }
        />
        </View>
      );
    }
  }
  ````

  # 3.2.5 参数
    - ES6对参数的写法做了较大的改动,主要体现在参数默认值、不定参数、扩展参数方面。
  # 参数默认值
    - 通常来说,函数调用者不需要传递所有可能存在的参数,没有被传递的参数可由默认的参数进行填充。JavaScript有严格的默认参数格式,未被传值的参数默认为undefined。
    - 在ES5语法中,对于默认值的设定,往往需要通过逻辑或操作符运算来设置。而在ES6中,系统允许开发者在函数定义的时候就指定任意参数的默认值。例如:
    ````javascript
    // 设置默认参数
    function sayHello(name) {
      // 传统的指定默认参数的方式
      var name = name || 'dude';
      console.log('Hello ' + name);
    }
    // 运用ES6的默认参数
    function sayHello2(name='dude'){
      console.logz(`Hello ${name}`);
    }
    ````
# 不定参数
  - 在传统的JavaScript代码中开发者可以通过arguments变量来接收任意数量的参数,例如: string.prototype.concat()就可以接受任意数量的字符串参数。ES6提供了一种可变参函数的新方式---不定参数
  - 不定参数指在函数中使用命名参数,同时接受不定数量的未命名参数。不定参数的格式是3个句点后跟代表所有不定参数的变量名。例如:
  ````javascript
  // 将所有参数相加
  function add(...x) {
     return x.reduce((m, n) => m + n);
  }
  // 传递任意个数的参数
  console.log(add(1,2,3))
  ````

# 扩展参数
  - ES6语法提供了一种新的参数格式,它允许传递数组或者类数组,直接作为函数的参数kai,而不通过apply方法。例如:
  ````javascript
  // ES6扩展参数
  var people = ['Wayou', 'John', 'Sherlock'];
  function sayHello(people1, people2, people3) {
     console.lg('Hello ${people1}, ${people2}, ${people3}');
  }
  // 以扩展参数的形式传递
  sayHello(...people);
  ````
# 3.2.6 箭头操作符
  - ES6新增了一种新的语法格式: 箭头操作符 (=>),用来简化函数的书写。该操作符左边为输入参数,使用圆括号包含参数部分,而右边则是操作结果或返回的值。例如,在JavaScript中,回调是一种常见的操作,在ES6之前,每次使用匿名回调函数都需要写一个function,甚是繁琐。

# 3.2.7 Symbol
  - 在ES5之前没办法创建私有变量,只能通过封装来解决问题,而symbol得到来为JavaScript开发者带来福音。利用Symbol创建私有变量的代码如下:
  ````javascript
  // 创建一个Symbol
  let name = Symbol();
  let person = {};
  person[name] = '张三';
  ````
  - 使用Symbol创建私有变量的时候,还可以传入字符串。例如:
  ````javascript
  var s1 = Symbol('abc');
  var s2 = Symbol('abc');
  console.log(s1 === s2);  // false
  ````
  - 说明: 任意两个Symbol创建的变量都不相等,即使使用相同的参数。
  - Symbol作为基本类型,开发者可以使用typeof操作符来判断变量是否为Symbol类型,如果是Symbol类型则返回"symbol".
  ````javascript
  let symbol = Symbol();
  console.log(typeof symbol);   // 结果输出"symbol"
  ````
  - 由于每个Symbol的值都是不相等的,这意味着Symbol的值可以作为标识符用于对象的属性名,从而保证不会出现同名的属性。例如:下面两种写法其结果是相同的:
  ````javascript
  var mySymbol = Symbol();
  // 第一种写法
  var a = {};
  a[mySymbol] = 'Hello!';
  // 第二种写法
  var a = {
    [mySymbol]: 'Hello'
  }
  ````
# Symbol属性名遍历
  - Symbol作为属性名既不能作为for循环的对象,也不能使用Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()来操作Symbol属性。但是可以通过Object.getOwnPropertySymbol()获取指定对象的所有Symbol属性名。
  ````javascript
  var obj = {};
  var a = Symbol('a');
  var b = Symbol('b');

  obj[a] = 'Hello';
  obj[b] = 'World';
  // 返回obj对象所有Symbol类型的属性名组成的数组
  var objectSymbol = Object.getOwnPropertySymbols(obj);
  console.log(objectSymbols);
  // 输出结果 [Symbol(a), Symbol(b)]
  ````
# Symbol.for()和Symbol.keyFor()
  - Symbol.for(字符串参数): 在全局环境种搜索以该字符串作为参数Symbol值,如果搜到则返回这个Symbol,如果搜不到则创建一个Symbol,并把它注册在环境中。
  ````javascript
  var obj = {};
  // 第一次搜不到,则新创建一个
  var a = Symbol.for("tom");
  // 第二次加入搜索
  var b = Symbol.for("tom");
  console.log(a===b);   // 返回true
  ````
  - Symbol.keyFor(symbol): 返回一个已经注册的Symbol对象的key.
  ````javascript
  var a = Symbol('tom');
  var b = Symbol.for('tom');
  console.log(Symbol.ketFor(a));    // 输出 undefined
  console.log(Symbol.keyFor(b));    // 输出 tom
  ````
# 3.2.8 解构
  - 在ES5或更早的版本中,若一个函数要返回多个值,常规的做法是返回一个对象,将每个值作为这个对象的属性返回,这样就需要书写很多相似的代码。
  ````javascript
  var options = {
    repeat: true,
    save: false
  };
  var repeat = options.repeat,
  save = options.save;
  ````
  - 在ES6中,利用解构这一特性,可以直接返回一个数组或者对象,然后利用数组或对象的属性将值解析到对应的变量中.

# 对象解构
  - 对象解构,就是在赋值语句的左侧使用类似对象的结构。
  ````javascript
  let node = {
    type: "student",
    name: "tom"
  };
  // 对象结构
  let {type, name} = node;
  ````
  - 改变声明变量的值
  ````javascript
  let node = {
    type: 'student',
    name: 'tom'
  },
  type = 'teacher',
  name = 'jack';
  // 注意: 必须要在圆括号内才能使用解构表达式
  ({type, name} = node)
  ````

# 数组解构
  - 数组解构和对象解构类似,只是将操作的对象换成了数组,而解构操作使用的是数组内部的索引。
  ````javascript
  let colors = ["red", "green", "blue"];
  let [ firstColor, secondColor ] = colors;
  console.log(firstColor);
  console.log(secondColor);
  ````
  - 只读取数组中某一项的值
  ````javascript
  let colors = ["red", "green", "blue"];
  // 只取数组中的第三项的值
  let [,,thirdColor] = colors;
  console.log(thirdColor);
  ````
  - 在数组解构中一个常用的功能是交换两个变量的值
  ````javascript
  let a = 3, b = 4;
  [a, b] = [b, a];
  console.log(a);
  console.log(b);
  ````

