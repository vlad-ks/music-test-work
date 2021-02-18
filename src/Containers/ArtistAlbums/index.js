import {uid} from "react-uid";
import {observer} from "mobx-react-lite";
import useRootStore from "store/useRootStore";
import ListThumbsItem from "Components/ListThumbsItem";
import ListThumbs from "Components/ListThumbs";


const ArtistAlbums = () => {
	const { Artist } = useRootStore();


	return (
		<ListThumbs
			title="Albums"
		>
			{Artist.albums.map((e) => (
				<ListThumbsItem
					img={e.cover_small}
					title={e.title}
					desc={Artist.details.name}
					key={uid(e)}
				/>
			))}
		</ListThumbs>
	)
}

export default observer(ArtistAlbums);