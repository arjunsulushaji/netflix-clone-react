import React, { useState, useEffect } from 'react'
import './Posts.css'
import axios from '../../Axios/axios'
import { ImageUrl, API_KEY } from '../../Constants/Constants'
import Youtube from 'react-youtube'

function Posts(props) {

    const [post, SetPost] = useState([])
    const [video, setVideo] = useState('')

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const playVideo = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setVideo(response.data.results[0])
            } else {
                alert("Video not avaliable !")
            }
        })
    }

    useEffect(() => {
        axios.get(props.url).then((response) => {
            SetPost(response.data.results)
        })
    }, [])

    return (
        <React.Fragment>
            <div className='posts'>
                <h1 className='post-title'>{props.title}</h1>
                <div className='post'>
                    {
                        post.map((obj) => {
                            return (
                                <div className='poster'>
                                    <img className='netflix-post' onClick={() => playVideo(obj.id)} src={`${ImageUrl + obj.poster_path}`} alt="netflix-posts" />
                                    <div className="poster1">
                                        <div className='overlay'>{obj.title}
                                        <p className='overview'>{obj.overview.substring(0, 90) + "..."}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {video && <Youtube opts={opts} videoId={video.key} />}
        </React.Fragment>
    )
}

export default Posts
