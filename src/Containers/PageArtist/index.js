import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import useRootStore from "store/useRootStore";
import PageLoading from "Components/PageLoading";
import ArtistLayout from "Components/ArtistLayout";
import ArtistTopList from "../ArtistTopList";
import ArtistDetails from "../ArtistDetails";
import ArtistAlbums from "../ArtistAlbums";


const PageArtist = () => {
	const { Artist } = useRootStore();
	const { id } = useParams();

	useEffect(() => {
		Artist.getDetails(id);

		return () => Artist.preventLoading();
	}, [id]);

	if (Artist.loading) return <PageLoading/>;

	return (
		<ArtistLayout
			listCh={<ArtistTopList/>}
			imgCh={<ArtistDetails/>}
			asideCh={<ArtistAlbums/>}
		/>
	)
}

export default observer(PageArtist);