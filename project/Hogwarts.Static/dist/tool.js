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

      //var url = 'http://hogwarts.api/api/values';

      tool = _export("tool", (function () {
        function tool(http) {
          _classCallCheck(this, tool);

          this.heading = "JSON Tool";
          //this.values = [];
          this.client = new HttpClient().configure(function (x) {
            x.withBaseUri("http://hogwarts.api");
            x.withHeader("Content-Type", "application/json");
          });
          this.jsonInput = "";
          this.jsonOutput = "";
        }

        _createClass(tool, {
          activate: {

            // activate(){
            //   return this.http.get(url).then(response => {
            //     this.values = response.content;
            //     console.log('this.values', this.values);
            //   });
            // }

            value: function activate() {
              for (var prop in this.jsonInput) {
                console.log(" name=" + prop + " value=" + this.jsonInput[prop]);
              }
            }
          },
          submit: {
            value: function submit() {

              //this.jsonOutput = this.jsonInput;

              this.client.post("/jsonSchema", JSON.stringify(this.jsonInput)).then(function (response) {

                if (response.statusCode === 200) {
                  console.log("Success");
                } else {
                  console.log("Response", response);
                  alert("Something went wrong");
                }

                console.log("Response", response);
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

        return tool;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBSUwsSUFBSTs7OztBQUpULGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7Ozs7O0FBSUwsVUFBSTtBQUVKLGlCQUZBLElBQUksQ0FFSCxJQUFJLEVBQUM7Z0NBRk4sSUFBSTs7QUFHYixjQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQzs7QUFFM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUMzQixTQUFTLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDZCxhQUFDLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDckMsYUFBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztXQUNwRCxDQUFDLENBQUM7QUFDSCxjQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUNwQixjQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN0Qjs7cUJBWlUsSUFBSTtBQXFCZixrQkFBUTs7Ozs7Ozs7O21CQUFBLG9CQUFFO0FBQ1IsbUJBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUMvQix1QkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7ZUFDakU7YUFFRjs7QUFFRCxnQkFBTTttQkFBQSxrQkFBRTs7OztBQUlOLGtCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7O0FBRS9FLG9CQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO0FBQy9CLHlCQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN4QixNQUFNO0FBQ0wseUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLHVCQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpQkFDL0I7O0FBRUQsdUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2VBQ25DLENBQUMsQ0FBQzthQUVKOzs7QUEzQ00sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEN0IsSUFBSSIsImZpbGUiOiJ0b29sLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=