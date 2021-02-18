import Icon from "Components/Icon";
import s from "./index.module.scss";


const Player = () => {
	return (
		<div className={s.wrap}>
			<button className={s.btn}>
				<Icon name="pause"/>
			</button>
		</div>
	)
}

export default Player;