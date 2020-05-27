# StreamlineIconsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Usage

Usage of the component inside a project :

Declare the icon you want to add in your component `public icon = CleanCars.CleanCarLeaf;`

Then in your template add your icon `  <streamline-icon [icon]="icon"></streamline-icon>` 

Available options :


|  Name | Type  | Mandatory  |
|---|---|---|
|  icon | icon (from streamline icon packs)  |  yes |
|  fill | string  |  no |
|  stroke | string  |  no |
|  size | number  |  no |
|  width | number  |  no |
|  height | number  |  no |
|  spin | boolean  |  no |
|  pulse | boolean  |  no |
|  infinite | boolean  |  no |
|  fast | boolean  |  no |
|  easeInOut | boolean  |  no |

 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
