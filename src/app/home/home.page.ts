import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  items: Array<any>;
  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  async loadData(): Promise<void> {
    setTimeout(() => {
      this.items = [
        {
          city: 'Berlin',
          country: 'Germany',
          population: '3.5 million',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/0/02/Berlin_Skyline_Fernsehturm_02.jpg'
        },
        {
          city: 'Buenos Aires',
          country: 'Argentina',
          population: '15 million',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/f/fb/Cabildo_de_Buenos_Aires.JPG'
        },
        {
          city: 'Madrid',
          country: 'Spain',
          population: '3.3 million',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/76/Vista_de_Madrid_-_Chamart%C3%ADn_02.jpg'
        },
        {
          city: 'New York',
          country: 'USA',
          population: '19.5 million',
          image:
            'https://fashionfreeway.files.wordpress.com/2012/05/times_square_new_york_city_hdr.jpg'
        },
        {
          city: 'Paris',
          country: 'France',
          population: '2.2 million',
          image:
            'https://www.hdwallpaper.nu/wp-content/uploads/2015/04/Paris_wallpaper33.jpg'
        },
        {
          city: 'Sydney',
          country: 'Australia',
          population: '5.4 million',
          image:
            'https://95077ae8547a1b239f3b-5d2534a656ffdee95a27431d367b21fa.ssl.cf1.rackcdn.com/50/9/large.jpg'
        },
        {
          city: 'Tokyo',
          country: 'Japan',
          population: '9.2 million',
          image:
            'https://cdn.audleytravel.com/-/-/79/085193144017004149152097203190050251049181136035.jpg'
        }
      ];
    }, 2500);
  }
}
