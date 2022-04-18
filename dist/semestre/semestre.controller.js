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
exports.SemestreController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const semestre_1 = require("./semestre");
const semestre_service_1 = require("./semestre.service");
let SemestreController = class SemestreController {
    constructor(service) {
        this.service = service;
    }
};
SemestreController = __decorate([
    (0, crud_1.Crud)({
        model: {
            type: semestre_1.Semestre,
        },
    }),
    (0, common_1.Controller)('semestre'),
    __metadata("design:paramtypes", [semestre_service_1.SemestreService])
], SemestreController);
exports.SemestreController = SemestreController;
//# sourceMappingURL=semestre.controller.js.map