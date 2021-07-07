import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
  {
    path: '/page', title: 'Acceuil', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/villes', title: 'Gestion Villes', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
  },
  {
    path: '/specialite', title: 'Spécialites medecins', icon: 'ft-list', class: '', badge: 'badge badge-pill badge-danger float-right mr-1 mt-1', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/medecins', title: 'Medecins', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/pharmacies', title: 'Pharmacies', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
  },
  {
    path: '/para_pharmacies', title: 'Para-Parmacies', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
  },
  {
    path: '/hopitales', title: 'Hopitales', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
  },
  {
    path: '/cliniques', title: 'Cliniques', icon: 'ft-list', class: '', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: []
  },
  {
    path: '/laboratoires', title: 'Laboratoires', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '/radiologues', title: 'Radiologues', icon: 'ft-list', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },

];
