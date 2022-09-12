import hyphenateStyleName from "hyphenate-style-name";
import addPxToStyle from "add-px-to-style";

const objectToCss = (obj: any): string => {
	if (typeof obj === "string") return obj;
	var keys = Object.keys(obj);
	if (!keys.length) return "";
	var i,
		len = keys.length;
	var rules = "";

	for (i = 0; i < len; i++) {
		var selector = keys[i];
		var selectorValue = obj[selector];

		var properties = Object.keys(selectorValue);

		if (!properties.length) return "";
		var index,
			length = properties.length;
		var res = "";
		for (index = 0; index < length; index++) {
			var property = properties[index];
			var value = selectorValue[property];
			res +=
				hyphenateStyleName(property) +
				":" +
				addPxToStyle(property, value) +
				";";
		}
		rules += hyphenateStyleName(selector) + "{" + res + "}";
	}

	return rules;
};

export default objectToCss;
