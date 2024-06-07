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
exports.BasicDataService = void 0;
const common_1 = require("@nestjs/common");
const process_repository_1 = require("../../process.repository");
let BasicDataService = class BasicDataService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async createProcessBasicData(createProcessDto) {
        try {
            const createdProcess = await this.processRepository.create(createProcessDto);
            return createdProcess;
        }
        catch (error) {
            throw new Error(`Error creating process: ${error}`);
        }
    }
    async getAllProcessBasicData() {
        const process = await this.processRepository.findAll({
            is_deleted: 'false',
        });
        process.forEach((process) => {
            process.activities = process.activities.filter((activity) => activity.is_deleted === false);
        });
        return process;
    }
    async getProcessBasicDataById(id) {
        return this.processRepository.findById(id);
    }
    async updateProcessBasicData(id, data) {
        const updateResponse = await this.processRepository.update({ _id: id }, data);
        return updateResponse;
    }
    async deleteProcessBasicData(id) {
        return this.processRepository.delete(id);
    }
    async softDeleteProcessBasicData(id) {
        return this.processRepository.softDelete(id);
    }
};
exports.BasicDataService = BasicDataService;
exports.BasicDataService = BasicDataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], BasicDataService);
//# sourceMappingURL=basic-data.service.js.map