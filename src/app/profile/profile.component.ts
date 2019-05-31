import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileServiceService) {
    this.apiService.getAnimals().subscribe(response => {
      this.animals = response;
    });
  }
  addNewAnimal(newAnimal) {
    this.apiService.addAnimal(newAnimal).subscribe(response => {
      this.animals = response;
    });
   }
   updateAnAnimal(newname, oldname) {
    this.apiService.updateAnimal(newname, oldname).subscribe(response => {
      this.animals = response;
    });
  }

  ngOnInit() {
  }

}
