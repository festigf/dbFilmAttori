import { Component, OnInit,Input,Output,EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit,OnChanges {
  @Input() page : number;
  @Input() nPages:number;
  @Output() onClick = new EventEmitter<number>();
  pages=[];
  pageStart=1;
  maxPages=this.nPages;
  constructor() { 
  }

  ngOnChanges(){
    console.log("npages"+this.nPages);
    console.log(this.page);
    this.maxPages = this.nPages;
    this.pages = this.fillArray();
    if (this.page > this.nPages)
    {
      this.page = this.nPages;
      this.onClick.emit(this.page);
    }
    console.log(this.pages)  ;
  }

  ngOnInit() {
  }

  fillArray(): any{
    var obj = new Array();

    for(var index = this.pageStart; index< (this.pageStart + this.maxPages); index ++) {
                obj.push(index);
    }
    return obj;
  }

  onPrevious(){
    if(this.page>1) {
      +this.page--;
      if(this.page < this.pageStart){
        this.pageStart = this.page;
      }
      this.pages=  this.fillArray();
      this.onClick.emit(this.page);
      console.log(this.page);
    }
  }
  onNext(){
    console.log(this.page);   
     console.log(this.nPages);
    
    if(this.page<(this.nPages)) {
      +this.page++;
      if(this.page >= (this.pageStart + this.maxPages)){
        this.pageStart = this.page - this.maxPages + 1;
      }
      this.pages=  this.fillArray();
      this.onClick.emit(this.page);
      console.log(this.page);
    }
  }
  onPage(page:number){
    this.page=page;
    console.log(this.page);
    this.onClick.emit(this.page);
   
  }
      
  
}
