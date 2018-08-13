(function (global) {
  var ParseServerClient = (function () {

    function ParseServerClient(domain, appId, key) {
      this.apiUrl = 'https://' + domain + '/parse';
      this.headers = {
        'X-Parse-Application-Id' : appId,
        'X-Parse-Master-Key'     : key,
        'Content-Type'           : 'application/json'
      };

      if (!domain) throw new Error('"domain"は必須です');
      if (!appId) throw new Error('"appId"は必須です');
      if (!key) throw new Error('"key"は必須です');
    }

    return ParseServerClient;
  })();

  return global.ParseServerClient = ParseServerClient;
})(this);
