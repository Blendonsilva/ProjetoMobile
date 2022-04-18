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
exports.AlunoController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const aluno_1 = require("./aluno");
const aluno_service_1 = require("./aluno.service");
let AlunoController = class AlunoController {
    constructor(service) {
        this.service = service;
    }
};
AlunoController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: aluno_1.Aluno,
        },
    }),
    (0, common_1.Controller)('aluno'),
    __metadata("design:paramtypes", [aluno_service_1.AlunoService])
], AlunoController);
exports.AlunoController = AlunoController;
//# sourceMappingURL=aluno.controller.js.map