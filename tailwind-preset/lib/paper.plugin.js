"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paperPlugin = void 0;
// @ts-ignore
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
// @ts-ignore
exports.paperPlugin = plugin_1.default(({ addUtilities }) => {
    addUtilities({
        '.ui-paper': {
            '@apply bg-paper dark:bg-paper-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-2': {
            '@apply bg-paper-2 dark:bg-paper-2-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-primary': {
            '@apply bg-paper-primary dark:bg-paper-primary-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-secondary': {
            '@apply bg-paper-secondary dark:bg-paper-secondary-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-error': {
            '@apply bg-paper-error dark:bg-paper-error-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-success': {
            '@apply bg-paper-success dark:bg-paper-success-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-warning': {
            '@apply bg-paper-warning dark:bg-paper-warning-dark': {},
            borderColor: 'currentColor',
        },
        '.ui-paper-info': {
            '@apply bg-paper-info dark:bg-paper-info-dark': {},
            borderColor: 'currentColor',
        },
    });
});
//# sourceMappingURL=paper.plugin.js.map