import { Component } from '@angular/core';
import { One,RoomList } from './One';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  title = 'Booking App';


  one:One = {
    Room1: 5,
    Room2: 6,
    Room3: 7,
   
  }
  roomlist: RoomList[] = [
    {   
        "roomnumber": 1,
        "roomtype": "Single",
        "roomprice": 100,
        "amenities": "TV, AC, Heater",
        "roomcount": 5
        },
        {
            
        "roomnumber": 2,
        "roomtype": "Double",
        "roomprice": 200,
        "amenities": "TV, AC, Heater",
        "roomcount": 6
        },
        {
        "roomnumber": 3,
        "roomtype": "Suite",
        "roomprice": 300,
        "amenities": "TV, AC, Heater",
        "roomcount": 7
        }
    ];

}
