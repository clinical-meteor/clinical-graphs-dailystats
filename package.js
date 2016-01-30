Package.describe({
  name: 'clinical:graphs-dailystats',
  version: '2.4.5',
  summary: 'DailyStats linechart for Meteor ClinicalFramework ',
  git: 'https://github.com/clinical-meteor/clinical-graphs-dailystats',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');
  api.use('meteor-platform');
  api.use('session');
  api.use('grove:less@0.1.1');
  api.use('d3js:d3@3.5.5');
  api.use('nvd3:nvd3@1.7.1');
  api.use('momentjs:moment@2.10.3');

  api.addFiles('lib/collections.js');
  api.addFiles('lib/StatsCounter.js');

  api.addFiles('components/DailyStatsChart/dailyInteractionsLineGraph.js', 'client');

  api.addFiles('components/DailyStatsChart/DailyStatsChart.html', 'client');
  api.addFiles('components/DailyStatsChart/DailyStatsChart.js', 'client');
  api.addFiles('components/DailyStatsChart/DailyStatsChart.less', 'client');

  api.addFiles('server/dailystats.initialize.js', 'server');
  api.addFiles('server/dailystats.observer.js', 'server');
  api.addFiles('server/dailystats.methods.js', 'server');

  api.export('DailyStatsChart');
  api.export('DailyStats');
  api.export('Graphs');
  api.export('StatsCounter');
  //api.export('Graphs.renderDailyInteractionsDailyStats');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:graphs-dailystats');
});
