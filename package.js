Package.describe({
  name: 'digioak:meteor-phaser',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Phaser.io packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/digioak/meteor-phaser.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('lib/phaser/build/phaser.js', 'client', {bare: true});
  api.addFiles('export.js', 'client', {bare: true});
});