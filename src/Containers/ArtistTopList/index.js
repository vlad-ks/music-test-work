import {uid} from "react-uid";
import {observer} from "mobx-react-lite";
import useRootStore from "store/useRootStore";
import {secToTime} from "utils/convertTime";
import PlayListItem from "Components/PlayListItem";
import PlayList from "Components/PlayList";


const ArtistTopList = () => {
	const { Artist } = useRootStore();


	return (
		<PlayList
			title="Most Loved Tracks"
		>
			{Artist.top.map((e) => (
				<PlayListItem
					img={e.album.cover_medium}
					alt={e.album.title}
					title={e.title}
					desc={e.artist.name}
					time={secToTime(e.duration)}
					key={uid(e)}
				/>
			))}
		</PlayList>
	)
}

export default observer(ArtistTopList);