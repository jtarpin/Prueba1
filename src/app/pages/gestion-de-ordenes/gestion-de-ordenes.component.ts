import { EdificeComponent } from './../../components/edifice/edifice.component';
import { Component } from '@angular/core';
import { NgMaterialModule } from '../../shared/material/ng-material.module';
import { CommonModule } from '@angular/common';
import { AssetTypeComponent } from '../../components/asset-type/asset-type.component';
import { FloorComponent } from '../../components/floor/floor.component';
import { SectorComponent } from '../../components/sector/sector.component';
import { SiteComponent } from '../../components/site/site.component';
import { TaskTypeComponent } from '../../components/task-type/task-type.component';
import { UserComponent } from "../../components/user/user.component";


@Component({
  selector: 'app-gestion-de-ordenes',
  standalone: true,
  imports: [
    CommonModule,
    NgMaterialModule,
    AssetTypeComponent,
    EdificeComponent,
    FloorComponent,
    SectorComponent,
    SiteComponent,
    TaskTypeComponent,
    UserComponent
],
  templateUrl: './gestion-de-ordenes.component.html',
  styleUrls: ['./gestion-de-ordenes.component.css']
})
export class GestionDeOrdenesComponent {
  mostrarStepper: boolean = false;
  tiposDeActivo: any[] = [];
  Edifices: any[] = [];
  Floor: any[] = [];
  Sector: any[] = [];
  Site: any[] = [];
  TaskType: any[] = [];
  User: any[] = []

  mostrarStepperHandler() {
    this.mostrarStepper = !this.mostrarStepper;
  }

  onTiposDeActivoChange(tipos: any[]) {
    this.tiposDeActivo = tipos; // Guardar los tipos de activo recibidos
  }

  onEdificesChange(tipos: any[]) {
    this.Edifices = tipos; // Guardar los tipos de activo recibidos
}

  onPisosChange(tipos: any[]) {
    this.Floor = tipos; // Guardar los tipos de activo recibidos
}

  onSectorChange(tipos: any[]) {
    this.Sector = tipos; // Guardar los tipos de activo recibidos
}

  onSiteChange(tipos: any[]) {
    this.Site = tipos; // Guardar los tipos de activo recibidos
}

  onTaskTypeChange(tipos: any[]) {
    this.TaskType = tipos; // Guardar los tipos de activo recibidos
}

  onUserChange(tipos: any[]) {
    this.User = tipos; // Guardar los tipos de activo recibidos
}

}

