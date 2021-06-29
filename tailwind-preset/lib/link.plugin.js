"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkPlugin = void 0;
// @ts-ignore
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
// @ts-ignore
exports.linkPlugin = plugin_1.default(function ({ addBase }) {
    addBase({
        'a.ui-link, .ui-link-box a': {
            '@apply underline text-link dark:text-link-dark active:text-link-active dark:active:text-link-active-dark hover:text-link-hover dark:hover:text-link-hover-dark visited:text-link-visited dark:visited:text-link-visited-dark': {},
        },
    }, { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] });
});
//# sourceMappingURL=link.plugin.js.map