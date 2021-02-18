import s from "./index.module.scss";


const ListThumbsItem = ({
							img,
							title,
							desc
						}) => {
	return (
		<div className={s.wrap}>
			<div className={s.img}>
				<img src={img} alt={title}/>
			</div>
			<h5 className={s.title}>{title}</h5>
			<p className={s.desc}>{desc}</p>
		</div>
	)
}

export default ListThumbsItem;