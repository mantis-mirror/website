# MantisMirror.com Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deployment

### One-time GitHub configuration

1. Create and push an empty `gh-pages-staging` branch to GitHub (it can simply contain a placeholder commit).
2. In the repository settings on GitHub, open **Pages** and configure:
   - **Production**: Source = `gh-pages` branch, directory = `/ (root)` (this should already match the existing production setup).
   - **Staging**: Add a new environment named `staging` and set its source to the `gh-pages-staging` branch with the `/ (root)` directory.
3. If you use a custom domain for production (e.g. `mantismirror.com`), leave it attached only to the production environment. The staging site will stay on the default `*.github.io` URL.

### Running a staging preview deployment

1. Export the base href for your staging site. This should match the public URL where GitHub Pages serves the staging branch. For example:

   ```bash
   export STAGING_BASE_HREF="https://<your-user>.github.io/<repo-name>/"
   ```

2. Build and publish the staging preview:

   ```bash
   npm run deploy:staging
   ```

   The workflow compiles the Angular app with the correct base href and publishes the output to the `gh-pages-staging` branch.

3. Share the resulting `https://<your-user>.github.io/<repo-name>/` URL (or whatever you configured in `STAGING_BASE_HREF`) for review.

### Publishing to production

1. (Optional) override the production base href if you need to change it:

   ```bash
   export PROD_BASE_HREF="https://mantismirror.com/"
   ```

   The production build defaults to `https://mantismirror.com/`, so you only need to set `PROD_BASE_HREF` when you want to temporarily use a different value.

2. Deploy the live site:

   ```bash
   npm run deploy:prod
   ```

   This publishes the contents of `dist/angular-bootstrap-starter/browser` to the `gh-pages` branch.
