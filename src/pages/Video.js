
import React, {useRef, useState} from 'react';
import {View, StyleSheet,Text, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
 

export default function Video() {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    
    return (
        <View style={styles.container}>
            <View style={styles.video1}>
                <YoutubePlayer
                ref={playerRef}
                height={300}
                width={400}
                videoId={"UOq-tD9k434"}
                play={playing}
                onChangeState={event => console.log(event)}
                onReady={() => console.log("ready")}
                onError={e => console.log(e)}
                onPlaybackQualityChange={q => console.log(q)}
                volume={50}
                playbackRate={1}
                playerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true
                }}
                />
            </View>
            <View style={styles.tituloContainer}>
                <Text style={styles.titulo}>Voo de Monitoramento de Temperatura</Text>
                <Text style={styles.descricao}>Piloto: PcMarques</Text>
                <Text style={styles.descricao2}>Local: Jaboatão dos Guararapes</Text>
            </View>
            <View style={styles.video2}>
                <YoutubePlayer
                ref={playerRef}
                height={300}
                width={400}
                videoId={"stRSZI1yX34"}
                play={playing}
                onChangeState={event => console.log(event)}
                onReady={() => console.log("ready")}
                onError={e => console.log(e)}
                onPlaybackQualityChange={q => console.log(q)}
                volume={50}
                playbackRate={1}
                playerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true
                }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    video1: {
        width: '100%'
    },

    video2: {
        width: '100%'
    },
    tituloContainer: {
        marginTop: -80,
        marginLeft: -20,
        marginBottom: 30
    },
    titulo: {
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 20
    },
    descricao: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10
    },
    descricao2: {
        color: '#fff',
        fontSize: 16,
        marginTop: 10
    }
    
    
})
