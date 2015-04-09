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

              return this.http.get(url).then(function (response) {
                _this.values = response.content;
                console.log("this.values", _this.values);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBRWQsR0FBRyxFQUVNLElBQUk7Ozs7QUFKVCxnQkFBVSxzQkFBVixVQUFVOzs7Ozs7Ozs7QUFFZCxTQUFHLEdBQUcsZ0NBQWdDO0FBRTdCLFVBQUk7QUFFSixpQkFGQSxJQUFJLENBRUgsSUFBSSxFQUFDO2dDQUZOLElBQUk7O0FBR2IsY0FBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUM7QUFDM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7O3FCQU5VLElBQUk7QUFRZixrQkFBUTttQkFBQSxvQkFBRTs7O0FBQ1IscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ3pDLHNCQUFLLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQy9CLHVCQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFLLE1BQU0sQ0FBQyxDQUFDO2VBQ3pDLENBQUMsQ0FBQzthQUNKOzs7QUFaTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBRTs7OztlQUQ3QixJQUFJIiwiZmlsZSI6InRvb2wuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==