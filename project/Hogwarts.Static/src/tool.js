import {HttpClient} from 'aurelia-http-client';

export class tool{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'JSON Tool';
    this.client = new HttpClient()
      .configure(x => {
        x.withBaseUri('http://hogwarts.api');
        x.withHeader('Content-Type', 'application/json');
    });
    this.jsonInput = "";
    this.jsonProps = [];
  }

  get jsonProps(){ 

    var array = [];
    var obj = this.jsonInput;

    console.log('original type', typeof obj);

    if (typeof obj === 'string') { //try catch error unexpected syntax (only works if you paste in object straight away)

      var newObj = JSON.parse(obj);

      for (var x in newObj) {

        array.push(x);

        if (typeof newObj[x] === 'object') {
          var subObject = newObj[x]; //at the moment will only work for one nested level deep

          for (var y in subObject) {
            array.push(x + "." + y);
          }
        }
      }
    }

    return array;
  }

  set jsonProps(jsonPropArray) {
    this.jsonInput = jsonPropArray;
  }

  submit(){
    var objectified,
        formatted,
        wrapped = this.wrap(this.jsonInput);

    this.client.post('/jsonSchema', wrapped).then(response => {
      
      if (response.statusCode === 200) {
        objectified = JSON.parse(response.response);
        formatted = JSON.stringify(objectified, null, 4);

        document.getElementById('json-output').innerText = formatted;
      } else {
        alert('Something went wrong');
      }

      console.log("Response", response);
    });

  }

  wrap(json){
    var replaced = json.replace(/"/g, "'");
    return '{"JsonObjectBody": "' + replaced + '"}';
  }

}
