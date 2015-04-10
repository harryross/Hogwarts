System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _createClass, _classCallCheck, tool;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      tool = _export("tool", (function () {
        function tool(http) {
          _classCallCheck(this, tool);

          this.heading = "JSON Tool";
          this.client = new HttpClient().configure(function (x) {
            x.withBaseUri("http://hogwarts.api");
            x.withHeader("Content-Type", "application/json");
          });
          this.jsonInput = "";
          this.jsonOutput = "";
          this.jsonProps = [];
        }

        _createClass(tool, {
          jsonProps: {
            get: function () {

              var array = [];
              var obj = this.jsonInput;

              for (var x in obj) {
                if (x > 4 && x < 10) {
                  array.push(obj[x]);
                }
              }

              return array;
            },
            set: function (jsonPropArray) {
              this.jsonInput = jsonPropArray;
            }
          },
          submit: {
            value: function submit() {
              var _this = this;

              var formatted = this.format(this.jsonInput);

              this.client.post("/jsonSchema", formatted).then(function (response) {

                if (response.statusCode === 200) {
                  console.log("Success");
                  _this.jsonOutput = response.response;
                } else {
                  alert("Something went wrong");
                }

                console.log("Response", response);
              });
            }
          },
          format: {
            value: function format(json) {
              var replaced = json.replace(/"/g, "'");
              return "{\"JsonObjectBody\": \"" + replaced + "\"}";
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [HttpClient];
            }
          }
        });

        return tool;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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