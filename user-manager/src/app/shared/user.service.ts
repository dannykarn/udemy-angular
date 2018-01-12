import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) { }

    setUserToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        // this.logUsers();

        this.counterService.incrementSetToActive();
    }

    setUserToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        // this.logUsers();

        this.counterService.incrementSetToInactive();
    }

    logUsers() {
        console.log('Active Users: ' + this.activeUsers);
        console.log('Inactive Users: ' + this.inactiveUsers);
    }

}