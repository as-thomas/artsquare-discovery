Package.describe({
  summary: 'Telescope custom package',
  version: '1.0.0',
  name: 'telescope-custom'
});

Package.onUse(function (api) {

    api.use('telescope:core');
    api.use('templating');

  api.addFiles('custom.css', 'client');
  api.addFiles('banner.js', 'client');
  api.addFiles('banner.html', 'client');

});