import Icon from "Components/Icon";
import s from "./index.module.scss";


const PlayListItem = ({
						  img,
						  alt,
						  title,
						  desc,
						  time
					  }) => {
	return (
		<div className={s.wrap}>
			<div className={s.logo}>
				<img src={img} alt={alt}/>
			</div>

			<div className={s.text}>
				<h4 className={s.textTitle}>{title}</h4>
				<p className={s.textDesc}>{desc}</p>
			</div>

			<div className={s.time}>{time}</div>

			<button type="button" className={s.btn}>
				<Icon name="plus-circle" stroke/>
			</button>
		</div>
	)
}

export default PlayListItem;