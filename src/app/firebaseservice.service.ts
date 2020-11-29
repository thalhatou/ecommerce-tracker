import {Injectable} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })


export class FirebaseserviceService {

    constructor(private firestore: AngularFirestore) {}

    AddItem(record) {
      return this.firestore.collection('Students').add(record);
    }

    getItems(){
       return this.firestore.collection('Students').snapshotChanges();
    }

  updateItem(id,item){
    this.firestore.doc('Students/' + id).update(item);
  }

  delete_Student(id) {
    this.firestore.doc('Students/' + id).delete();
  }
}
