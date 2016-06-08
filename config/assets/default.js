'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/lib/bootstrap/dist/css/bootstrap.css'
        // ,
        // 'public/lib/bootstrap/dist/css/bootstrap-theme.css'
        // endbower
      ],
      js: [
        // bower:js
        'public/lib/angular/angular.js',
        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-messages/angular-messages.js',
        'public/lib/angular-ui-router/release/angular-ui-router.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js'
        // endbower
      ]
    },
    css: [
      'client/*/css/*.css'
    ],
    js: [
      'client/core/app/config.js',
      'client/core/app/init.js',
      'client/*/*.js',
      'client/**/*.js'
    ],
    img: [
      'client/**/*/img/**/*.jpg',
      'client/**/*/img/**/*.png',
      'client/**/*/img/**/*.gif',
      'client/**/*/img/**/*.svg'
    ],
    views: ['client/*/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'server/**/*.js'],
    models: 'server/*/models/**/*.js',
    routes: 'server/*/routes/**/*.js',
    config: 'server/*/config/*.js',
    policies: 'server/*/policies/*.js',
    views: 'server/*/views/*.html'
  }
};
