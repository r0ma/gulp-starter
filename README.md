gulp-happy-starter
============

It's fork of [https://github.com/greypants/gulp-starter](https://github.com/greypants/gulp-starter).
Starter Gulp + Browserify project with examples of how to accomplish some common tasks and workflows. Read the [blog post](http://viget.com/extend/gulp-browserify-starter-faq) for more context, and check out the [Wiki](https://github.com/greypants/gulp-starter/wiki) for some good background knowledge.

Includes the following tools, tasks, and workflows:

- [Browserify](http://browserify.org/) (with [browserify-shim](https://github.com/thlorenz/browserify-shim))
- [Watchify](https://github.com/substack/watchify) (caching version of browserify for super fast rebuilds)
- [SASS](http://sass-lang.com/)(uses fast C/C++ port [LibSass](http://libsass.org/)) with source maps
- [TypeScript](http://typescriptlang.org/) with source maps
- [Jade](http://jade-lang.com/) template engine
- [BrowserSync](http://browsersync.io) for live reloading and a static server
- Image optimization
- Error Notifications in Notification Center
- Non common-js vendor code (like a jQuery plugin)

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally

Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*


```
npm install -g gulp
```

Alternatively, you can run the version of gulp installed local to the project instead with


```
./node_modules/.bin/gulp
```


### Install npm dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp and be amazed.

```
gulp
```

This will run the `default` gulp task defined in `gulp/tasks/default.js`, which does the following:
- Run 'watch', which has 2 task dependencies, `['setWatch', 'browserSync']`
- `setWatch` sets a variable that tells the browserify task whether or not to use watchify.
- `browserSync` has `watch` as a task dependecy, so that all your assets will be processed before browserSync tries to serve them to you in the browser.

```
gulp build
```

This will minimize assets and html code. (Look at code in gulp/tasks/optimize.js if your assets path is broken on server).

