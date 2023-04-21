import { Component, OnInit } from '@angular/core';
import { IDatasource, IGetRowsParams, GridOptions, GridApi, ColDef } from 'ag-grid-community';
import { AlmightyService } from 'src/app/service/almight.service';
import { ButtonRendererComponent } from './button-renderer.component';

@Component({
  selector: 'app-ahm-news',
  templateUrl: './ahm-news.component.html',
  styleUrls: ['./ahm-news.component.css']
})
export class AhmNewsComponent implements OnInit {

  gridApi: GridApi;
  frameworkComponents: any;
  editNewsFeedContent:string;
  isSelected:number = -1;
  newContent:string = '';
  isAutomatic:boolean = false;

  news:any = [{id:0, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:1, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman IndustriesDeepak Nitrite To Invest Upto $14.4 Million In Deepak Oman IndustriesDeepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:2, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:3, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:4, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:5, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:6, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:7, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:2, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:3, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:4, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:5, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:6, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:7, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
]


  constructor(private almightyService: AlmightyService) { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }


  public columnDefs: ColDef[] = [
    {headerName: 'S.No', field: 'id', width:100, suppressSizeToFit: true  },
		{headerName: 'News', field: 'feed', filter: true, sortable:true,flex: 3},
    {headerName: 'Action', width:150,cellRenderer: 'buttonRenderer', cellRendererParams: {
      onClick: this.onButtonCall.bind(this)
    } },
  ];
  public defaultColDef: ColDef = {
    resizable: true,
  };

  onButtonCall(e) {
   const selectedData = e.rowData
   const operation = e.operation;
  }

  check(e){
    this.isAutomatic = !e.target.checked;
  }

	rowData = this.news;
  ngOnInit() {
  }

  onGridReady(params) {
    //params.api.sizeColumnsToFit();
  }

  call(count){
    this.isSelected = count;
  }

  addNews(){
    this.news.push({id: this.news.length, feed: this.newContent, notSaved: true});
    this.newContent = '';
  }
  editNewsFeed(){
    const selectedNews = this.news.filter(newsList => newsList.id === this.isSelected)[0];
    this.editNewsFeedContent = selectedNews.feed;
  }

  public onValueChangeUpdateNews(event: Event, action): void {
      const value = (event.target as any).value;
      if(action === 'add'){
        this.newContent = value
      }else{
        this.editNewsFeedContent = value;
      }
  }

  saveNews(){
    this.almightyService.save(this.newContent).subscribe(res =>{
      console.log(res);
    })
  }

}
