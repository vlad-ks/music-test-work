import {observer} from "mobx-react-lite";
import useRootStore from "store/useRootStore";
import TitleImg from "../../Components/TitleImg";


const ArtistDetails = () => {
	const { Artist } = useRootStore();


	return (
		<TitleImg
			title={Artist.details.name}
			img={Artist.details.picture_big}
		/>
	)
}

export default observer(ArtistDetails);