import { Component } from '@angular/core';
import { Cards } from "../../ui/cards/cards";

@Component({
  selector: 'app-districts',
  imports: [Cards],
  templateUrl: './districts.html',
  styleUrl: './districts.css'
})
export class Districts {
  districts=[
     {
    id: 1,
    title: "Trivandrum",
    description: "Capital City",
   imgLink: "https://www.bing.com/th/id/OIP.QNszesdHhq0Khl47vTwgAwHaEK?w=254&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3"
     },

  {
    id: 2,
    title: "Kollam",
    description: "Known for backwaters and cashew industry",
    imgLink:"https://www.bing.com/th/id/OIP.fFgZ-rdE35MqUir2TPPs9AHaFj?w=238&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3" 
  },
  {
    id: 3,
    title: "Pathanamthitta",
    description: "Pilgrim destination with Sabarimala temple",
    imgLink: "https://thetravelshots.com/wp-content/uploads/2021/10/sabarimala.jpg"
  },
  {
    id: 4,
    title: "Alappuzha",
    description: "Venice of the East",
    imgLink: "https://www.bing.com/th/id/OIP.OzDAl9_3XGfxtyP-XPGU6QHaE8?w=263&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3"
  },
  {
    id: 5,
    title: "Kottayam",
    description: "Land of letters, latex, and lakes",
    imgLink: "https://thf.bing.com/th/id/OIP.vm55fxYLjKtj1da170Ul7gHaHa?w=172&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 6,
    title: "Idukki",
    description: "Hill district with dams and forests",
    imgLink: "https://www.bing.com/th/id/OIP._BRIY6WDj7u3KuOZ0xpvfAHaEK?w=245&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3"
  },
  {
    id: 7,
    title: "Ernakulam",
    description: "Commercial capital of Kerala",
    imgLink: "https://th.bing.com/th/id/OSK.HEROpZ-ubS8Rg_rBp_-Ofex4dGBTz4jHZHkvdpGY_atmaCM?w=472&h=280&c=1&rs=2&o=7&cb=thws4&dpr=1.3&pid=SANGAM&rm=3"
  },
  {
    id: 8,
    title: "Thrissur",
    description: "Cultural capital, famous for Thrissur Pooram",
   imgLink: "https://th.bing.com/th/id/R.1f5631d8d9c11732d0e794eec022541a?rik=UtOQ95a8Q4QlBA&riu=http%3a%2f%2fnorthkeralatourpackages.com%2fwp-content%2fuploads%2f2018%2f04%2f8.jpg&ehk=BpiqK27qmHhMXqm%2b2r7tKcPS8v5FSnaM4yXD%2bBBwa9Y%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 9,
    title: "Palakkad",
    description: "Gateway of Kerala",
    imgLink: "https://thf.bing.com/th/id/OIP.nA4F8biFm6nyLxSqXUjuUgHaE8?w=239&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 10,
    title: "Malappuram",
    description: "Soccer loving district with rich history",
    imgLink: "https://thf.bing.com/th/id/OIP.lszJAjan2zcL6FHh8xi1zQHaEK?w=316&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 11,
    title: "Kozhikode",
    description: "City of spices and historical landings",
    imgLink: "https://thf.bing.com/th/id/OIP.fVaLGhUVjQcYLZL2AD42IAHaD8?w=335&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 12,
    title: "Wayanad",
    description: "Scenic hill district with wildlife",
   imgLink: "https://www.keralatourism.org/images/destination/large/meenmutty_waterfalls_kalpetta20131104131005_541_1.jpg"
  },
  {
    id: 13,
    title: "Kannur",
    description: "Land of looms and lores",
    imgLink: "https://thf.bing.com/th/id/OIP.oeO1oL0UNMub1ManGkSKVAHaFj?w=206&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 14,
    title: "Kasaragod",
    description: "Northernmost district known for forts and beaches",
    imgLink: "https://thf.bing.com/th/id/OIP.e-yuQjhXEK2vnMoNqKdCoQHaEK?w=295&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.3&pid=1.7&rm=3"
  }
  ];
}
