import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(url: string, description: string) {
    let encodedUrl = encodeURIComponent(url);
    let encodedText = encodeURIComponent(description);
    window.open("https://t.me/share/url?url="+encodedUrl+"&text=+"+encodedText+"");
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/