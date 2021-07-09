"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonPlugin = void 0;
// @ts-ignore
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
// @ts-ignore
exports.buttonPlugin = plugin_1.default(function ({ addBase }) {
    addBase({
        '.ui-button': {
            '@apply py-2 px-4 rounded text-sm font-medium leading-6 flex gap-2 items-center justify-center relative filter active:brightness-90 hover:brightness-95 transition duration-150': {},
        },
        '.ui-button--busy': {
            'pointer-events': 'none',
            '& > :first-child': {
                visibility: 'hidden',
                display: 'inherit',
                gap: 'inherit',
                flexDirection: 'inherit',
            },
            '& > :last-child': {
                '@apply visible absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2': {},
            },
        },
    });
});
//# sourceMappingURL=button.plugin.js.map