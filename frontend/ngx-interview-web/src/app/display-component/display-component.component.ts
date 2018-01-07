import { AssetsService } from './../services/assets.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})


export class DisplayComponentComponent implements OnInit {

  results: any[];

  assetColumns = ['ID', 'Name', 'Deleted', 'Date Created'];
  dataSource = new MatTableDataSource<Asset>(this.results);

  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
    this.assetsService.getAssts().subscribe(res => {
      this.results = res;
    })
  }
}

export interface Asset {
  id: number;
  name: string;
  isDeleted: boolean;
  dateCreated: Date;
}

