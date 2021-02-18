import cn from "classnames";
import useWindowScrollPosition from "@rooks/use-window-scroll-position";
import SearchForm from "Containers/SearchForm";
import Icon from "Components/Icon";
import logo from "misc/logo.svg";
import s from "./index.module.scss";


const Header = () => {
	const {scrollX, scrollY} = useWindowScrollPosition();


	return (
		<div className={cn(s.wrap,
			{[s.wrapCollapse]: scrollY > 10}
		)}>
			<div className={s.wrapInner}>
				<div className={s.menuBtnWrap}>
					<button
						type="button"
						className={s.menuBtn}
					>
						<Icon name="menu"/>
					</button>
				</div>

				<div className={s.logoWrap}>
					<img src={logo} alt=""/>
				</div>

				<div className={s.searchWrap}>
					<SearchForm/>
				</div>

				<ul className={s.controls}>
					<li className={s.controlsItem}>
						<button
							type="button"
							className={s.controlsBtn}
						>
							<Icon name="settings" stroke/>
						</button>
					</li>
					<li className={s.controlsItem}>
						<button
							type="button"
							className={s.controlsBtn}
						>
							<Icon name="bell" stroke/>
							<span/>
						</button>
					</li>
					<li className={s.controlsItem}>
						<a
							href="/"
							className={cn(s.controlsBtn, s.controlsBtnThumb)}
						>
							<img src="https://picsum.photos/id/1024/100/100" alt=""/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;