import { environment } from './../../environments/environment';
import { TODO } from './../models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    baseUrl = `http://${environment.hostname}/api/todo`;

    constructor(
        private http: HttpClient
    ) { }
    getList(): Observable<any> {
        console.log('this.baseUrl', this.baseUrl);
        return this.http.put<TODO[]>('', '');
    }
    addNewTodo(title): Observable<TODO> {
        return this.http.get<TODO>('');
    }
    updateTodo(updatedTask): Observable<TODO> {
        const url = `${this.baseUrl}/updatedTask.id`;
        // console.log('updateTodo', updatedTask);
        return this.http.post<TODO>('', '');
    }
    deleteTodo(id) {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete('');
    }
}
