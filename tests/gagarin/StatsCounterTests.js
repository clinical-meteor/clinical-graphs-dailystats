
describe('clinical:graphs-dailystats', function () {
  var server = meteor();
  var client = browser(server);

  beforeEach(function () {
    server.execute(function () {

    }).then(function (value){

    });
  });
  afterEach(function () {
    server.execute(function () {

    });
  });

  it('StatsCounter should exist on the client', function () {
    return client.execute(function () {
      expect(StatsCounter).to.exist;
    });
  });

  it('StatsCounter should exist on the server', function () {
    return server.execute(function () {
      expect(StatsCounter).to.exist;
    });
  });
});
