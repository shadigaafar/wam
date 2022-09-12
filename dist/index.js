"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.tsx
var components_exports = {};
__export(components_exports, {
  Accordion: () => Accordion,
  Button: () => Button,
  CssGlobal: () => css_global_default,
  IconButton: () => IconButton,
  List: () => List,
  Paper: () => Paper,
  Radio: () => Radio,
  Toggle: () => Toggle,
  Typography: () => Typography,
  UnitControl: () => UnitControl,
  useTheme: () => import_react13.useTheme
});
module.exports = __toCommonJS(components_exports);

// src/components/accordion/index.tsx
var import_styled = __toESM(require("@emotion/styled"));
var import_react2 = require("react");

// src/components/accordion/icon.tsx
var import_react = require("@emotion/react");
var import_jsx_runtime = require("react/jsx-runtime");
var ExpandIcon = ({ upward, color }) => {
  const theme = (0, import_react.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    focusable: "false",
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    "data-testid": "ExpandMoreIcon",
    width: "20px",
    style: {
      transform: upward ? "rotate(180deg)" : "unset"
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      fill: color ? color : theme.pallette.text.primary,
      d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
    })
  });
};
var icon_default = ExpandIcon;

// src/components/accordion/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var AccordionContainer = import_styled.default.div`
	position: relative;
	border: ${(props) => props.withBorder ? `1px solid ${props.theme.pallette.divider}` : "none"};
	background-color: ${(props) => props.theme.pallette.background.paper};
	&:not(:first-of-type) {
		border-top: none;
	}
	&:not(:last-of-type):not(:only-of-type) {
		border-bottom: none;
	}
	&:first-of-type {
		border-top-left-radius: ${(props) => {
  if (!props.square) {
    return props.theme.shape.borderRadius;
  } else {
    return 0;
  }
}};
		border-top-right-radius: ${(props) => {
  if (!props.square) {
    return props.theme.shape.borderRadius;
  } else {
    return 0;
  }
}};
	}
	&:last-of-type {
		border-bottom-left-radius: ${(props) => {
  if (!props.square) {
    return props.theme.shape.borderRadius;
  } else {
    return 0;
  }
}};
		border-bottom-right-radius: ${(props) => {
  if (!props.square) {
    return props.theme.shape.borderRadius;
  } else {
    return 0;
  }
}};
	}
	&:not(:last-of-type):not(:only-of-type) {
		&:after {
			position: absolute;
			left: 0px;
			bottom: 0px;
			right: 0px;
			height: 1px;
			content: "";
			opacity: 1;
			background-color: rgba(28, 27, 27, 0.12);
			transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
				background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		}
	}
`;
var HeaderContainer = import_styled.default.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${(props) => props.theme.spacing(1.5)};
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.actions.hover};
	}
	user-select: none;
`;
var ContentContainer = import_styled.default.div`
	overflow: hidden;
	transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	transition-duration: 222ms;
`;
var Content = import_styled.default.p`
	padding: ${(props) => props.theme.spacing(1.5)};
	margin: 0px;
`;
var TitleTagName = import_styled.default.p`
	margin: 0px;
	padding: 0px;
	line-height: 0;
`;
var Accordion = (0, import_react2.forwardRef)(
  (props, ref) => {
    const contentContainerRef = (0, import_react2.useRef)(null);
    const {
      title,
      content,
      titleTagName,
      square,
      expandIconColor,
      withBorder,
      ...rest
    } = props;
    const [collapse, setCollapse] = (0, import_react2.useState)(false);
    const handleToggleCollapse = () => {
      setCollapse((prev) => !prev);
    };
    (0, import_react2.useLayoutEffect)(() => {
      var _a;
      const scrollHeight = (_a = contentContainerRef.current) == null ? void 0 : _a.scrollHeight;
      if (contentContainerRef.current && collapse) {
        contentContainerRef.current.style.height = scrollHeight + "px";
      } else if (contentContainerRef.current) {
        contentContainerRef.current.style.height = 0 + "px";
      }
    }, [collapse]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContainer, {
      className: "wam-accordion",
      square,
      withBorder: withBorder !== void 0 ? withBorder : true,
      ref,
      ...rest,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeaderContainer, {
          onClick: handleToggleCollapse,
          className: "wam-accordion__header-container",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleTagName, {
              as: titleTagName,
              children: title
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(icon_default, {
              upward: collapse,
              color: expandIconColor
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentContainer, {
          ref: contentContainerRef,
          className: "wam-accordion__content-container",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
            children: content
          })
        })
      ]
    });
  }
);

// src/components/button/index.tsx
var import_react3 = require("react");
var import_styled2 = __toESM(require("@emotion/styled"));
var import_jsx_runtime = require("react/jsx-runtime");
var StyledButton = import_styled2.default.button`
	display: inline-block;
	padding: ${(props) => ` ${props.theme.spacing(0.7)}  ${props.theme.spacing(2)}`};
	text-decoration: none;
	border: none;
	border-radius: ${(props) => {
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	&:hover {
		cursor: pointer;
	}

	${(props) => props.variant === "primary" && `background-color: ${props.theme.pallette.primary.main};
		color: ${props.theme.pallette.primary.contrastText};
		&:hover {
		background-color: ${props.theme.pallette.primary.dark}
		`};
	${(props) => props.variant === "secondary" && `border: 1px solid  ${props.theme.pallette.primary.main};
		color: ${props.theme.pallette.primary.main};
		background: none;
		&:hover {
		background-color: #E3E3E3;
		color: ${props.theme.pallette.primary.dark};
		border: 1px solid  ${props.theme.pallette.primary.dark}
		}`};
	${(props) => props.variant === "tertiary" && `background: none;
		outline: 1px solid transparent;
		color: ${props.theme.pallette.primary.main};
		&:hover {
		color: ${props.theme.pallette.primary.dark};
		outline: 1px solid  ${props.theme.pallette.primary.dark}
		`};

	transition: ${(props) => props.theme.transitions.ease.inOut};
	color: ${(props) => props.theme.pallette.getColor((props == null ? void 0 : props.color) ? props.color : "primary")};
`;
var Button = (0, import_react3.forwardRef)(
  ({ children, variant, square, ...rest }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton, {
      variant: variant ? variant : "primary",
      square,
      ref,
      ...rest,
      children
    });
  }
);

// src/components/css-global/index.tsx
var import_react4 = require("react");
var import_css = require("@emotion/css");

// src/utils/object-to-css.ts
var import_hyphenate_style_name = __toESM(require("hyphenate-style-name"));
var import_add_px_to_style = __toESM(require("add-px-to-style"));
var objectToCss = (obj) => {
  if (typeof obj === "string")
    return obj;
  var keys = Object.keys(obj);
  if (!keys.length)
    return "";
  var i, len = keys.length;
  var rules = "";
  for (i = 0; i < len; i++) {
    var selector = keys[i];
    var selectorValue = obj[selector];
    var properties = Object.keys(selectorValue);
    if (!properties.length)
      return "";
    var index, length = properties.length;
    var res = "";
    for (index = 0; index < length; index++) {
      var property = properties[index];
      var value = selectorValue[property];
      res += (0, import_hyphenate_style_name.default)(property) + ":" + (0, import_add_px_to_style.default)(property, value) + ";";
    }
    rules += (0, import_hyphenate_style_name.default)(selector) + "{" + res + "}";
  }
  return rules;
};
var object_to_css_default = objectToCss;

// src/components/css-global/index.tsx
var import_normalize = require("normalize.css");
var CssGlobal = ({ styles = {} }) => {
  (0, import_react4.useLayoutEffect)(() => {
    import_css.injectGlobal`
        * {
          box-sizing: border-box;
        }
        ${object_to_css_default(styles)}
      `;
  }, []);
  return null;
};
var css_global_default = CssGlobal;

// src/components/icon-button/index.tsx
var import_styled3 = __toESM(require("@emotion/styled"));
var import_react5 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var StyledButton2 = import_styled3.default.button`
	display: inline-block;
	appearance: none;
	text-decoration: none;
	background: none;
	border: none;
	border-radius: ${(props) => {
  if (props.shape === "square") {
    return 0;
  }
  if (props.shape === "rounded") {
    return props.theme.shape.borderRadius;
  }
  return "50%";
}};
	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.background ? props.theme.pallette.getColor(
  (props == null ? void 0 : props.color) ? props.color : "",
  "dark"
) : props.theme.actions.hover};
	}
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex: 0 0 auto;
	padding: 12px;
	overflow: visible;
	font-size: ${(props) => props.size};
	transition: ${(props) => props.theme.transitions.ease.inOut};
	color: ${(props) => props.background ? props.theme.pallette.primary.contrastText : props.theme.pallette.getColor(
  (props == null ? void 0 : props.color) ? props.color : "primary"
)};
	background-color: ${(props) => props.background ? props.theme.pallette.primary.main : "none"};
`;
var getSizeInRem = (size = "1.5rem") => {
  switch (size) {
    case "small":
      return "1rem";
    case "medium":
      return "1.5rem";
    case "large":
      return "1.75rem";
    default:
      return size;
  }
};
var IconButton = (0, import_react5.forwardRef)(
  (props, ref) => {
    const { children, size, color, ...rest } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton2, {
      ref,
      size: getSizeInRem(size),
      ...rest,
      children
    });
  }
);

// src/components/list/index.tsx
var import_styled4 = __toESM(require("@emotion/styled"));
var import_jsx_runtime = require("react/jsx-runtime");
var StyledList = import_styled4.default.ul`
	border: ${(props) => props.border ? ` 1px solid ${props.theme.pallette.divider}` : "none"};
	border-radius: ${(props) => {
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	background-color: ${(props) => props.theme.pallette.background.default};
	list-style-type: none;
	margin: 0;
	padding: 0;
`;
var Item = import_styled4.default.li`
	margin: 0;
	padding: 0;
`;
var Button2 = import_styled4.default.button`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	background: none;
	border: none;
	padding: 8px;
	height: 45px;
	gap: ${(props) => props.theme.spacing(1.5)};
	font-size: ${(props) => props.theme.typography.body1.fontSize};
	svg {
		font-size: 1.3rem;
	}
`;
var List = ({
  items,
  onClickItem,
  htmlComponent,
  border = false,
  square = true
}) => {
  const handleClickItem = (index) => (e) => {
    if (onClickItem)
      onClickItem(index, e);
  };
  const Root2 = htmlComponent ? htmlComponent : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledList, {
      border,
      square,
      children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button2, {
          onClick: handleClickItem(index),
          children: [
            item.icon,
            item.text
          ]
        })
      }, index))
    })
  });
};

// src/components/paper/index.tsx
var import_styled5 = __toESM(require("@emotion/styled"));
var import_react6 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var StyledPaper = import_styled5.default.div`
	background-color: ${(props) => props.theme.pallette.background.paper};
	padding: ${(props) => props.theme.spacing(2)};
	border-radius: ${(props) => {
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	box-shadow: ${(props) => props.theme.shadow(props.elevation)};
`;
var Paper = (0, import_react6.forwardRef)(
  ({ children, elevation, htmlComponent, square }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledPaper, {
      as: htmlComponent,
      square,
      ref,
      elevation,
      children
    });
  }
);

// src/components/radio/index.tsx
var import_react7 = require("@emotion/react");
var import_styled6 = __toESM(require("@emotion/styled"));
var import_react8 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var RadioRoot = import_styled6.default.span`
	--size: 20px;
	width: var(--size);
	height: var(--size);
	border: 2px solid;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-color: ${(props) => props.theme.pallette.text.primary};
	cursor: pointer;
	& > input:checked ~ span {
		opacity: 1;
	}
`;
var Label = import_styled6.default.label`
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	&:not(:last-of-type) {
		margin-bottom: 10px;
	}
`;
var RadioInput = import_styled6.default.input`
	display: none;
`;
var CheckMark = import_styled6.default.span`
	width: calc(100% - 6px);
	height: calc(100% - 6px);
	border-radius: 50%;
	background-color: ${(props) => props.theme.pallette.primary.main};
	opacity: 0;
	transition: opacity 0.3s ease;
	display: inline-block;
`;
var Radio = (0, import_react8.forwardRef)(
  ({ onClick, ...props }, ref) => {
    const theme = (0, import_react7.useTheme)();
    const colorizeBorder = (e) => {
      const radioWrapper = document.querySelectorAll(
        ".wam-radio__wrapper"
      );
      radioWrapper == null ? void 0 : radioWrapper.forEach((value) => {
        value.style.borderColor = theme.pallette.text.primary;
      });
      const root = e.target.parentElement;
      if (root) {
        root.style.borderColor = theme.pallette.primary.main;
      }
      if (onClick) {
        onClick(e);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
      className: "wam-radio",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioRoot, {
          className: "wam-radio__wrapper",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioInput, {
              type: "radio",
              ref,
              onClick: colorizeBorder,
              ...props
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckMark, {})
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "label",
          children: "Choice B"
        })
      ]
    });
  }
);

// src/components/toggle/index.tsx
var import_styled7 = __toESM(require("@emotion/styled"));
var import_react9 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Label2 = import_styled7.default.label`
	position: relative;
	display: inline-block;
	width: ${(props) => props.toggleSize === "small" ? "51.7px" : "60px"};
	height: ${(props) => props.toggleSize === "small" ? "27.5px" : "32px"}; ;
`;
var Slider = import_styled7.default.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;
	&:before {
		position: absolute;
		content: "";
		height: calc(100% - 10px);
		aspect-ratio: 1 / 1;
		top: 50%;

		transform: translate(5px, -50%);
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`;
var Input = import_styled7.default.input`
	opacity: 0;
	width: 0;
	height: 0;
	&:checked + span {
		background-color: ${(props) => props.theme.pallette.primary.main};
	}
	&:checked + span:before {
		top: 50%;

		transform: ${(props) => props.toggleSize === "small" ? "translate(25.8px, -50%)" : "translate(30px, -50%)"};
	}
`;
var Toggle = (0, import_react9.forwardRef)(
  ({ toggleSize, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label2, {
      className: "switch",
      toggleSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
          type: "checkbox",
          toggleSize,
          ref,
          ...props
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
          className: "slider round",
          toggleSize
        })
      ]
    });
  }
);

// src/components/typography/index.tsx
var import_react10 = require("@emotion/react");
var import_react11 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Typography = (0, import_react11.forwardRef)(({ htmlComponent, children, ...props }, ref) => {
  const Root2 = htmlComponent ? htmlComponent : "p";
  const theme = (0, import_react10.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
    ref,
    ...props,
    style: {
      color: props.variant === "secondary" ? theme.pallette.text.secondary : theme.pallette.text.primary
    },
    children
  });
});

// src/components/unit-control/index.tsx
var import_styled8 = __toESM(require("@emotion/styled"));
var import_react12 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var getSizeInRem2 = (size = "1.5rem") => {
  switch (size) {
    case "small":
      return "1.6rem";
    case "medium":
      return "2rem";
    case "large":
      return "2.5rem";
    default:
      return size;
  }
};
var Root = import_styled8.default.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.spacing(1)};
`;
var Input2 = import_styled8.default.input`
	appearance: textfield;
	&::-webkit-inner-spin-button {
		appearance: none;
	}
	background-color: transparent;
	box-sizing: border-box;
	border: none;
	color: rgb(30, 30, 30);
	display: block;
	font-family: inherit;
	outline: none;
	margin: 0px;
	max-width: 100px;
	width: 100%;
	font-size: inherit;
	height: ${(props) => getSizeInRem2(props.sss)};
	line-height: 1;
	min-height: 1.6rem;
	padding-left: 8px;
	padding-right: 8px;
	box-shadow: none;
	&:focus {
		border-radius: ${(props) => {
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
		box-shadow: 0px 0px 0px 2px
			${(props) => props.theme.pallette.primary.main};
	}
`;
var UnitSelect = import_styled8.default.div`
	position: absolute;
	top: 0;
	left: ${(props) => props.theme.direction === "rtl" ? 0 : " unset"};
	right: ${(props) => props.theme.direction === "ltr" ? 0 : " unset"};
	height: 100%;
	max-width: fit-content;
	width: 100%;
`;
var UnitInput = import_styled8.default.input`
	position: relative;
	left: ${(props) => props.theme.direction === "ltr" ? "2px" : 0};
	right: ${(props) => props.theme.direction === "rtl" ? "2px" : 0};
	user-select: none;
	text-align: center;
	background: transparent;
	height: inherit;
	border: none;
	border-radius: 0;
	cursor: pointer;
	box-sizing: border-box;
	outline: 1.8px solid ${(props) => props.theme.pallette.primary.main};
	background-color: ${(props) => props.theme.pallette.primary.main};
	color: ${(props) => props.theme.pallette.primary.contrastText};
	border-top-right-radius: ${(props) => {
  if (props.theme.direction === "rtl") {
    return "none";
  }
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	border-bottom-right-radius: ${(props) => {
  if (props.theme.direction === "rtl") {
    return "none";
  }
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	border-top-left-radius: ${(props) => {
  if (props.theme.direction === "ltr") {
    return "none";
  }
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	border-bottom-left-radius: ${(props) => {
  if (props.theme.direction === "ltr") {
    return "none";
  }
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
	user-select: none;
`;
var UnitOptionList = import_styled8.default.ul`
	position: absolute;
	top: 0;
	padding: 5px;
	margin: 0;
	list-style-type: none;
	border: 1px solid ${(props) => props.theme.pallette.divider};
	cursor: pointer;
	width: fit-content;
	box-sizing: border-box;
`;
var UnitOption = import_styled8.default.li`
	user-select: none;
	&:hover {
		background-color: ${(props) => props.theme.actions.hover};
	}
`;
var UnitControlInnerContainer = import_styled8.default.div`
	position: relative;
	width: fit-content;
	border: 1px solid;
	border-radius: ${(props) => {
  if (props.square) {
    return 0;
  }
  if (props.theme.shape.square) {
    return 0;
  }
  return props.theme.shape.borderRadius;
}};
`;
var UnitControl = (0, import_react12.forwardRef)(
  (props, ref) => {
    const {
      square,
      size,
      onChange,
      onChangeValue,
      onChangeUnit,
      units,
      style,
      ...rest
    } = props;
    const unitInputRef = (0, import_react12.useRef)(null);
    const unitListRef = (0, import_react12.useRef)(null);
    const [showUnitList, setShowUnitList] = (0, import_react12.useState)(false);
    const [unitInputValue, setUnitInputValue] = (0, import_react12.useState)(units[0]);
    const [value, setValue] = (0, import_react12.useState)(0);
    const handleOnChange = (e) => {
      const _value = +e.target.value;
      setValue(_value);
    };
    const handleOnSelectUnit = (unit) => () => {
      setUnitInputValue(unit);
      setShowUnitList(false);
    };
    (0, import_react12.useLayoutEffect)(() => {
      const listElement = unitListRef.current;
      const listWidth = listElement == null ? void 0 : listElement.clientWidth;
      const unitInputElement = unitInputRef == null ? void 0 : unitInputRef.current;
      const unitInputHeight = unitInputElement == null ? void 0 : unitInputElement.scrollHeight;
      if (unitInputElement && listWidth && unitInputHeight) {
        unitInputElement.style.maxWidth = listWidth + 1 + "px";
        listElement.style.top = unitInputHeight + 2 + "px";
      }
    }, []);
    (0, import_react12.useEffect)(() => {
      if (onChangeValue) {
        onChangeValue(value);
      }
    }, [value]);
    (0, import_react12.useEffect)(() => {
      if (onChange) {
        onChange(value + unitInputValue);
      }
    }, [value, unitInputValue]);
    (0, import_react12.useEffect)(() => {
      if (onChangeUnit) {
        onChangeUnit(unitInputValue);
      }
    }, [unitInputValue]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
      ref,
      ...rest,
      style,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
          children: "Label"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UnitControlInnerContainer, {
          square,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input2, {
              square,
              sss: size ? size : "small",
              inputMode: "numeric",
              type: "number",
              onChange: handleOnChange,
              value
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(UnitSelect, {
              role: "select",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitInput, {
                  square,
                  ref: unitInputRef,
                  type: "text",
                  onClick: () => setShowUnitList((prev) => !prev),
                  value: unitInputValue,
                  readOnly: true
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitOptionList, {
                  ref: unitListRef,
                  style: {
                    visibility: showUnitList ? "visible" : "hidden"
                  },
                  children: units.map((unit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitOption, {
                    onClick: handleOnSelectUnit(unit),
                    children: unit
                  }, index))
                })
              ]
            })
          ]
        })
      ]
    });
  }
);

// src/components/index.tsx
var import_react13 = require("@emotion/react");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Button,
  CssGlobal,
  IconButton,
  List,
  Paper,
  Radio,
  Toggle,
  Typography,
  UnitControl,
  useTheme
});
