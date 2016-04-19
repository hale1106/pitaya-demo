## Installation
clone项目后，进入项目pitaya-demo，安装依赖包

```bash
cd pitaya-demo
npm install 
```
##	相关API
	*	gulp demo
		*	启动调试服务，不做压缩，去缓存处理，默认启动9000端口，如需改端口，可在abc.json里修改port
		*	自动监听文件变动，调试时修改文件直接刷新浏览
	*	gulp debug
		*	启动调试服务，会做压缩，去缓存处理，完全模拟线上环境，默认启动9000端口，如需改端口，可在abc.json里修改port
		*	自动监听文件变动，调试时修改文件直接刷新浏览
	*	gulp build
		*	构建并在项目根目录/webapp下生成压缩、加md5去缓存后完整上线项目，并会对构建后的图片做压缩处理
		*	然后就可以用该目录发布上线啦
    *   gulp imagemin
            *   已集成在build命令中
            *	如单独使用，会对构建后的图片做压缩处理