'use strict'

/**
 * Policies Configuration
 * (app.config.footprints)
 *
 * Define which prerequisites a request must pass before reaching the intended
 * controller action. By default, no policies are configured for controllers or
 * footprints, therefore the request always will directly reach the intended
 * handler.
 *
 * @see http://trailsjs.io/doc/config/policies
 */
module.exports = {
  'NavigationController': {
    'privateRoutes': ['Passport.jwt']
  },
  'DefaultController': {
    'test': ['Passport.jwt']
  },
  'DashboardController': ['Passport.jwt'],
  'FavoritesController': ['Passport.jwt'],
  'DeviceController': ['Passport.jwt'],
  'FootprintsController': ['Passport.jwt'],
  'ChatBotController': ['Passport.jwt']
}
