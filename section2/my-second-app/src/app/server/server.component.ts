import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    // TypeScript will infer the type
    id = 10;
    status = 'offline';
    // You can also explicitly declare the type
    // id: number = 10;
    // status: string = 'offline';

    constructor() {
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.status;
    }

    getColor() {
        return this.status === 'online' ? 'green' : 'red';
    }

}