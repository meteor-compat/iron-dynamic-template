Package.describe({
  name: 'iron:dynamic-template',
  summary: 'Dynamically create and update templates and their data contexts.',
  version: '2.0.0',
  git: 'https://github.com/meteor-compat/iron-dynamic-template'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@3.0.3');

  api.use('blaze@3.0.0');
  api.use('underscore');
  api.use('ui@2.0.0');
  api.use('jquery@1.11.9 || 3.0.1');
  api.use('tracker');
  api.use('reactive-var');
  api.use('templating@1.4.4');
  api.use('random');

  api.use('iron:core@1.0.11');
  api.imply('iron:core');

  api.addFiles('version_conflict_error.js');
  api.addFiles('dynamic_template.html');
  api.addFiles('dynamic_template.js');
  api.addFiles('blaze_overrides.js');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@3.0.3');

  api.use('iron:dynamic-template');
  api.use('templating');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('blaze');
  api.use('deps');

  api.addFiles('dynamic_template_test.html', 'client');
  api.addFiles('dynamic_template_test.js', 'client');
});
