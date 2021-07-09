"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinnerPlugin = void 0;
// @ts-ignore
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
// @ts-ignore
exports.spinnerPlugin = plugin_1.default(({ addBase }) => {
    addBase({
        '.ui-spinner': {
            '@apply rounded-full border-2 w-6 h-6 animate-spinner': {},
            borderColor: 'currentColor',
            borderLeftColor: 'transparent !important',
            borderRightColor: 'transparent !important',
        },
    });
});
//# sourceMappingURL=spinner.plugin.js.map