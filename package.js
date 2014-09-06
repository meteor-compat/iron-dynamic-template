Package.describe({
  summary: 'Dynamically create and update templates and their data contexts.',
  version: "1.0.0-pre0",
  git: "https://github.com/eventedmind/iron-dynamic-template"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.2-rc0');

  api.use('blaze');
  api.use('underscore');
  api.use('ui');
  api.use('jquery');
  api.use('tracker');
  api.use('reactive-var');
  api.use('templating');

  api.use('iron:core@1.0.0-pre0');
  api.imply('iron:core');

  api.add_files('version_conflict_error.js');
  api.add_files('dynamic_template.js');
});

Package.on_test(function (api) {
  api.versionsFrom('METEOR@0.9.2-rc0');

  api.use('iron:dynamic-template');
  api.use('templating');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('blaze');
  api.use('deps');

  api.add_files('dynamic_template_test.html', 'client');
  api.add_files('dynamic_template_test.js', 'client');
});
