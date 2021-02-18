import cn from "classnames";

import s from "./index.module.scss";


const Icon = ({ name, stroke = false }) => {
	return (
		<svg className={cn('icon', s.icon, `icon-${name}`,
			{[s.iconStroke]: stroke}
		)}>
			<use xlinkHref={`#icon-${name}`} />
		</svg>
	)
}

export default Icon;