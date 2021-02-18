import s from "./index.module.scss";


const ArtistLayout = ({
						  imgCh,
						  listCh,
						  asideCh
					  }) => {
	return (
		<div className={s.wrap}>
			<div className={s.img}>{imgCh}</div>
			<div className={s.list}>{listCh}</div>
			<div className={s.aside}>{asideCh}</div>
		</div>
	)
}

export default ArtistLayout;