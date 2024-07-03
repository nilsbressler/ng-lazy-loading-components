# NgLazyLoadingComponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Install

1. Clone the repository.
2. Install dependencies using npm install.
3. Run the application using `ng serve`.

## Methods

### app.component.ts

`loadDashboardFeature`
Loads the dashboard feature component into the specified container. It subscribes to the `featureRequested` event from the loaded dashboard component and handles the event by triggering the `handleFeatureRequested` method.

```ts
private loadDashboardFeature(): void;
```

---

`handleFeatureRequested`
Handles the `featureRequested` event by loading the corresponding feature component based on the provided event key. If the loaded component emits a `backToDashboardRequested event, it subscribes to it and reloads the dashboard feature.

```ts
private handleFeatureRequested(eventKey: string): void;
```

---

`loadFeature`
Loads the appropriate feature component based on the provided event key. Supports loading "blog" and "about-us" feature components. Returns a promise that resolves to the loaded component.

```ts
private loadFeature(eventKey: string): Promise<any>;
```

### FeatureLoaderService

`loadAboutUsFeatureComponent`
Asynchronously resolves and loads the "About Us" feature component into the specified container.

```ts
async loadAboutUsFeatureComponent(container: ViewContainerRef): Promise<AboutUsFeatureComponent>;
```

---

`loadBlogFeatureComponent`
Asynchronously resolves and loads the "Blog" feature component into the specified container.

```ts
async loadBlogFeatureComponent(container: ViewContainerRef): Promise<AboutUsFeatureComponent>;
```

---

`loadDashboardFeatureComponent`
Asynchronously resolves and loads the "Dashboard" feature component into the specified container.

```ts
async loadDashboardFeatureComponent(container: ViewContainerRef): Promise<DashboardFeatureComponent>;
```

---

`loadFeatureComponent`
A generic method to load a feature component by resolving it asynchronously and creating the component within the container. It clears the container before injecting the new component instance.

```ts
private async loadFeatureComponent<T>(resolver: () => Promise<Type<T>>, container: ViewContainerRef): Promise<T>;
```

### Resolvers

`resolveAboutUsFeatureComponent`
Dynamically imports and resolves the "About Us" feature component.

```ts
resolve(): Promise<typeof AboutUsFeatureComponent>
```

---

`**resolveBlogFeatureComponent**`
Dynamically imports and resolves the "Blog" feature component.

```ts
resolve(): Promise<typeof BlogFeatureComponent>
```

---

`**resolveDashboardFeatureComponent**`
Dynamically imports and resolves the "Dashboard" feature component.

```ts
resolve(): Promise<typeof DashboardFeatureComponent>
```

## Usage

1. **Loading the Dashboard Feature:** <br>
   Call the loadDashboardFeature method to load and display the dashboard feature component. This method sets up the necessary event subscriptions for handling feature requests.
2. **Handling Feature Requests:** <br>
   When a feature request event is triggered, the handleFeatureRequested method is called with the event key. This method loads the corresponding feature component and sets up an event subscription to handle navigation back to the dashboard.
3. **Loading Specific Features:** <br>
   The loadFeature method determines which feature component to load based on the event key. It supports "blog" and "about-us" features and can be extended to include additional features as needed.
4. **Asynchronous Component Loading:** <br>
   The loadAboutUsFeatureComponent, loadBlogFeatureComponent, and loadDashboardFeatureComponent methods resolve and load their respective components asynchronously.
5. **Generic Component Loader:** <br>
   The loadFeatureComponent method is a generic loader that handles the asynchronous resolution and creation of feature components within the container.

## Error Handling

- If the container is undefined, an error is thrown.
- Errors encountered during the loading of components are logged to the console.
- Unsupported event keys result in a rejected promise with an appropriate error message.
