import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.page.html',
  styleUrls: ['./read-book.page.scss'],
})
export class ReadBookPage implements OnInit {

  book: any = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log("navigation: ", navigation);
    if (navigation?.extras?.state) {
      this.book = navigation.extras.state['book'];
    }
  }

  ngOnInit() {
    console.log("Books: ", this.book);
  }

}
