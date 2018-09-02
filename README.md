# Shared UI module for GeRDI 

> This package contain the shared components of GeRDI project.

## How to add shared-ui to npm devDependencies

run the following command in terminal
```
npm install git+https://code.gerdi-project.de/scm/ux/shared-ui.git --save-dev
```

## How to update shared-ui package

run the following command in terminal
```
npm update shared-ui
```

## Add new shared component to the shared-ui package

By following these steps, we can add new shared component to this package.
1.  Clone the shared-ui repository ``https://code.gerdi-project.de/scm/ux/shared-ui.git``.
2.  Run this node commend ``npm install``
3.  Under folder ``src`` create a Single file component of vue.js and add content in this component.
4.  Open file ``index.js`` in folder ``src``.
5.  Import the vue component like import ComponentName from ``./ComponentFile.vue``
6.  Then register this component in function install like ``Vue.component('shared-newComponent', ComponentName)``
7.  Then run this command in terminal ``npm build``
8.  Then update the package version number in ``package.json`` file 
9.  Then comment and push the changes to repository master.
10. Then process with new installation or update of ``shared-ui`` module in your respective project

## Build Setup

``` bash
# install dependencies
npm install

# make a build 
npm build
```