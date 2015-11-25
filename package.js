// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'attach:flow-routing-react',
  summary: 'UserAccounts package providing routes configuration capability via kadira:flow-router using Reactlayout.',
  version: '1.12.4',
  git: 'https://github.com/meteor-useraccounts/flow-routing.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');

  api.use([
    'check',
    'kadira:react-layout',
    'kadira:flow-router',
    'underscore',
    'useraccounts:core'
  ], ['client', 'server']);

  api.imply([
    'kadira:react-layout',
    'kadira:flow-router',
    'useraccounts:core@1.12.4'
  ], ['client', 'server']);

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js'
  ], ['client']);
});
