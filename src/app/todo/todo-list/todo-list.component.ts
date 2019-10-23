import { Component, OnInit } from '@angular/core';
import { User } from '../todo.model';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  users: User[];
  userForm: boolean = false;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean = false;
  editedUser: any = {};
  
  constructor(private userService: TodoserviceService) { }

  marked=false;
 thecheckbox =false;
tooggle(e){
  this.marked =e.target.checked;
 //this.thecheckbox.addOrRemove(this.value);

}
  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      //add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.userService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }
  checkbox(v){
  // this.check = this.userService.checksend();
  // console.log(this.check)
  }

}
