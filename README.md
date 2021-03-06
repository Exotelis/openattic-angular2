# openATTIC - graphical user interface

## System requirements
Install _Node >=6.9_<br>
Run `npm install` to install the dependencies

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Npm commands
Run `npm start` for a dev server<br>
Run `npm test` to execute the unit tests<br>
Run `npm run e2e` to execute the e2e tests<br>
Run `npm run build` to build the project for production<br>
Run `npm run build:de` to build the project for production in german<br>
Run `npm run i18n` to generate the locale file messages.xlf<br>
Run `npm run lint` to analyse the code for potential errors

## Set up a debugger in webstorm
1. In Webstorm, go to _Run | Edit Configurations..._
2. Click the _Add New Configuration button (+)_ and choose _JavaScript Debug_
3. Choose the newly created configuration and specify the following, in the _Run/Debug Configuration: JavaScript Debug_ dialog box
    * Choose a name
    * Change the URL to `http://localhost:4200`
    * In the _Remote URLs of local files (optional)_ dialog, add the remote url `webpack:///<dir_to_project>` to the project root folder
    and the remote url `webpack:///<dir_to_project>/src` to the src folder
4. Don't forget to install the _JetBrains IDE Support_ extension for chrome and to run `ng serve` before you start debugging
5. Now, it should be possible to debug the project. You might have to reload your browser when it doesn't work on the first try