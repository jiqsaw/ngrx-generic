# Dynamic Shared State ngrx Project

This project shows how generic NGRX state management can be. In this project, you can easily build new modules without writing any state management and service code scope (actions, store/reducer, effects, services) as long as they are CRUD operations. It is compatible to the classic approach too so, you can always simply add your custom state and service code logics as usual when you need.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.4.

## Install

Run `npm i`  to install required node dependencies
Run `npm start`  to start application on port 7777 for development environment

## Deployments

Project is running CI with travis. Mor information about configuration can be fount in .travis.yml

Everytime master branch is updated a new build process is automatically started


## Environments 
Different environment in use can be found in app/environments/envitonment.ts

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Project is using

* Angular CLI
* ngrx