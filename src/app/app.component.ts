import { Component, VERSION } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ckeditor';
  name = 'Angular ' + VERSION.major;
  editor = ClassicEditor;
  data: any = `<p>Hello, world!</p>`;
  // config = {
  //   toolbar: [
  //     { name: 'clipboard', itmes: ['Cut', 'Copy', 'Paste'] }
  //   ]
  // }
  ckeConfig: CKEditor5.Config;

  constructor() {
    this.ckeConfig = {
      toolbar: [
        { name: 'clipboard', items: ['Cut', 'Copy', 'Paste'] }
      ]
    }
  }
}
