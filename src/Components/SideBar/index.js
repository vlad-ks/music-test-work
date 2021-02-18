import cn from "classnames";
import Icon from "../Icon";
import s from "./index.module.scss";



const SideBar = () => {
	return (
		<nav className={s.wrap}>
			{/* Main menu */}
			<ul className={s.list}>
				<li className={cn(s.listItem, s.listItemActive)}>
					<a className={s.listLink} href="/">
						<Icon name="home"/>
						<span>home</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<Icon name="search"/>
						<span>browse</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<Icon name="radio"/>
						<span>radio</span>
					</a>
				</li>
			</ul>

			{/* Your library */}
			<h4 className={s.title}>Your library</h4>
			<ul className={s.list}>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<Icon name="clock"/>
						<span>Recently played</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<Icon name="heart"/>
						<span>Favorite songs</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<Icon name="user"/>
						<span>Artists</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<Icon name="layers"/>
						<span>Albums</span>
					</a>
				</li>
			</ul>

			{/* Playlist */}
			<h4 className={s.title}>Playlist</h4>
			<ul className={s.list}>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<span>Top pop</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<span>Charting now</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a className={s.listLink} href="/">
						<span>Romance season</span>
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default SideBar;