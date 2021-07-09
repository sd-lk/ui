"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdlkPreset = void 0;
const colors_1 = require("./colors");
const button_plugin_1 = require("./button.plugin");
const ink_plugin_1 = require("./ink.plugin");
const link_plugin_1 = require("./link.plugin");
const paper_plugin_1 = require("./paper.plugin");
const spinner_plugin_1 = require("./spinner.plugin");
exports.sdlkPreset = {
    theme: {
        extend: {
            colors: colors_1.colors,
        },
    },
    plugins: [button_plugin_1.buttonPlugin, ink_plugin_1.inkPlugin, link_plugin_1.linkPlugin, paper_plugin_1.paperPlugin, spinner_plugin_1.spinnerPlugin],
    variants: {
        extend: {
            brightness: ['active', 'hover'],
            textColor: ['visited', 'hover', 'active', 'dark'],
        },
    },
};
//# sourceMappingURL=index.js.map