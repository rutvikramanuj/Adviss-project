import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingupDataService {
  
  constructor() { }

  getDeta()
    {
        return{
          name:'Rutvik',
          age:21,
          city:'ahmedabad'
        }
    }
}
