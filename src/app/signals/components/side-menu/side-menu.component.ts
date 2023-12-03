import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  route: string
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    {title: 'Contador' , route: 'counter'},
    {title: 'Usuario' , route: 'info-user'},
    {title: 'Mutuaciones' , route: 'properties'},
  ]);

  // public MenuItems: MenuItem[] =
  // [
  //   {title: 'Contador' , route: 'counter'},
  //   {title: 'Usuario' , route: 'info-user'},
  //   {title: 'Mutuaciones' , route: 'properties'},
  // ]

}
