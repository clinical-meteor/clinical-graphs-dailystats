
describe('clinical:graphs-dailystats', function () {
  var server = meteor();
  var client = browser(server);

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

  it('Graphs should exist on the client', function () {
    return client.execute(function () {
      expect(Graphs).to.exist;
    });
  });

  it('Graphs should exist on the server', function () {
    return server.execute(function () {
      expect(Graphs).to.not.exist;
    });
  });
});
