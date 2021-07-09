"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inkPlugin = void 0;
// @ts-ignore
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
// @ts-ignore
exports.inkPlugin = plugin_1.default(function ({ addUtilities }) {
    addUtilities({
        '.ui-ink': {
            '@apply border-ink text-ink dark:border-ink-dark dark:text-ink-dark': {},
        },
        '.ui-ink-primary': {
            '@apply border-ink-primary text-ink-primary dark:border-ink-primary-dark dark:text-ink-primary-dark': {},
        },
        '.ui-ink-secondary': {
            '@apply border-ink-secondary text-ink-secondary dark:border-ink-secondary-dark dark:text-ink-secondary-dark': {},
        },
        '.ui-ink-error': {
            '@apply border-ink-error text-ink-error dark:border-ink-error-dark dark:text-ink-error-dark': {},
        },
        '.ui-ink-success': {
            '@apply border-ink-success text-ink-success dark:border-ink-success-dark dark:text-ink-success-dark': {},
        },
        '.ui-ink-warning': {
            '@apply border-ink-warning text-ink-warning dark:border-ink-warning-dark dark:text-ink-warning-dark': {},
        },
        '.ui-ink-info': {
            '@apply border-ink-info text-ink-info dark:border-ink-info-dark dark:text-ink-info-dark': {},
        },
    });
});
//# sourceMappingURL=ink.plugin.js.map