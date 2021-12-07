import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Person';
import { v4 as uuidv4 } from 'uuid';
import { faCaretDown, faCaretUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-phonebook-input',
  templateUrl: './phonebook-input.component.html',
  styleUrls: ['./phonebook-input.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter',[ 
        style({opacity: 0}),
        animate('200ms', style({opacity: 1}))
      ]),
      transition(':leave',[
        animate('200ms', style({opacity: 0}))
      ]),
    ]),
  ]
})
export class PhonebookInputComponent implements OnInit {

  public people: Person[] = [
    {
      id: uuidv4(),
      fname: 'Jimmy',
      lname: 'Page',
      number: '0633333666'
    },
    {
      id: uuidv4(),
      fname: 'Freddie',
      lname: 'Mercury',
      number: '0935566777'
    },
    {
      id: uuidv4(),
      fname: 'Oleg',
      lname: 'Ivanyuk',
      number: '0737766555'
    }
  ]

  public fnameEdit: string = '';
  public lnameEdit: string = '';
  public numberEdit: string = '';
  public currentI!: number;
  public isShowModal: boolean = false;
  public isShowAddBtn: boolean = false;
  public isShowEditBtn: boolean = false;
  public searchfield!: string;

  public sortFName!: string;
  public sortLName!: string;
  public sortNumber!: string;

  public faCaretDown = faCaretDown;
  public faCaretUp = faCaretUp;
  public faTimes = faTimes;

  public caretUpFName: boolean = false;
  public caretDownFName: boolean = false;
  public caretUpLName: boolean = false;
  public caretDownLName: boolean = false;
  public caretUpNumber: boolean = false;
  public caretDownNumber: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  btnAdd() {
    this.isShowModal = true;
    this.isShowEditBtn = false;
    this.isShowAddBtn = true;
  }

  btnSave(fname: string, lname: string, number: string) {
    this.isShowModal = false;
    const newPerson: Person = {
      id: uuidv4(),
      fname: fname,
      lname: lname,
      number: number
    };
    this.people = [...this.people, newPerson];
    this.resetForm();
  }

  btnDelete(id: string) {
    const index = this.people.findIndex(person => person.id === id);
    this.people.splice(index, 1);
  }

  btnEdit(id: string) {
    this.isShowModal = true;
    this.isShowAddBtn = false;
    this.isShowEditBtn = true;
    this.currentI = this.people.findIndex(person => person.id === id);    
    this.fnameEdit = this.people[this.currentI].fname;
    this.lnameEdit = this.people[this.currentI].lname;
    this.numberEdit = this.people[this.currentI].number;
  }

  btnSaveEdit(fname: string, lname: string, number: string) {
    this.isShowModal = false;
    this.people[this.currentI].fname = fname;
    this.people[this.currentI].lname = lname;
    this.people[this.currentI].number = number;
    this.resetForm();
  }

  resetForm() {
    this.fnameEdit = '';
    this.lnameEdit = '';
    this.numberEdit = '';
  }

  formFilled(field1: string, field2: string, field3: string) {
    if(field1.trim().length > 0 && field2.trim().length > 0 && field3.trim().length > 0) {
      return false;
    } else return true;
  }

  hideCarets() {
    this.caretUpFName = false;
    this.caretDownFName = false;
    this.caretUpLName = false;
    this.caretDownLName = false;
    this.caretUpNumber = false;
    this.caretDownNumber = false;
  }

  sortOrderFName() {
    this.hideCarets();
    if (this.sortFName === 'asc') {
      this.sortFName = 'desc';
      this.caretUpFName = true;
      this.caretDownFName = false;
    } else {
      this.sortFName = 'asc';
      this.caretUpFName = false;
      this.caretDownFName = true;
    }
  }

  sortOrderLName() {
    this.hideCarets();
    if (this.sortLName === 'asc') {
      this.sortLName = 'desc';
      this.caretUpLName = true;
      this.caretDownLName = false;
    } else {
      this.sortLName = 'asc';
      this.caretUpLName = false;
      this.caretDownLName = true;
    }
  }

  sortOrderNumber() {
    this.hideCarets();
    if (this.sortNumber === 'asc') {
      this.sortNumber = 'desc';
      this.caretUpNumber = true;
      this.caretDownNumber = false;
    } else {
      this.sortNumber = 'asc';
      this.caretUpNumber = false;
      this.caretDownNumber = true;
    }
  }

}