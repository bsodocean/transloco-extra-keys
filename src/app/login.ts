import { marker } from '@ngneat/transloco-keys-manager/marker';

// * THIS DOES NOT SHOW ANYTHING WHEN USING FIND, NOT IN EXTRA KEYS OR MISSING KEYS
export class Login {
  static loginErrorMessages = {
    4: marker('apiErrorMessages.loginErrorMessages.4'),
    100: marker('apiErrorMessages.loginErrorMessages.100'),
    101: marker('apiErrorMessages.loginErrorMessages.101'),
    102: marker('apiErrorMessages.loginErrorMessages.102'),
  };
}

// * THIS SHOWS UP AS EXTRA KEYS WHEN USING FIND

// export enum Login {
//   _4 = 'apiErrorMessages.loginErrorMessages.4',
//   _5 = 'apiErrorMessages.loginErrorMessages.5',
//   _6 = 'apiErrorMessages.loginErrorMessages.6',
//   _100 = 'apiErrorMessages.loginErrorMessages.100',
//   _103 = 'apiErrorMessages.loginErrorMessages.103',
//   _104 = 'apiErrorMessages.loginErrorMessages.104',
// }
