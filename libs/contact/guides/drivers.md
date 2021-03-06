# Drivers 

## InMemory Driver

The In-Memory driver is for rapid development without the need to set up a magento/shopify/etc backend. It will mock out the submission of a contact form and operate like a functional backend.

To set up, inside of your `app.module` make sure to include the `DaffContactInMemoryDriverModule.forRoot()` inside of your imports section, as well as to import the `DaffContactInMemoryDriverModule` from the `@daffodil/contact/testing` library and the `HttpClientInMemoryWebApiModule` from `angular-in-memory-web-api`.

To set up, include the `DaffContactInMemoryDriverModule.forRoot()` in the imports section of your `app.module`, and import the `DaffContactInMemoryDriverModule` from the `@daffodil/contact/testing` library and the `HttpClientInMemoryWebApiModule` from angular-in-memory-web-api.

```typescript
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DaffContactInMemoryDriverModule } from '@daffodil/Contact/testing';

@NgModule({
  imports: [
    DaffContactInMemoryDriverModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot()
  ]
})
export class AppModule {}
```

Now your `DaffContact` implementation will have access to the In-Memory Driver to use while developing.

> It is important to note to only have one `daffodil/contact` driver set up in your App.Module at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->

## Hubspot Forms Driver

The Hubspot Forms Driver allows your Daffodil Contact Form feature to connect directly to your hubspot account to manage your contact form submissions. 

To set up, inside of your `app.module` first import `DaffContactHubSpotDriverModule` from `@daffodil/contact`. Next, in your imports section include `DaffContactHubSpotDriverModule.forRoot(config)`, where config is a DaffHubspotConfig object containing information needed to connect to your hubspot form. [Follow this link on where to find your form's information](https://knowledge.hubspot.com/forms/find-your-form-guid).

```typescript
import { DaffContactHubSpotDriverModule } from '@daffodil/contact';

config : DaffHubspotConfig = {portalId: '123456', guid: 'ff9999'};

@NgModule({
  imports: [
    DaffContactHubSpotDriverModule.forRoot(config)
  ]
})
export class AppModule {}
```

Now your `DaffContact` implementation will connect to your registered Hubspot Form for use in your app!

> It is important to note to only have one `daffodil/contact` driver set up in your App.Module at a time. To set up a driver configuration to make switching between different backend drivers simple, follow the [advanced setup guide](). <!-- later on this can link to a guide about setting up a config file for multiple drivers like demo -->