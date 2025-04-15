"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleRepository {
    constructor() {
        this.dataStore = [];
    }
    getData() {
        return this.dataStore;
    }
    saveData(data) {
        this.dataStore.push(data);
    }
}
exports.default = ExampleRepository;
