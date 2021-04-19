import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
    @Input() list:any[]; 
    
    @Output() shareCheckedList = new EventEmitter();
    @Output() shareIndividualCheckedList = new EventEmitter();
    
    showDropDown : boolean = false;
    checkedList : any[];
    currentSelected : {};
    
    constructor(){
        this.checkedList = [];
    }
  ngOnInit(): void {
  }
    getSelectedValue(status:Boolean,value:String){
        if(status){
          this.checkedList.push(value);  
        }else{
            var index = this.checkedList.indexOf(value);
            this.checkedList.splice(index,1);
        }
        
        this.currentSelected = {checked : status,name:value};

        //share checked list
        this.shareCheckedlist();
        
        //share individual selected item
        this.shareIndividualStatus();
    }
    shareCheckedlist(){
         this.shareCheckedList.emit(this.checkedList);
    }
    shareIndividualStatus(){
        this.shareIndividualCheckedList.emit(this.currentSelected);
    }
}