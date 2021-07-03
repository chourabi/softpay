import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mon Compte', url: '/myaccount', icon: 'person' },
    { title: 'Historique', url: '/folder/Outbox', icon: 'refresh-circle' },
    { title: 'Déconnexion', url: '/auth', icon: 'log-out' },
 
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
