import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ItemReorderEventDetail, IonItem, IonReorder, IonLabel, 
        IonReorderGroup, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonReorder, IonLabel,
            IonReorderGroup, IonList]
})
export class Tab2Page {

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }
}

