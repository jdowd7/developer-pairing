import { AssetsService } from './../services/assets.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})


export class DisplayComponentComponent implements OnInit {

  results: any[];
  dataSource = new MatTableDataSource<Asset>(this.results);
  assetColumns = ['ID', 'Name', 'Deleted', 'Date Created', 'Asset Fields'];
  dataLoaded = false;

  private onAssetsEmitted(inData: Asset[]): any[] {
    if (!inData || !inData.length) {
      // Filler data for display purposes
      inData = DEFAULT_ASSET_DATA
    } else {
      this.dataLoaded = true;
    }
    return inData;
  }

  constructor(private assetsService: AssetsService) { }

  ngOnInit() {
    this.assetsService.getAssts().subscribe(res => {
      this.results = this.onAssetsEmitted(res);
    })
  }
}

// TODO: Refactor to its own class
export interface Asset {
  id: number;
  name: string;
  isDeleted: boolean;
  dateCreated: string;
  assetFields: string;
}

// Filler data for sanity check purposes.
// My .net api is running on a windows VM on my mac, which can't cross environments.
// Realize I could build it on OS X but I don't want to add to problems just yet :)
const DEFAULT_ASSET_DATA: Asset[] = [
  {id: 1, name: 'Asset1', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 2, name: 'Asset2', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 3, name: 'Asset3', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 4, name: 'Asset4', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 5, name: 'Asset5', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 6, name: 'Asset6', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 7, name: 'Asset7', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 8, name: 'Asset8', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 9, name: 'Asset9', isDeleted: false, dateCreated: '', assetFields: 'NA'},
  {id: 10, name: 'Asset10', isDeleted: false, dateCreated: '', assetFields: 'NA'},
];
