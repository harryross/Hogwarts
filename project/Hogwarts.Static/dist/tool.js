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

              console.log("original type", typeof obj);

              if (typeof obj === "string") {
                //try catch error unexpected syntax (only works if you paste in object straight away)

                var newObj = JSON.parse(obj);

                for (var x in newObj) {

                  array.push(x);

                  if (typeof newObj[x] === "object") {
                    var subObject = newObj[x]; //at the moment will only work for one nested level deep

                    for (var y in subObject) {
                      array.push(x + "." + y);
                    }
                  }
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