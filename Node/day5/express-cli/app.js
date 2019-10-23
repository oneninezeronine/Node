var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup jade预编译语言
// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
// 设置语法为jade
app.set('view engine', 'jade');

app.use(logger('dev'));
// 解析post请求体
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 解析cookie的
app.use(cookieParser());
// 设置静态文件
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // 如果上面的中间全部都找不到结果，那向前端返回404
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 服务器错误
  res.status(err.status || 500);
  // jade erroer.jade
  res.render('error');
});

module.exports = app;
