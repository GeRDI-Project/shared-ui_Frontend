# Shared UI module for GeRDI

> This package contain the shared components of GeRDI project.

## How to add shared-ui to npm devDependencies

Run the following command in terminal
```
npm install git+https://code.gerdi-project.de/scm/ux/shared-ui.git --save-dev
```
To add this library to your code, import it and install it in your Vue instance with following line of
```
Vue.use(sharedUI, {store: store})
```
The second argument is optional. If the store is passed, additional features will be enabled.

## How to update shared-ui package

Run the following command in terminal
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

## Access the AAI functions

If the library is added to the Vue system by adding a store instance, you will be able to access the AAI functions provided by this library.
It is accessible through the global variable `$gerdi` and its subfield `aai`. For instance, to retrieve the user, simply call `this.$gerdi.aai.getUser()` within your Vue project.

Available methods:

* `signInUser(*ref : String) : void` Sign in the user. `ref` depicts the path were the user will be forwarded to.
* `signInUserSilent() : void` Performs a check in the background to see if the user is already logged in.
* `signOutUser() : void` Signs out the user.
* `getUser() : User` Returns the user instance.
* `isAuthenticated() : boolean` Whether or not the user is logged in. Only reliable after `isChecked()`.
* `isChecked(): boolean` Whether or not the login was already checked
\* optional parameter

Furthermore, the field `this.$gerdi.aai.enabled : boolean` shows if the AAI functions are enabled or not.
