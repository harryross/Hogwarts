import {HttpClient} from 'aurelia-http-client';

//var url = 'http://hogwarts.api/api/values';

export class tool{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'JSON Tool';
    //this.values = [];
    this.client = new HttpClient()
      .configure(x => {
        x.withBaseUri('http://hogwarts.api');
        x.withHeader('Content-Type', 'application/json');
    });
    this.jsonInput = "";
    this.jsonOutput = "";
  }

  // activate(){
  //   return this.http.get(url).then(response => {
  //     this.values = response.content;
  //     console.log('this.values', this.values);
  //   });
  // }

  activate(){
    for (var prop in this.jsonInput) {
      console.log(' name=' + prop + ' value=' + this.jsonInput[prop]);
    }

  }

  submit(){

    //this.jsonOutput = this.jsonInput;

    this.client.post('/jsonSchema', JSON.stringify(this.jsonInput)).then(response => {
      
      if (response.statusCode === 200) {
        console.log('Success');
      } else {
        console.log('Response', response);
        alert('Something went wrong');
      }

      console.log("Response", response);
    });

  }

}
