Alternative method using nested Angular FormGroup instead of Form Array.

**Reunion-form.component.ts**

![Reunion-form.component.ts](src\assets\Code1.PNG)

**Reunion-form.component.html**

Rendering of checkbox by looping the created `events` FormGroup

![Reunion-form.component.html](src\assets\Code2.PNG)

Produces events object with event name as `key` and attendance as `value`

![Result](src\assets\Code3.PNG)

# SchoolForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

