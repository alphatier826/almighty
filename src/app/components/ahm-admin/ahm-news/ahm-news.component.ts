import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahm-news',
  templateUrl: './ahm-news.component.html',
  styleUrls: ['./ahm-news.component.css']
})
export class AhmNewsComponent implements OnInit {

  news:any = [{id:0, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:1, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:2, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:3, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:4, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:5, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:6, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
  {id:7, feed:'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries'},
]
editNewsFeedContent:string;
newContent:string = '';

  constructor() { }
  isSelected:number = -1;
  ngOnInit() {
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

}
