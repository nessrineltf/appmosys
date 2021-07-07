import {Ville} from './ville';

export class Medecin {
  private _username;
  private _email;
  private _password;
  private _photo;
  private _sexe;
  private _telephone;
  private _first_name;
  private _last_name;
  private _adresse;
  private _diplome;
  private _ville = new Ville();
  private _Horaire;
  private _dureeMoyenneRDV;
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

  get diplome() {
    return this._diplome;
  }

  set diplome(value) {
    this._diplome = value;
  }

  get ville(): Ville {
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }

  get Horaire() {
    return this._Horaire;
  }

  set Horaire(value) {
    this._Horaire = value;
  }

  get dureeMoyenneRDV() {
    return this._dureeMoyenneRDV;
  }

  set dureeMoyenneRDV(value) {
    this._dureeMoyenneRDV = value;
  }
}
