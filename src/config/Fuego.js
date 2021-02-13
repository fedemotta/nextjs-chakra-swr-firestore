import firebase from 'firebase/app';
export default class Fuego {
  constructor(config) {
    this.db = !firebase.apps.length ? firebase.initializeApp(config).firestore() : firebase.app().firestore();
    this.auth = firebase.auth;
    this.functions = firebase.functions;
    this.storage = firebase.storage;
  }
}
