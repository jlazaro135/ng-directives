import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
})

public userChangeEffect = effect(() => {
  console.log('user change')
})

  public onFieldUpdate(field: keyof User, value: string){

    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    this.user.update(current => ({
      ...current,
      [field]: value
    }))

  }


}
