import {Ville} from './ville';

export class Patient {
  private _username;
  private _email;
  private _password;
  private _photo;
  private _sexe;
  private _telephone;
  private _first_name;
  private _last_name;
  private _adresse;
  private _etat;
  private _maladie;
  private _dateNaissance;
  private _ville = new Ville();
  constructor() {
  }


  get username() {
    return this._username;
  }

  set username(value) {
    this._username = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }

  get photo() {
    return this._photo;
  }

  set photo(value) {
    this._photo = value;
  }

  get sexe() {
    return this._sexe;
  }

  set sexe(value) {
    this._sexe = value;
  }

  get telephone() {
    return this._telephone;
  }

  set telephone(value) {
    this._telephone = value;
  }

  get first_name() {
    return this._first_name;
  }

  set first_name(value) {
    this._first_name = value;
  }

  get last_name() {
    return this._last_name;
  }

  set last_name(value) {
    this._last_name = value;
  }

  get adresse() {
    return this._adresse;
  }

  set adresse(value) {
    this._adresse = value;
  }

  get etat() {
    return this._etat;
  }

  set etat(value) {
    this._etat = value;
  }

  get maladie() {
    return this._maladie;
  }

  set maladie(value) {
    this._maladie = value;
  }

  get dateNaissance() {
    return this._dateNaissance;
  }

  set dateNaissance(value) {
    this._dateNaissance = value;
  }

  get ville(): Ville {
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }
}
