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
    this.jsonOutput = "";
    this.jsonProps = [];
  }

  get jsonProps(){ 

    var array = [];
    var obj = this.jsonInput;

    for (var x in obj) {
      if (x > 4 && x < 10) {
        array.push(obj[x]);
      }
    }

    return array;
  }

  set jsonProps(jsonPropArray) {
    this.jsonInput = jsonPropArray;
  }

  submit(){
    var formatted = this.format(this.jsonInput);

    this.client.post('/jsonSchema', formatted).then(response => {
      
      if (response.statusCode === 200) {
        console.log('Success');
        this.jsonOutput = response.response;
      } else {
        alert('Something went wrong');
      }

      console.log("Response", response);
    });

  }

  format(json){
    var replaced = json.replace(/"/g, "'");
    return '{"JsonObjectBody": "' + replaced + '"}';
  }

}
