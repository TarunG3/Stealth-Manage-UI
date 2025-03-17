// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://api.stealthmanage.com',
  GOAT_CAMPAIGN_tenantId: "6392254518c8755085237110",
  GOAT_CAMPAIGN_secretKey: "6c0aa073-e32b-445e-84bd-15f2b585097a",
  GOAT_CAMPAIGN_BASE_URL: 'https://api.goatcampaign.com/v1/',
  EMAIL_TO: 'info@stealthmanage.com',
  bucketName: 'stealth-manage'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
