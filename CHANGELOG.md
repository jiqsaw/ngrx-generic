# TopGroup - TIM

### Changelog
***

#### `0.1` (2017-10-10)
*** Initial Relase

##### Bug Fixes
* Fix ng-sidebar issues after update
* Fix sidebar menu issues
* Fix tooltip error issue on demo pages

##### Architecture
* Support for Redux
* Update to angular-cli 1.4
* Update other packages
* Webpack


#### `0.2` (2017-10-13)
*** Initial Relase

##### Changes
After discussion with Sam new architecture requirements have been specified:
* To use ngrx architecture instead of angular-redux for application store
* Application to rely on AngularCLI for generating components, linting JS code, testing.
* Remove Twitter Bootstrap dependency. Do not use ngx-bootstrap library!
* Angular Material to be used where possible as it provides most required components
* Rewrite existing application Authentication into module that works with ngrx
* Implement source control workflow
* Code to be tested

##### Architecture 
* Angular Material
* Angular CLI
* NgRx for store managment

#### `0.3` (2017-10-13)
Implemented new Authentication module for ngrx
New requirements for repo commits. Please follow convention: https://conventionalcommits.org/



