import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'photolisting';
  apiArr: any = [];
  buttonName = "Compare";
  config: any;

  tabledata: any =[];

  constructor(
    private http: HttpClient
  ){
    this.config = {
      itemsPerPage: 10,
      currentPage: 1
    }
  }
 ngOnInit(){
   this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(res=>{
    //  console.log(res)
     this.apiArr = res;
     this.apiArr.forEach(e=>{e['btnName']="Compare"});
   })
 }

 onChange(eachdata){

   if(eachdata.btnName==='Compare'){
     this.tabledata.push(eachdata);
     console.log(this.tabledata)
      eachdata.btnName = 'Remove';
   }else{
     this.tabledata.splice(
       this.tabledata.indexOf(eachdata), 1
     );
     eachdata.btnName = 'Compare';
   }

 }


}
