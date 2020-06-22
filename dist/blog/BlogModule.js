"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModule = void 0;
const common_1 = require("@nestjs/common");
const PostServices_1 = require("./services/PostServices");
const PostController_1 = require("./PostController");
let BlogModule = class BlogModule {
};
BlogModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [
            PostController_1.PostController
        ],
        providers: [
            PostServices_1.PostService,
        ],
    })
], BlogModule);
exports.BlogModule = BlogModule;
//# sourceMappingURL=BlogModule.js.map