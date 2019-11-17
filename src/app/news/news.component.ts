import { Component, OnInit } from '@angular/core';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News = {
    title: 'XRP等仮想通貨裏付けのステーブルコイン誕生へ　バイナンスのIEOプロジェクトが発行を計画',
    url: 'https://coinpost.jp/?p=118029'
  };

  constructor() { }

  ngOnInit() {
  }

}
