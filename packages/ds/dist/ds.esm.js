import React, { forwardRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
export { ThemeProvider } from 'styled-components';
import { compose, space as space$1, color, layout, flexbox, border, position, variant, grid, typography, system } from 'styled-system';
import css$1 from '@styled-system/css';
import { darken, lighten } from 'polished';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var Box = /*#__PURE__*/styled.div({
  boxSizing: 'border-box',
  minWidth: 0
}, /*#__PURE__*/compose(space$1, color, layout, flexbox, border, position));

var AspectRatio = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$ratio = _ref.ratio,
      ratio = _ref$ratio === void 0 ? 16 / 9 : _ref$ratio,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["ratio", "children"]);

  return React.createElement(Box, {
    ref: ref,
    position: "relative",
    overflow: "hidden"
  }, React.createElement(Box, {
    width: "100%",
    height: 0,
    pb: 100 / ratio + '%'
  }), React.createElement(Box, Object.assign({}, props, {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }), children));
});
AspectRatio.defaultProps = {
  ratio: 1 / 1
};

var imageVariants = /*#__PURE__*/variant({
  variants: {
    "default": {},
    avatar: {
      width: 3,
      height: 3,
      borderRadius: 999999
    }
  }
});
var Image = /*#__PURE__*/styled.img({
  maxWidth: '100%',
  height: 'auto'
}, /*#__PURE__*/compose(space$1, layout, flexbox, border, position), imageVariants);
Image.defaultProps = {
  variant: 'default'
};

var CoverImage = /*#__PURE__*/styled(Image)({
  objectFit: 'cover',
  objectPosition: 'center'
});
var AspectImage = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var ratio = _ref.ratio,
      props = _objectWithoutPropertiesLoose(_ref, ["ratio", "children"]);

  return React.createElement(AspectRatio, {
    ratio: ratio
  }, React.createElement(CoverImage, Object.assign({
    ref: ref
  }, props)));
});
AspectImage.defaultProps = {
  ratio: 1 / 1
};

var Flex = /*#__PURE__*/styled(Box)({
  display: 'flex'
});

var Grid = /*#__PURE__*/styled(Box)({
  display: 'grid'
}, grid);

var typographyFunctions = /*#__PURE__*/compose(space$1, color, layout, flexbox, border, position, typography);

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var defaultHeadingStyles = {
  fontFamily: 'heading',
  fontWeight: 'bold',
  lineHeight: 'title',
  color: 'text.primary',
  mt: 0,
  mb: 0
};
var headingVariant = /*#__PURE__*/variant({
  variants: {
    'heading-1': /*#__PURE__*/_extends({
      fontSize: [7, 8, 9, 9]
    }, defaultHeadingStyles),
    'heading-2': /*#__PURE__*/_extends({
      fontSize: [6, 7, 8, 8]
    }, defaultHeadingStyles),
    'heading-3': /*#__PURE__*/_extends({
      fontSize: [5, 6, 7, 7]
    }, defaultHeadingStyles),
    'heading-4': /*#__PURE__*/_extends({
      fontSize: [4, 5, 6, 6]
    }, defaultHeadingStyles),
    'heading-5': /*#__PURE__*/_extends({
      fontSize: [3, 4, 5, 5]
    }, defaultHeadingStyles)
  }
});
var Heading = /*#__PURE__*/styled.h1( /*#__PURE__*/_templateObject(), headingVariant, typographyFunctions);
Heading.defaultProps = {
  variant: 'heading-1'
};

var lastId = 0;
function uuid() {
  lastId++;
  return "icon-" + lastId;
}

var SvgComponent = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
});
var SvgCheckCircle = /*#__PURE__*/styled(SvgComponent)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$1 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
});
var SvgCheckboxBlank = /*#__PURE__*/styled(SvgComponent$1)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$2 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
});
var SvgCheckboxChecked = /*#__PURE__*/styled(SvgComponent$2)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$3 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }));
});
var SvgCheckboxIndeterminate = /*#__PURE__*/styled(SvgComponent$3)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$4 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
});
var SvgClose = /*#__PURE__*/styled(SvgComponent$4)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$5 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
  }));
});
var SvgError = /*#__PURE__*/styled(SvgComponent$5)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$6 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    width: "1em",
    height: "1em",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});
var SvgExpandMore = /*#__PURE__*/styled(SvgComponent$6)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$7 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
  }));
});
var SvgInfo = /*#__PURE__*/styled(SvgComponent$7)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$8 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
  }));
});
var SvgLoader = /*#__PURE__*/styled(SvgComponent$8)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$9 = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    height: "1em",
    viewBox: "0 0 24 24",
    width: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});
var SvgPlace = /*#__PURE__*/styled(SvgComponent$9)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$a = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
});
var SvgRadioChecked = /*#__PURE__*/styled(SvgComponent$a)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$b = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
});
var SvgRadioUnchecked = /*#__PURE__*/styled(SvgComponent$b)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$c = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }));
});
var SvgSearch = /*#__PURE__*/styled(SvgComponent$c)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$d = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  }));
});
var SvgVisibility = /*#__PURE__*/styled(SvgComponent$d)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var SvgComponent$e = /*#__PURE__*/forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, ["title"]);

  var _useState = useState(function () {
    return title ? uuid() : undefined;
  }),
      titleId = _useState[0];

  return React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? React.createElement("title", {
    id: titleId
  }, title) : null, React.createElement("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }));
});
var SvgVisibilityOff = /*#__PURE__*/styled(SvgComponent$e)({
  flex: 'none',
  verticalAlign: 'middle'
}, /*#__PURE__*/compose(space$1, color, layout, typography));

var Icons = {
  CheckCircle: SvgCheckCircle,
  CheckboxBlank: SvgCheckboxBlank,
  CheckboxChecked: SvgCheckboxChecked,
  CheckboxIndeterminate: SvgCheckboxIndeterminate,
  Close: SvgClose,
  Error: SvgError,
  ExpandMore: SvgExpandMore,
  Info: SvgInfo,
  Loader: SvgLoader,
  Place: SvgPlace,
  RadioChecked: SvgRadioChecked,
  RadioUnchecked: SvgRadioUnchecked,
  Search: SvgSearch,
  Visibility: SvgVisibility,
  VisibilityOff: SvgVisibilityOff
};

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  animation: ", " 3s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var spin = /*#__PURE__*/keyframes( /*#__PURE__*/_templateObject$1());
var RotatingLoader = /*#__PURE__*/styled(Icons.Loader)( /*#__PURE__*/_templateObject2(), spin);
var Spinner = function Spinner(_ref) {
  var block = _ref.block,
      title = _ref.title,
      size = _ref.size,
      color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, ["block", "title", "size", "color"]);

  return React.createElement(Box, Object.assign({
    display: block ? 'block' : 'inline-block'
  }, props), React.createElement(RotatingLoader, {
    title: title,
    fontSize: size,
    color: color
  }));
};
Spinner.defaultProps = {
  block: true,
  title: 'Loading…',
  color: 'ui.primary'
};

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 'copy',
  color: 'text.primary',
  mt: 0,
  mb: 0
};
var textVariants = /*#__PURE__*/variant({
  variants: {
    body: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultextStyles), {}, {
      fontSize: 2
    }),
    caption: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultextStyles), {}, {
      fontSize: 1
    }),
    hint: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultextStyles), {}, {
      fontSize: 0
    }),
    label: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultextStyles), {}, {
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'medium'
    })
  }
});
var Text = /*#__PURE__*/styled.p( /*#__PURE__*/_templateObject$2(), textVariants, typographyFunctions);
Text.defaultProps = {
  variant: 'body'
};

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var linkVariants = /*#__PURE__*/variant({
  variants: {
    "default": {
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: 'medium',
      color: 'brand.primary',
      lineHeight: 'copy',
      textDecoration: 'underline',
      ':hover': {
        color: 'brand.secondary'
      },
      ':active': {
        color: 'brand.primary'
      }
    },
    inline: {
      fontFamily: 'body',
      fontSize: 'inherit',
      fontWeight: 'medium',
      color: 'brand.primary',
      lineHeight: 'copy',
      textDecoration: 'underline',
      ':hover': {
        color: 'brand.secondary'
      },
      ':active': {
        color: 'brand.primary'
      }
    },
    nav1: {
      fontFamily: 'heading',
      fontSize: 3,
      fontWeight: 'bold',
      color: 'ui.primary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'ui.secondary'
      },
      ':active': {
        textDecoration: 'underline',
        color: 'ui.secondary'
      }
    },
    nav2: {
      fontFamily: 'heading',
      fontSize: 2,
      fontWeight: 'bold',
      color: 'ui.primary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'ui.secondary'
      },
      ':active': {
        textDecoration: 'underline',
        color: 'ui.secondary'
      }
    },
    nav3: {
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'bold',
      color: 'ui.primary',
      lineHeight: 'copy',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: 'ui.secondary'
      },
      ':active': {
        textDecoration: 'underline',
        color: 'ui.secondary'
      }
    }
  }
});
var Link = /*#__PURE__*/styled.a( /*#__PURE__*/_templateObject$3(), linkVariants, typographyFunctions);
Link.defaultProps = {
  variant: 'default'
};

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  ", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledLabel = /*#__PURE__*/styled(Text)( /*#__PURE__*/_templateObject$4(), function (props) {
  return props.required && "&:after {\n      content: \"*\";\n      color: " + props.theme.colors.brand.secondary + ";\n    }";
});
StyledLabel.defaultProps = {
  pl: 0,
  pr: 0
};
var Label = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      as = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "as"]);

  return React.createElement(StyledLabel, Object.assign({
    as: as,
    variant: "label",
    ref: ref,
    color: "text.primary"
  }, props), children, props.adornment && React.createElement(Box, {
    display: "inline-flex",
    alignItems: "center",
    color: "text.secondary",
    ml: 1
  }, props.adornment));
});
Label.defaultProps = {
  required: false,
  as: 'label'
};

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  outline: 1px solid ", ";\n  outline-offset: 1px;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var focusRing = /*#__PURE__*/css( /*#__PURE__*/_templateObject$5(), function (props) {
  return props.theme.colors.brand.accent;
});

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n\n  svg {\n    display: block;\n    font-size: ", ";\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n\n  svg {\n    display: block;\n    font-size: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  appearance: none;\n\n  padding-left: ", ";\n\n  padding-right: ", "px;\n\n  border-color: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:focus {\n    ", "\n\n    &::placeholder {\n      color: transparent;\n    }\n  }\n\n  &:-moz-read-only {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:read-only {\n    background-color: ", ";\n    border-color: ", ";\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &:disabled {\n    -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */\n    opacity: 1; /* correct opacity on iOS */\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n\n    &::placeholder {\n      color: ", ";\n      opacity: 1;\n    }\n  }\n\n  ", "\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var inputTokens = {
  iconSize: 4,
  y: 2,
  x: 2
};
var ContentArea = /*#__PURE__*/styled(Text)( /*#__PURE__*/_templateObject$6(), function (props) {
  return props.hasLeftIcon ? "calc(" + props.theme.fontSizes[inputTokens.iconSize] + " + " + 2 * props.theme.space[inputTokens.x] + "px)" : props.theme.space[inputTokens.x] + 'px';
}, function (props) {
  return props.hasRightIcon ? inputTokens.iconSize + 2 * props.theme.space[inputTokens.x] : props.theme.space[inputTokens.x];
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.text.secondary;
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, focusRing, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.text.secondary;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, /*#__PURE__*/compose(space$1, layout, flexbox, border, position, color));
ContentArea.defaultProps = {
  pt: inputTokens.y,
  pb: inputTokens.y,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  color: 'text.primary',
  bg: 'ui.quaternary',
  mb: 0
};
var LeftIcon = /*#__PURE__*/styled(Box)( /*#__PURE__*/_templateObject2$1(), function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary;
});
var RightIcon = /*#__PURE__*/styled(Box)( /*#__PURE__*/_templateObject3(), function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.disabled && {
    color: props.theme.colors.text.disabled
  };
});
var Input = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["leftIcon", "rightIcon", "mb", "mt", "mx", "my", "ml", "mr", "disabled"]);

  return React.createElement(Flex, {
    alignItems: "center",
    position: "relative",
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, leftIcon && React.createElement(LeftIcon, {
    left: inputTokens.x,
    disabled: disabled
  }, leftIcon), React.createElement(ContentArea, Object.assign({
    as: "input",
    variant: "body",
    ref: ref,
    py: 2,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: !!rightIcon,
    disabled: disabled,
    "aria-invalid": props.error ? 'true' : 'false'
  }, props)), rightIcon && React.createElement(RightIcon, {
    right: inputTokens.x,
    disabled: disabled
  }, rightIcon));
});
Input.defaultProps = {
  error: false,
  type: 'text'
};

function _templateObject2$2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  display: block;\n  appearance: none;\n  -webkit-appearance: none;\n  resize: vertical;\n  width: 100%;\n  min-height: ", "px;\n  padding: ", "px;\n\n  border-color: ", ";\n\n  &::placeholder {\n    color: ", ";\n    font-size: ", "px;\n    font-weight: normal;\n  }\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:focus {\n    ", "\n\n    &::placeholder {\n      color: transparent;\n    }\n  }\n\n  &:-moz-read-only {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:read-only {\n    background-color: ", ";\n    border-color: ", ";\n\n    &::placeholder {\n      color: ", ";\n    }\n  }\n\n  &:disabled {\n    -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */\n    opacity: 1; /* correct opacity on iOS */\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n\n    &::placeholder {\n      color: ", ";\n      opacity: 1;\n    }\n  }\n\n  ", "\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ContentArea$1 = /*#__PURE__*/styled(Text)( /*#__PURE__*/_templateObject$7(), function (props) {
  return props.theme.sizes[3] + 14;
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.text.secondary;
}, function (props) {
  return props.theme.sizes[1];
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, focusRing, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.text.secondary;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, /*#__PURE__*/compose(space$1, layout, flexbox, border, position, color));
ContentArea$1.defaultProps = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  bg: 'ui.quaternary'
};
var StyledText = /*#__PURE__*/styled(Text)( /*#__PURE__*/_templateObject2$2(), function (props) {
  return props.error ? props.theme.colors.text.error : props.theme.colors.text.secondary;
});
var TextArea = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var maxCharacters = _ref.maxCharacters,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      error = _ref.error,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutPropertiesLoose(_ref, ["maxCharacters", "placeholder", "disabled", "error", "mb", "mt", "mx", "my", "ml", "mr"]);

  var _useState = useState(props.value ? props.value.length : 0),
      characterCount = _useState[0],
      setCharacterCount = _useState[1];

  var isError = error || maxCharacters && characterCount > maxCharacters ? true : false;
  return React.createElement(Box, {
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, React.createElement(ContentArea$1, Object.assign({
    as: "textarea",
    variant: "body",
    mb: 0,
    ref: ref,
    placeholder: placeholder,
    disabled: disabled,
    onChange: function onChange(e) {
      return setCharacterCount(e.target.value.length);
    },
    error: isError,
    "aria-invalid": isError ? 'true' : 'false'
  }, props)), maxCharacters ? React.createElement(Text, {
    variant: "hint",
    width: "100%",
    color: isError ? 'text.error' : 'text.secondary',
    textAlign: "right"
  }, characterCount + "/" + maxCharacters) : null);
});
TextArea.defaultProps = {
  error: false,
  placeholder: '',
  maxCharacters: undefined
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n\n  input:checked ~ & {\n    display: none;\n  }\n\n  ", "\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n\n  input:checked ~ & {\n    display: block;\n  }\n\n  ", "\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n\n  font-size: ", "px;\n  margin-right: ", "px;\n\n  &:hover {\n    color: ", ";\n  }\n\n  input:focus ~ & {\n    color: ", ";\n    ", "\n  }\n\n  input:checked:disabled ~ &,\n  input:disabled ~ & {\n    color: ", ";\n  }\n\n  input:checked ~ & {\n    color: ", ";\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var checkboxIconStyles = /*#__PURE__*/css( /*#__PURE__*/_templateObject$8(), function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, focusRing, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
});
var CheckboxUnchecked = /*#__PURE__*/styled(Icons.CheckboxChecked)( /*#__PURE__*/_templateObject2$3(), checkboxIconStyles);
var CheckboxChecked = /*#__PURE__*/styled(Icons.CheckboxBlank)( /*#__PURE__*/_templateObject3$1(), checkboxIconStyles);

var CheckboxIcon = function CheckboxIcon(props) {
  return React.createElement(React.Fragment, null, React.createElement(CheckboxUnchecked, Object.assign({}, props)), React.createElement(CheckboxChecked, Object.assign({}, props)));
};

var Checkbox = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "label", "disabled", "error", "mb", "mt", "mx", "my", "ml", "mr"]);

  return React.createElement(Text, {
    as: "label",
    variant: "body",
    display: "flex",
    alignItems: "center",
    color: disabled ? 'text.disabled' : 'text.primary',
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, React.createElement(Box, {
    display: "inline-block"
  }, React.createElement(Box, Object.assign({
    ref: ref,
    as: "input",
    type: "checkbox",
    disabled: disabled
  }, props, {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: "hidden",
    "aria-invalid": error ? 'true' : 'false'
  })), React.createElement(Box, {
    as: CheckboxIcon,
    display: "inline-block",
    "aria-hidden": "true",
    disabled: disabled,
    error: error
  })), label);
});
Checkbox.defaultProps = {};

function _templateObject3$2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: none;\n\n  input:checked ~ & {\n    display: block;\n  }\n\n  ", "\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n\n  input:checked ~ & {\n    display: none;\n  }\n\n  ", "\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n\n  font-size: ", "px;\n  margin-right: ", "px;\n\n  &:hover {\n    color: ", ";\n  }\n\n  input:focus ~ & {\n    color: ", ";\n    ", "\n  }\n\n  input:checked:disabled ~ &,\n  input:disabled ~ & {\n    color: ", ";\n  }\n\n  input:checked ~ & {\n    color: ", ";\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var radioIconStyles = /*#__PURE__*/css( /*#__PURE__*/_templateObject$9(), function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, focusRing, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
});
var RadioUnchecked = /*#__PURE__*/styled(Icons.RadioUnchecked)( /*#__PURE__*/_templateObject2$4(), radioIconStyles);
var RadioChecked = /*#__PURE__*/styled(Icons.RadioChecked)( /*#__PURE__*/_templateObject3$2(), radioIconStyles);

var RadioIcon = function RadioIcon(props) {
  return React.createElement(React.Fragment, null, React.createElement(RadioUnchecked, Object.assign({}, props)), React.createElement(RadioChecked, Object.assign({}, props)));
};

var Radio = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "label", "disabled", "error", "mb", "mt", "mx", "my", "ml", "mr"]);

  return React.createElement(Text, {
    as: "label",
    variant: "body",
    display: "flex",
    alignItems: "center",
    color: disabled ? 'text.disabled' : 'text.primary',
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, React.createElement(Box, {
    display: "inline-block"
  }, React.createElement(Box, Object.assign({
    ref: ref,
    as: "input",
    type: "radio",
    disabled: disabled
  }, props, {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: "hidden",
    "aria-invalid": error ? 'true' : 'false'
  })), React.createElement(Box, {
    as: RadioIcon,
    display: "inline-block",
    "aria-hidden": "true",
    disabled: disabled,
    error: error
  })), label);
});
Radio.defaultProps = {};

function _templateObject2$5() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n\n  &:focus {\n    ", "\n  }\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  width: ", ";\n  height: ", ";\n  svg {\n    position: absolute;\n    display: block;\n    font-size: ", ";\n  }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var defaultButtonStyles = {
  position: 'relative',
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'regular',
  lineHeight: 'copy',
  borderRadius: 0,
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 3,
  ml: 0,
  mr: 0,
  mb: 0,
  appearance: 'none'
};
var buttonVariants = /*#__PURE__*/variant({
  variants: {
    primary: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultButtonStyles), {}, {
      bg: 'brand.primary',
      color: 'text.inverse',
      borderColor: 'transparent',
      ' svg': {
        color: 'text.inverse'
      },
      '&:hover': {
        backgroundColor: 'highlights.primaryHighlight'
      },
      '&:active, &:focus': {
        backgroundColor: 'highlights.primaryExtraHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled'
      }
    }),
    secondary: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultButtonStyles), {}, {
      bg: 'bg.primary',
      color: 'brand.primary',
      borderColor: 'brand.primary',
      ' svg': {
        color: 'brand.primary'
      },
      '&:hover': {
        borderColor: 'highlights.primaryHighlight'
      },
      '&:active, &:focus': {
        borderColor: 'highlights.primaryExtraHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'bg.primary',
        borderColor: 'ui.disabled'
      }
    }),
    transparent: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, defaultButtonStyles), {}, {
      bg: 'transparent',
      color: 'brand.primary',
      borderColor: 'transparent',
      ' svg': {
        color: 'brand.primary'
      },
      '&:hover': {
        backgroundColor: 'highlights.bgHighlight'
      },
      '&:active, &:focus': {
        backgroundColor: 'highlights.bgHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled'
      }
    })
  }
});
var ButtonIcon = /*#__PURE__*/styled(Box)( /*#__PURE__*/_templateObject$a(), function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.fontSizes[4];
});
var StyledButton = /*#__PURE__*/styled.button( /*#__PURE__*/_templateObject2$5(), buttonVariants, /*#__PURE__*/compose(space$1, layout, flexbox, border, position), focusRing);
var Button = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      children = _ref.children,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutPropertiesLoose(_ref, ["leftIcon", "rightIcon", "disabled", "isLoading", "children", "mb", "mt", "mx", "my", "ml", "mr"]);

  return React.createElement(StyledButton, Object.assign({
    ref: ref,
    py: 2,
    disabled: disabled,
    isLoading: isLoading
  }, props, {
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }), isLoading && React.createElement(Spinner, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    size: 4
  }), React.createElement(Flex, {
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    opacity: isLoading ? 0 : 1
  }, leftIcon && React.createElement(ButtonIcon, {
    disabled: disabled,
    mr: 2
  }, leftIcon), children, rightIcon && React.createElement(ButtonIcon, {
    disabled: disabled,
    ml: 2
  }, rightIcon)));
});
Button.defaultProps = {
  variant: 'primary'
};

function _templateObject2$6() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var Field = /*#__PURE__*/styled(Grid).attrs({
  gridGap: 1,
  role: 'group'
})( /*#__PURE__*/_templateObject$b());
var FieldSet = /*#__PURE__*/styled(Grid).attrs({
  gridGap: 1,
  as: 'fieldset'
})( /*#__PURE__*/_templateObject2$6());
FieldSet.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0
};

function _templateObject2$7() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var Hint = /*#__PURE__*/styled(Text).attrs({
  variant: 'hint',
  color: 'text.secondary'
})( /*#__PURE__*/_templateObject$c());
var Error = /*#__PURE__*/styled(Text).attrs({
  variant: 'hint',
  color: 'text.error'
})( /*#__PURE__*/_templateObject2$7());

var FormControl = {
  Field: Field,
  FieldSet: FieldSet,
  Hint: Hint,
  Error: Error
};

function _templateObject3$3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n\n  svg {\n    display: block;\n    font-size: ", ";\n    ", ";\n  }\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n\n  svg {\n    display: block;\n    font-size: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  width: 100%;\n  appearance: none;\n\n  padding-left: ", ";\n\n  padding-right: ", "px;\n\n  border-color: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  &:focus {\n    ", "\n\n    border-color: ", ";\n\n    &::placeholder {\n      color: transparent;\n    }\n  }\n\n  &:disabled {\n    -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */\n    opacity: 1; /* correct opacity on iOS */\n    color: ", ";\n    background-color: ", ";\n    border-color: ", ";\n\n    &::placeholder {\n      color: ", ";\n      opacity: 1;\n    }\n  }\n\n  ", "\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var selectTokens = {
  iconSize: 4,
  y: 2,
  x: 2,
  iconRightOffset: 4
};
var ContentArea$2 = /*#__PURE__*/styled(Text)( /*#__PURE__*/_templateObject$d(), function (props) {
  return props.hasLeftIcon ? "calc(" + props.theme.fontSizes[selectTokens.iconSize] + " + " + 2 * props.theme.space[selectTokens.x] + "px)" : props.theme.space[selectTokens.x] + 'px';
}, function (props) {
  return props.hasRightIcon ? selectTokens.iconSize + 2 * props.theme.space[selectTokens.x] : props.theme.space[selectTokens.x];
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.colors.text.secondary;
}, function (props) {
  return props.error ? props.theme.colors.ui.error : props.theme.colors.ui.primary;
}, focusRing, function (props) {
  return props.theme.colors.ui.primary;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, /*#__PURE__*/compose(space$1, layout, flexbox, border, position, color));
ContentArea$2.defaultProps = {
  pt: selectTokens.y,
  pb: selectTokens.y,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 0,
  color: 'text.primary',
  bg: 'bg.primary',
  mb: 0
};
var LeftIcon$1 = /*#__PURE__*/styled(Box)( /*#__PURE__*/_templateObject2$8(), function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary;
});
var RightIcon$1 = /*#__PURE__*/styled(Box)( /*#__PURE__*/_templateObject3$3(), function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.disabled && {
    color: props.theme.colors.text.disabled
  };
});
var Select = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["leftIcon", "rightIcon", "mb", "mt", "mx", "my", "ml", "mr", "disabled"]);

  return React.createElement(Flex, {
    alignItems: "center",
    position: "relative",
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, leftIcon && React.createElement(LeftIcon$1, {
    left: selectTokens.x,
    disabled: disabled
  }, leftIcon), React.createElement(ContentArea$2, Object.assign({
    as: "select",
    variant: "body",
    ref: ref,
    py: 2,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: !!rightIcon,
    disabled: disabled,
    "aria-invalid": props.error ? 'true' : 'false'
  }, props)), rightIcon && React.createElement(RightIcon$1, {
    right: selectTokens.iconRightOffset,
    disabled: disabled
  }, rightIcon), React.createElement(RightIcon$1, {
    right: selectTokens.x,
    disabled: disabled,
    style: {
      pointerEvents: 'none'
    }
  }, React.createElement(Icons.ExpandMore, {
    color: "text.primary",
    "aria-hidden": true
  })));
});
Select.defaultProps = {
  error: false
};

function _templateObject$e() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n\n  > * {\n    ", "\n  }\n\n  > *:last-child {\n    ", "\n  }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}

var getAlignment = function getAlignment(value) {
  return value === 'start' || value === 'end' ? 'flex-' + value : value;
};

var stack = /*#__PURE__*/system({
  axis: {
    property: 'flexDirection',
    transform: function transform(value) {
      return value === 'horizontal' ? 'row' : 'column';
    }
  },
  alignment: {
    property: 'justifyContent',
    transform: getAlignment
  },
  distribution: {
    property: 'alignItems',
    transform: getAlignment
  }
});
var Stack = /*#__PURE__*/styled(Flex)( /*#__PURE__*/_templateObject$e(), stack, function (props) {
  var _css;

  return css$1((_css = {}, _css[props.axis === 'horizontal' ? 'marginRight' : 'marginBottom'] = props.space, _css))(props);
}, function (props) {
  var _css2;

  return css$1((_css2 = {}, _css2[props.axis === 'horizontal' ? 'marginRight' : 'marginBottom'] = 0, _css2))(props);
});
Stack.defaultProps = {
  axis: 'horizontal',
  space: 3
};

var fonts = {
  body: '"Helvetica Neue", Roboto, sans-serif',
  heading: '"Roboto", sans-serif',
  monospace: 'Menlo, monospace'
};
var fontSizes = ['0.625rem', '0.75rem', '1rem', '1.125rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.5rem', '3rem'];
var fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
};
var lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5
};
var letterSpacings = {
  "default": 'normal',
  tracked: '0.04em'
};
var space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
var sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];
var breakpoints = ['40em', '56em', '64em'];
var theme = {
  light: {
    space: space,
    sizes: sizes,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    breakpoints: breakpoints,
    colors: {
      brand: {
        primary: '#012E86',
        secondary: '#0064D9',
        accent: '#DB7C00',
        muted: '#C6DAF7'
      },
      ui: {
        primary: '#262626',
        secondary: '#757575',
        tertiary: '#F1F1F1',
        quaternary: '#FFFFFF',
        disabled: '#DEDEDE',
        error: '#D0421B',
        success: '#138000'
      },
      bg: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1'
      },
      text: {
        primary: '#262626',
        secondary: '#757575',
        disabled: '#9C9C9C',
        inverse: '#FFFFFF',
        error: '#D0421B',
        success: '#138000'
      },
      highlights: {
        primaryHighlight: /*#__PURE__*/darken(0.1, '#012E86'),
        primaryExtraHighlight: /*#__PURE__*/darken(0.2, '#012E86'),
        bgHighlight: /*#__PURE__*/darken(0.1, '#FFFFFF')
      }
    }
  },
  dark: {
    space: space,
    sizes: sizes,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    breakpoints: breakpoints,
    colors: {
      brand: {
        primary: '#298DFF',
        secondary: '#7CAEE8',
        accent: '#FDB447',
        muted: '#B7CBEA'
      },
      ui: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        tertiary: '#3C3C3C',
        quaternary: '#262626',
        disabled: '#242424',
        error: '#FF4D4D',
        success: '#1CBD00'
      },
      bg: {
        primary: '#111111',
        secondary: '#262626'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        disabled: '#525252',
        inverse: '#262626',
        error: '#FF4D4D',
        success: '#1CBD00'
      },
      highlights: {
        primaryHighlight: /*#__PURE__*/lighten(0.1, '#298DFF'),
        primaryExtraHighlight: /*#__PURE__*/lighten(0.2, '#298DFF'),
        bgHighlight: /*#__PURE__*/lighten(0.1, '#111111')
      }
    }
  }
};

export { AspectImage, AspectRatio, Box, Button, Checkbox, Flex, FormControl, Grid, Heading, Icons, Image, Input, Label, Link, Radio, Select, Spinner, Stack, StyledText, Text, TextArea, theme };
//# sourceMappingURL=ds.esm.js.map
