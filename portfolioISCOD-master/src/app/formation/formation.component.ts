import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {

  adBDD:boolean = false;
  devAPI:boolean = false;
  desktop:boolean= false;
  devOps:boolean= false;
  devMOBILE:boolean= false;
  management:boolean= false;
  NoSql:boolean= false;
  devWEB:boolean= false;
  free:boolean= false;
  CoAdv:boolean= false;
  meduza:boolean= false;
  masterClass:boolean= false;

  otherFalse(bloc : string){
    switch(bloc){
      case "adBDD":
        this.adBDD = !this.adBDD;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "devAPI":
        this.adBDD = false;
        this.devAPI = !this.devAPI;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "desktop":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = !this.desktop;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "devOps":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = !this.devOps;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "devMOBILE":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = !this.devMOBILE;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "management":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = !this.management;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "NoSql":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = !this.NoSql;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "devWEB":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = !this.devWEB;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "free":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = !this.free;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "CoAdv":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = !this.CoAdv;
        this.meduza = false;
        this.masterClass = false;
        break;
      case "meduza":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = !this.meduza;
        this.masterClass = false;
        break;
      case "masterClass":
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = !this.masterClass;
        break;
      default:
        this.adBDD = false;
        this.devAPI = false;
        this.desktop = false;
        this.devOps = false;
        this.devMOBILE = false;
        this.management = false;
        this.NoSql = false;
        this.devWEB = false;
        this.free = false;
        this.CoAdv = false;
        this.meduza = false;
        this.masterClass = false;
        break;
    }
  }
}
