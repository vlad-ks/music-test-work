import Slider from "Components/Slider";
import ListThumbs from "Components/ListThumbs";
import ListThumbsItem from "Components/ListThumbsItem";


const PageHome = () => {
	return (
		<>
			<Slider/>

			<ListThumbs
				title="Featured"
				desc="this week"
			>
				<ListThumbsItem
					img="//picsum.photos/id/142/100/100"
					title="Ignored"
					desc="Jazz B"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/58/100/100"
					title="NAO"
					desc="Selena"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/44/100/100"
					title="Orion"
					desc="Chuck"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/88/100/100"
					title="Hardwon"
					desc="John Cody"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/204/100/100"
					title="Skillet"
					desc="Coatoss"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/78/100/100"
					title="Jayball"
					desc="Therapy"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/60/100/100"
					title="Rapture"
					desc="Seguna"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/142/100/100"
					title="Ignored"
					desc="Jazz B"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/58/100/100"
					title="NAO"
					desc="Selena"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/44/100/100"
					title="Orion"
					desc="Chuck"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/88/100/100"
					title="Hardwon"
					desc="John Cody"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/204/100/100"
					title="Skillet"
					desc="Coatoss"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/78/100/100"
					title="Jayball"
					desc="Therapy"
				/>
				<ListThumbsItem
					img="//picsum.photos/id/60/100/100"
					title="Rapture"
					desc="Seguna"
				/>
			</ListThumbs>
		</>
	)
}

export default PageHome;