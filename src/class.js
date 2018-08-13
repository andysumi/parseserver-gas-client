(function (global) {
  var ParseServerClient = (function () {

    function ParseServerClient(domain, appId, key) {
      this.apiUrl = 'https://' + domain + '/1';
      this.headers = {
        'X-Parse-Application-Id' : appId,
        'X-Parse-Master-Key'     : key,
        'Content-Type'           : 'application/json'
      };

      if (!domain) throw new Error('"domain"は必須です');
      if (!appId) throw new Error('"appId"は必須です');
      if (!key) throw new Error('"key"は必須です');
    }

    ParseServerClient.prototype.searchUserClass = function (query, options) {
      var params = [];

      if (query) {
        params.push('where=' + encodeURIComponent(JSON.stringify(query)));
      }

      if (options) {
        for (var key in options) {
          params.push(key + '=' + options[key]);
        }
      }

      return this.fetch_(this.apiUrl + '/users?' + params.join('&'), {method: 'get'});
    };

    ParseServerClient.prototype.fetch_ = function (url, options) {
      var response = UrlFetchApp.fetch(url, {
        method             : options.method,
        muteHttpExceptions : true,
        contentType        : 'application/json; charset=utf-8',
        headers            : this.headers,
        payload            : JSON.stringify(options.payload) || {}
      });

      return JSON.parse(response.getContentText());
    };
    return ParseServerClient;
  })();

  return global.ParseServerClient = ParseServerClient;
})(this);
