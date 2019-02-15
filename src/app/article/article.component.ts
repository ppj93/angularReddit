import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { 
    this.article = new Article("timepass", "timepass");
  }

  ngOnInit() {
  }

  voteUp(){
    this.article.votes+=1;
    return false;//tell JS not to propagate click event to parents
  }

  voteDown(){
    this.article.votes-=1;//tell JS not to propagate click event to parents
  }

}
