import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];
  private employeesSubject = new BehaviorSubject<Employee[]>([]);
  private nextId = 1;

  constructor() {
    // Sample data for testing
    this.addEmployee({
      id: 0,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      department: 'Engineering',
      dateOfJoining: new Date('2023-01-15')
    });
    this.addEmployee({
      id: 0,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      department: 'Marketing',
      dateOfJoining: new Date('2023-03-20')
    });
  }

  getEmployees(): Observable<Employee[]> {
    return this.employeesSubject.asObservable();
  }

  addEmployee(employee: Employee): void {
    const newEmployee = { ...employee, id: this.nextId++ };
    this.employees.push(newEmployee);
    this.employeesSubject.next([...this.employees]);
  }

  deleteEmployee(id: number): void {
    this.employees = this.employees.filter(emp => emp.id !== id);
    this.employeesSubject.next([...this.employees]);
  }
}
