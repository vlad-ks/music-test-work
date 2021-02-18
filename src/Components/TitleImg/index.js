import s from "./index.module.scss";


const TitleImg = ({
					 title,
					 img
				 }) => {
	return (
		<div className={s.wrap}>
			<h1 className={s.title}>{title}</h1>
			<div className={s.img}>
				<img src={img} alt={title}/>
			</div>
		</div>
	)
}

export default TitleImg;