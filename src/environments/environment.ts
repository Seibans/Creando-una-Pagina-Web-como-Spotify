// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { makeBindingParser } from "@angular/compiler";

export const environment = {
  production: false,
  // Imagina que estas usando los mapas de google makeBindingParser
  // googleMapKey: 'KEY_QUE_SE_EN_DESARROLLO'
  api: 'http://localhost:3001/api/1.0'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
