System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, url, JSON;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      url = "http://hogwarts.api/api/values";
      JSON = _export("JSON", (function () {
        function JSON(http) {
          _classCallCheck(this, JSON);

          this.heading = "JSON Tool";
          this.values = [];
          this.http = http;
        }

        _createClass(JSON, {
          activate: {
            value: function activate() {
              var _this = this;

              return this.http.jsonp(url).then(function (response) {
                _this.values = response.content;
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return JSON;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWNrci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FFZCxHQUFHLEVBRU0sSUFBSTs7OztBQUpULGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLFNBQUcsR0FBRyxnQ0FBZ0M7QUFFN0IsVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJLEVBQUM7Z0NBRk4sSUFBSTs7QUFHYixjQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztBQUMzQixjQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7cUJBTlUsSUFBSTtBQVFmLGtCQUFRO21CQUFBLG9CQUFFOzs7QUFDUixxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDM0Msc0JBQUssTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7ZUFDaEMsQ0FBQyxDQUFDO2FBQ0o7OztBQVhNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFFOzs7O2VBRDdCLElBQUkiLCJmaWxlIjoiZmxpY2tyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=