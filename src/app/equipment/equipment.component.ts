import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentList: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  constructor() { }

  ngOnInit(): void {
  }

}
