// const $ = require('jquery')
import $ from 'jquery'
import 'weui'
// require('weui')
// 把样式文件当作模块引入到代码里面
import './assets/styles.scss'
import header from './template/header.html'
import search from './template/search.html'
import panel from './template/panel.html'
// const styles = require('./assets/styles.scss')
// const header = require('./template/header.html')
// const search = require('./template/search.html')
// const panel = require('./template/panel.html')
$('body').html(header+search+panel)

// es6  规范
// import template from './assets/template.txt'
// es5 commonn.js规范
// const template = require('./assets/template.txt')
// console.log(template.default)
// const fs = require('fs')
// $('body').html(template.default)
// console.log(1)