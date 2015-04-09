import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Hogwarts';
      config.map([
        { route: ['','tool'],        moduleId: './tool',       nav: true, title:'JSON Tool' }
      ]);
    });
  }
}
