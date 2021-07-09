import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner';
const defaultElement = 'button';
export const createButton = (config) => forwardRef(({ busy, busyIndicator = _jsx(Spinner, {}, void 0), className, children, element, ...rest }, ref) => {
    const Tag = (config === null || config === void 0 ? void 0 : config.element) || element || defaultElement;
    return (_jsx(Tag, Object.assign({ "aria-busy": busy }, config, rest, { className: clsx('ui-button', busy && 'ui-button--busy', config === null || config === void 0 ? void 0 : config.className, className), ref: ref }, { children: busy ? (_jsxs(_Fragment, { children: [_jsx("span", { children: children }, void 0), _jsx("span", { children: busyIndicator }, void 0)] }, void 0)) : (children) }), void 0));
});
export const Button = createButton();
//# sourceMappingURL=Button%20copy.js.map