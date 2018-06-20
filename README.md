# ngx-connection-status
Is an [Angular 6](https://github.com/angular/angular) package that provides a simple way to check your application's connectivity to its host server.
The package relies on a service that basically pings the host to check connectivity and provides a hook that you can get feedback from.

## Getting Started
Install the package in your project:

`npm install ngx-connection-status --save`

Import the package module in your project's **root module** (i.e `app.module.ts`):

```javascript
import { NgxConnectionStatusModule } from 'ngx-connection-status';
```

Then add it to `NgModule` imports array:

```javascript
@NgModule({
  ...,
  imports: [
    ...,
    NgxConnectionStatusModule.forRoot({'checkInterval: 5000'}),
    ...
  ],
  ...
})
```

The _`forRoot`_ method is for providing the initial configuration of the service. Right now it accepts a _`checkInterval`_ key with a value in milliseconds for setting the time interval between pings to the host.

hint: A good time interval would be no less than 5 seconds (5000 milliseconds), you don't want to flood the server with requests since the package service relies on pinging it. But let yourself be the judge of the appropriate time.

hint: A better practice than supplying the configuration object inline to _`forRoot`_ would be saving it first in your `environment.ts` file and then importing it to the module.

Thats it! You are done setting the package up.

## Setting Up The Server

Make sure your production host server accepts `HEAD` requests, otherwise you will always get a _`disconnected`_ feedback.

[angular-cli](https://github.com/angular/angular-cli) doesn't allow `HEAD` requests. So in development mode the app will be sending GET requests (but it will not work when serving with **--prod**).

## Using The Component

The package offers a simple component that can be included in your views to provide connectivity feedback to the user.

To use it, simply add it in your HTML:

`<ngx-connection-status></ngx-connection-status>`

### Positioning

You can also use the _`feedbackPosition`_ directive to give the component a fixed position at one of four possible options:

* top-right `tr`
* bottom-right `br`
* bottom-left `bl`
* top-left `tl`

for example:

`<ngx-connection-status [feedbackPosition]="'br'"></ngx-connection-status>`

### FontAwesome Support

If you are using [FontAwesome](https://www.fontawesome.com) (I don't know why you wouldn't be, It's awesome!) the component will add beautiful icons.

**Currently supports version 5**.

## Hooking Up to The Service

Of course, you may want to use the service in ways other than provided by the component. This works by getting the service hook and subscribing to it.

1. import the service to your component:

```javascript
import { NgxConnectionStatusService } from 'ngx-connection-status/ngx-connection-status.service';
```

2. inject it in the constructor:

```javascript
constructor(private cs: NgxConnectionStatusService) { }
```

3. get the hook and subscribe to it:

```javascript
this.cs.statusHook().subscribe(isOnline => {
  if (isOnline) {
    //do stuff...
  } else {
    //do other stuff...
  }
});
```

## A Little Background

You probably know that Javascript provides an API that is way easier to use and should do the job and that's `window.navigator.onLine`. However, it's extremely unreliable, the main reason being that it only checks for a possible network connection, not an actual existing one, which leads it, for example, to mistake virtual network adapters used by virtual machines or VPN clients for an active connection.

## Liscence

ngx-connection-status is released under the [MIT License](https://opensource.org/licenses/MIT).

