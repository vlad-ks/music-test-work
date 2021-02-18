import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {uid} from "react-uid";
import {secToTime} from "utils/convertTime";
import useRootStore from "store/useRootStore";


const Content = () => {
	const { Artist } = useRootStore();
	const { id } = useParams();

	useEffect(() => {
		Artist.getDetails(id);

		return () => Artist.preventLoading();
	}, [id]);

	if (Artist.loading) return <p>Loading</p>;

	return (
		<div>
			Test {id}

			<h1>{Artist.details.name}</h1>

			<img src={Artist.details.picture_big} alt={Artist.details.name}/>

			<div className="columns">
				<div className="column">
					{Artist.top.map((e) => (
						<div key={uid(e)}>
							<p>Title: {e.title}</p>
							<p>Name: {e.artist.name}</p>
							<p>Time: {secToTime(e.duration)}</p>
							<img src={e.album.cover_medium} alt={e.album.title}/>
							<hr/>
						</div>
					))}
				</div>

				<div className="column">
					{Artist.albums.map((e) => (
						<div key={uid(e)}>
							<p>Title: {e.title}</p>
							<p>Name: {Artist.details.name}</p>
							<img src={e.cover_small} alt={e.title}/>
							<hr/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default observer(Content);