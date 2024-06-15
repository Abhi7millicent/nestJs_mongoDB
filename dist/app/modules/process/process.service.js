"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessService = void 0;
const common_1 = require("@nestjs/common");
const process_repository_1 = require("./process.repository");
let ProcessService = class ProcessService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async getByProcessById(processId) {
        return this.processRepository.findById(processId);
    }
    async createProcess(createProcessDto) {
        try {
            console.log('createProcessDto:', createProcessDto);
            const createdProcess = await this.processRepository.create(createProcessDto);
            return createdProcess;
        }
        catch (error) {
            throw new Error('Failed to create process.');
        }
    }
    async getAllProcess() {
        const process = await this.processRepository.findAll({
            is_deleted: 'false',
        });
        process.forEach((process) => {
            process.activities = process.activities.filter((activity) => activity.is_deleted === false);
        });
        return process;
    }
    async getProcessById(id) {
        return this.processRepository.findById(id);
    }
    async deleteProcess(id) {
        return this.processRepository.delete(id);
    }
    async softDeleteProcess(id) {
        return this.processRepository.softDelete(id);
    }
};
exports.ProcessService = ProcessService;
exports.ProcessService = ProcessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], ProcessService);
//# sourceMappingURL=process.service.js.map