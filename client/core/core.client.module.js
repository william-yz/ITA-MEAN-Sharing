(function (app) {
  'use strict';

  app.registerModule('core');
  app.registerModule('core.routes', ['ui.router']);
  app.registerModule('backendMaintain', ['core', 'ui.bootstrap', 'ui.grid', 'ui.grid.pagination', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.importer', 'ui.grid.grouping', 'meta.umeditor', 'toaster']);
}(ApplicationConfiguration));


