import React, {useRef, useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
 
const playerRef = useRef(null);
const [playing, setPlaying] = useState(true);

