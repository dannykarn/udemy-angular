export class CounterService {
    setToActiveCount: number = 0;
    setToInactiveCount: number = 0;

    incrementSetToActive() {
        this.setToActiveCount++;
        this.logCounts();
    }

    incrementSetToInactive() {
        this.setToInactiveCount++;
        this.logCounts();
    }

    logCounts() {
        console.log('Set to Active Count: ' + this.setToActiveCount);
        console.log('Set to Inactive Count: ' + this.setToInactiveCount);
    }

}