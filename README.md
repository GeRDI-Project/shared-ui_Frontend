# Static UI module for GeRDI 

> This package contain the static components of GeRDI project.

## How to add static-ui to npm devDependencies

run the following command in terminal
```
npm install git+https://code.gerdi-project.de/scm/ux/static-ui.git --save-dev
```

## How to update static-ui package

run the following command in terminal
```
npm update static-ui
```

## Add new static component to the static-ui package

By following these steps, we can add new static component to this package.
1.  Clone the static-ui repository ``https://code.gerdi-project.de/scm/ux/static-ui.git``.
2.  Run this node commend ``npm install``
3.  Under folder ``src`` create a Single file component of vue.js and add content in this component.
4.  Open file ``index.js`` in folder ``src``.
5.  Import the vue component like import ComponentName from ``./ComponentFile.vue``
6.  Then register this component in function install like ``Vue.component('static-newComponent', ComponentName)``
7.  Then run this command in terminal ``npm build``
8.  Then update the package version numer in ``package.json`` file 
9.  Then comment and push the changes to repository master.
10. Then process with new installation or update of ``static-ui`` module in your respective project

## Build Setup

``` bash
# install dependencies
npm install

# make a build 
npm build
```