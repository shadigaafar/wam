import { useLayoutEffect } from "react";
import { injectGlobal } from "@emotion/css";
import objectToCss from "../../utils/object-to-css";
import "normalize.css";

type Props = {
	styles?: object | string;
};

const CssGlobal = ({ styles = {} }: Props) => {
	useLayoutEffect(() => {
		injectGlobal`
        * {
          box-sizing: border-box;
        }
        ${objectToCss(styles)}
      `;
	}, []);
	return null;
};

export default CssGlobal;
