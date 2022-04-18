"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurmaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const turma_1 = require("./turma");
const turma_controller_1 = require("./turma.controller");
const turma_service_1 = require("./turma.service");
let TurmaModule = class TurmaModule {
};
TurmaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([turma_1.Turma])],
        controllers: [turma_controller_1.TurmaController],
        providers: [turma_service_1.TurmaService],
    })
], TurmaModule);
exports.TurmaModule = TurmaModule;
//# sourceMappingURL=turma.module.js.map