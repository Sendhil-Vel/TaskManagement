/*
  Sendhil : 25 Sept 2018 : Demo Task management code
  This is to manage the environment related information. Useful when we will switch from Dev to Prod.
*/
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCG8Uv_RsjI9-0izBaDx4im517SwEpbTsY",
    authDomain: "managetasks-b8b4f.firebaseapp.com",
    databaseURL: "https://managetasks-b8b4f.firebaseio.com",
    projectId: "managetasks-b8b4f",
    storageBucket: "managetasks-b8b4f.appspot.com",
    messagingSenderId: "932403294299"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
