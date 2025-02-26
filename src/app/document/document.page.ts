import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.scss'],
})
export class DocumentPage implements OnInit {

  settingsExpanded = false;

  ngOnInit(): void {

  }

  books = [
    {
      title: 'The Golden Age',
      author: 'Joan London',
      price: '$19.99',
      category: 'Fiction',
      image: 'https://th.bing.com/th/id/OIP.OoAl690Iup8yqMEjOSHdWgAAAA?w=178&h=234&c=7&r=0&o=5&pid=1.7',
      description: `
       Joan London's "The Golden Age" is a beautifully written novel that transports readers to 1950s Australia, where a polio epidemic has swept through the country, leaving many children disabled and in need of long-term care. The story centers on the Golden Age Children's Polio Convalescent Home in Perth, where young Frank Gold, a Hungarian Jewish refugee and aspiring poet, is sent to recover. There, he meets Elsa Briggs, a fellow patient, and the two form a profound and tender connection. Through their experiences and interactions with the staff and other children at the home, the novel explores themes of displacement, resilience, and the healing power of art and friendship. London's lyrical prose and empathetic storytelling create a vivid and moving portrait of a bygone era, capturing the struggles and triumphs of those living in the shadow of both war and illness. "The Golden Age" is a testament to the strength of the human spirit and the enduring power of love and creativity.
      `
    },
    {
      title: 'Saga',
      author: 'Brian K',
      price: '$14.99',
      category: 'Fiction',
      image: 'https://th.bing.com/th/id/OIP._9OvpQtHeiuJRHn0Gb5YlgHaLY?w=178&h=274&c=7&r=0&o=5&pid=1.7',
      description: `
      "Saga," created by the renowned team of writer Brian K. Vaughan and artist Fiona Staples, is a critically acclaimed graphic novel series that masterfully blends elements of fantasy and science fiction. The narrative centers on Alana and Marko, lovers from two distinct extraterrestrial species locked in an age-old war. Their forbidden relationship and the birth of their daughter, Hazel, spark a perilous journey across the galaxy. As they evade powerful enemies, from relentless bounty hunters to the vengeful forces of their own families, they confront the harsh realities of war, prejudice, and survival. The story is told through the eyes of Hazel, whose narration adds a unique and poignant perspective. With its compelling characters, stunning artwork, and profound exploration of themes such as love, family, and the futility of conflict, "Saga" stands as a landmark work in contemporary comics.
      `
    },
    {
      title: 'Me Before You',
      author: 'Jojo Moyes',
      price: '$24.99',
      category: 'Non-Fiction',
      image: 'https://th.bing.com/th/id/OIP.J6d7qlj0JA7Q-tUiWfJwDwHaLW?w=178&h=274&c=7&r=0&o=5&pid=1.7',
      description: `
      "Me Before You" is a poignant and emotionally charged novel by Jojo Moyes that explores the transformative power of love and human connection. The story centers on the unexpected relationship that blossoms between Louisa "Lou" Clark, a quirky and vibrant young woman, and Will Traynor, a wealthy and successful man who becomes paralyzed from the neck down following a tragic accident. Through their evolving bond, Moyes delves into themes of hope, resilience, and the complex choices faced by those who care for loved ones with disabilities.
      `
    },
    {
      title: 'The Echo Of Love',
      author: ' Barbara Cartland',
      price: '$19.99',
      category: 'Fiction',
      image: 'https://th.bing.com/th?id=OIF.%2fzbLxXi5%2bkONJZovvPKDaw&w=178&h=237&c=7&r=0&o=5&pid=1.7',
      description: `
     In "The Echo of Love," author  Barbara Cartland weaves a spellbinding tale that bridges the gap between past and present. The story begins with Lily, a dedicated archaeologist who discovers a mysterious artifact that awakens memories of a life she never knew she had. As the echoes of her past life with Alexander, a nobleman from centuries ago, grow stronger, Lily is drawn into a journey of rediscovery and rekindled passion.

    Caught between two worlds, Lily and Alexander must confront ancient secrets and modern dilemmas to uncover the truth about their love. From the bustling streets of contemporary cities to the majestic landscapes of a bygone era, their story unfolds with breathtaking twists and turns. "The Echo of Love" is a testament to the enduring power of love, the bonds that connect us through time, and the echoes that resonate across lifetimes.

    Immerse yourself in this unforgettable novel that promises to enchant, inspire, and remind you that true love is eternal.
      `
    },
    {
      title: 'The Girl Who Lived',
      author: 'Christopher Greyson ',
      price: '$14.99',
      category: 'Non-Fiction',
      image: 'https://th.bing.com/th/id/OIP.WjzxAe3zahNtS8C2phr96gAAAA?w=178&h=345&c=7&r=0&o=5&pid=1.7',
      description: `
      In The Girl Who Lived, Christopher Greyson weaves a chilling tale of survival, mystery, and suspense. Faith Winters, the protagonist, is haunted by the brutal massacre that claimed her sister, best friend, and others, leaving her as the only one who walked away. Years later, as she struggles with alcoholism and psychological scars, Faith becomes obsessed with finding out who was truly behind the murders. Her quest for answers leads her to confront her deepest fears and distrust everyone around her, including herself. The narrative masterfully combines elements of psychological intrigue and thrilling twists, keeping readers on edge as they follow Faith's relentless pursuit of the truth.
      `
    },
    {
      title: 'A Trusted Wife',
      author: 'Laura Martin',
      price: '$24.99',
      category: 'Non-Fiction',
      image: 'https://th.bing.com/th?id=OIF.B4xh6%2buHi7%2bMIs45CyVpnQ&w=178&h=267&c=7&r=0&o=5&pid=1.7',
      description: `
      Maria had always been a trusted wife, dedicated to her marriage and family. But when she uncovers her husband's betrayal, her seemingly perfect world crumbles. Heartbroken and determined to start anew, Maria moves to a small town where she begins to rebuild her life from the ground up.

    In "A Trusted Wife," author Laura Martin weaves a rich tapestry of emotion and transformation as Maria navigates the trials of her new reality. She forges deep connections with the townspeople, who offer support and friendship in unexpected ways. As Maria rediscovers her own strength and passions, she finds herself torn between the safety of her old life and the exciting possibilities of a future she never imagined.

    Amidst the backdrop of a quaint town with its own secrets, Maria learns that trust is not just about faith in others but also about believing in oneself. This heartwarming novel is a testament to the enduring power of love, the importance of community, and the resilience needed to overcome life’s greatest challenges. "A Trusted Wife" is a story that will resonate with anyone who has ever had to start over and find their own path to happiness.
      `
    },
  ];

  filteredBooks = [...this.books];
  searchTerm = '';

  constructor(
    private navCtroller: NavController, 
    private alertController: AlertController, 
    private router: Router,
    private userService: UserService) { }

  goToHome() {
    console.log("navigateRoot() function is Called.")
    localStorage.removeItem('token');
    this.navCtroller.navigateRoot('/home');
  }

  segmentChanged(event: any) {
    const selectedSegment = event.detail.value;
    console.log("Category From segmentChanged: ", selectedSegment);
    this.filterBooks(selectedSegment, this.searchTerm);
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    console.log("Search Term: ", this.searchTerm);
    this.filterBooks('all', this.searchTerm);
  }

  filterBooks(category: string, searchTerm: string) {
    let filtered = [...this.books];

    if (category !== 'all') {
      console.log("Category From filterBooksFunction: ", category);
      filtered = filtered.filter(book => book.category.toLowerCase() === category.toLowerCase());
      console.log("filtered books by category: ", filtered);
    }

    if (searchTerm) {
      console.log("Search Bar is Working Now");
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("filtered books by searchBar: ", filtered);
    }
    this.filteredBooks = filtered;
  }

  async selectBook(book: any) {
    const alert = await this.alertController.create({
      header: 'View Book',
      message: 'Do you want to view this book?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('User cancelled viewing the book');
          }
        },
        {
          text: 'View',
          handler: () => {
            console.log('User confirmed viewing the book');
            this.viewBookDetails(book);
          }
        }
      ]
    });
 
    await alert.present();
  }
 
  viewBookDetails(book: any) {
    console.log("Book when view cick: ", book);
    const navigationExtras: NavigationExtras = {
      state: {
        book
      }
    };
    console.log("NavgationExtras: ", navigationExtras);
    this.router.navigate(['/read-book'], navigationExtras);
  }

  goToProfile() {
    this.navCtroller.navigateForward(['/profile']);
    console.log('Go to profile');
  }

  goToSettings() {
    console.log('Go to settings');
  }

  logout() {
    localStorage.removeItem('token');
    this.navCtroller.navigateRoot('/form')
    console.log('Logout');
  }

  toggleSettings() {
    this.settingsExpanded = !this.settingsExpanded;
  }

  async deleteAccount() {
    const alert = await this.alertController.create({
      header: 'Delete Account',
      message: 'Are you sure you want to delete your account? This action cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          handler: () => {
            const email = this.userService.getCurrentUserEmail();
            this.userService.deleteUser(email);
            this.navCtroller.navigateForward(['/form']);
          }
        }
      ]
    });

    await alert.present();
  }

  async logoutToggle() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to logout your account?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Sure',
          handler: () => {
            console.log('Account Logouted');
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  goList(){
    this.navCtroller.navigateForward(['/lists']);
  }
}
