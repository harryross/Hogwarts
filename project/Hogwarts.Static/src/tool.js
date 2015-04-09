import {HttpClient} from 'aurelia-http-client';

var url = 'http://hogwarts.api/api/values';

export class JSON{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.heading = 'JSON Tool';
    this.values = [];
    this.http = http;
  }

  activate(){
    return this.http.get(url).then(response => {
      this.values = response.content;
      console.log('this.values', this.values);
    });
  }
}
