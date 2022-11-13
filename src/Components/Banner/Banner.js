import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Axios/axios'
import { ImageUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function Banner(props) {

    const [movie, setMovie] = useState([0])
    const [play, setPlay] = useState('')
    const [num, setNum] = useState(0);

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        setNum(randomNumberInRange(0, 20))
    })

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovie(response.data.results[`${num}`])
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const playYoutube = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setPlay(response.data.results[0])
            } else {
                alert("Video not avaliable !")
            }
        })
    }

    return (
        <React.Fragment>
            <div
                style={{ backgroundImage: `url(${movie ? ImageUrl + movie.backdrop_path : ""})` }}
                className='banner'>                
                <div className="content">
                    <h1 className='banner-title'>{movie.title}</h1>
                    <div className="banner-buttons">
                        <button className="button" onClick={() => playYoutube(movie.id)}>Play</button>
                        <button className="button">My list</button>
                    </div>
                    <h4 className="banner-description">{movie.overview}</h4>
                </div>
                <div className="fade"></div>
            </div>
            {play && <Youtube opts={opts} videoId={play.key} />}
        </React.Fragment>
    )
}

export default Banner
