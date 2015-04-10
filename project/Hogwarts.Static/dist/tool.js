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
              var objectified,
                  formatted,
                  wrapped = this.wrap(this.jsonInput);

              this.client.post("/jsonSchema", wrapped).then(function (response) {

                if (response.statusCode === 200) {
                  objectified = JSON.parse(response.response);
                  formatted = JSON.stringify(objectified, null, 4);

                  document.getElementById("json-output").innerText = formatted;
                } else {
                  alert("Something went wrong");
                }

                console.log("Response", response);
              });
            }
          },
          wrap: {
            value: function wrap(json) {
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