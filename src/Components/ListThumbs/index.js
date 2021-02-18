import s from "./index.module.scss";


const ListThumbs = ({
						title,
						desc,
						children
					}) => {
	return (
		<div className={s.wrap}>
			<div className={s.header}>
				<h4 className={s.title}>{title}</h4>
				<p className={s.desc}>{desc}</p>
			</div>

			<div className={s.items}>
				<div className={s.itemsInner}>
					{children}
				</div>
			</div>
		</div>
	)
}

export default ListThumbs;