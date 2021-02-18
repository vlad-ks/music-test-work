import s from "./index.module.scss";


const Layout = ({
					aside,
					header,
					footer,
					children
				}) => {
	return (
		<div className={s.page}>
			<div className={s.header}>{header}</div>

			<div className={s.mainWrap}>
				<div className={s.sideBar}>{aside}</div>
				<div className={s.main}>{children}</div>
			</div>

			<div className={s.footer}>{footer}</div>
		</div>
	)
}

export default Layout;