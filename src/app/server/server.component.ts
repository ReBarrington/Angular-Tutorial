import { Component } from '@angular/core';

// a component is just a TS class with a decorator imported from Angular

@Component({
    // metadata configurations. Needs unique selector. templateUrl is an external file.
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';

    getServerStatus() {
        return this.serverStatus;
    }
}