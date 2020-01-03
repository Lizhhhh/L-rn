# 说明
- 尽管在移动开发中,原生App的开发成本很高,但现阶段基于原生开发仍然是必须的,因为Web的用户体验仍无法超越Native,主要体现在:
  - Native的原生控件有更好的体验
  - Native有更好的手势识别
  - Native有更合适的线程模型,尽管Web Worker可以解一部分问题,但如图像解码、文本渲染仍无法多线程渲染,这影响了Web的流畅性

# 一、开篇
- React Native于F8大会开源,在短短不到一年的时间里,它称为手机端必不可少的开发模式之一。它充分利用了FaceBook现有的业务轮子,其核心设计理念: 既拥有Native的用户体验、又保留React的开发效率.
- 目前,React Native基本完成了对多端的支持,实现了真正意义上的面向配置开发: 开发者可以灵活使用HTML和CSS布局,使用React语法构建组件,实现: H5、Android、IOS 多端代码复用.


# 二、什么是React Native?
- (一) 时下两大移动互联网主流技术
  - BAT等一线互联网公司的插件化,热修改技术
  - React Native技术(2016年,随着Android版本的文档,更加火爆)

- (二) React Native介绍
  - Facebook于2015年9月15日发布React Native
  - 广大开发者可以使用JavaScript和React开发跨平台移动应用
  - React Native体长组件化开发: