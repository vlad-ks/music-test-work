import Icon from "Components/Icon";
import s from "./index.module.scss";


const PlayList = ({
					  title,
					  children
				  }) => {
	return (
		<div className={s.wrap}>
			<div className={s.header}>
				<h4 className={s.title}>{title}</h4>
				<button className={s.btn}>
					<Icon name="more-horizontal"/>
				</button>
			</div>

			<div className={s.list}>
				{children}
			</div>
		</div>
	)
}

export default PlayList;