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
exports.DataManagementService = void 0;
const common_1 = require("@nestjs/common");
const process_constants_1 = require("../../constant/process.constants");
const process_utils_1 = require("../../helper/process.utils");
const process_repository_1 = require("../../process.repository");
let DataManagementService = class DataManagementService {
    constructor(processRepository) {
        this.processRepository = processRepository;
    }
    async update(processId, dataManagementId, dataManagementDto) {
        const auditData = {
            last_modified_by: dataManagementDto.last_modified_by,
            last_modified_on: new Date(),
        };
        delete dataManagementDto.last_modified_by;
        const data = await this.processRepository.updateByKey(processId, (0, process_utils_1.findPath)(process_constants_1.PROCESS, process_constants_1.data_management), dataManagementId, dataManagementDto);
        if (data.acknowledged) {
            const updateResponseDto = await this.processRepository.update({ _id: processId }, auditData);
            return updateResponseDto;
        }
        else {
            return data;
        }
    }
};
exports.DataManagementService = DataManagementService;
exports.DataManagementService = DataManagementService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.ProcessRepository])
], DataManagementService);
//# sourceMappingURL=data-management.service.js.map