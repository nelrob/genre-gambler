import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';

import { styles } from '../styles/styles'

export function ShuffleScreen() {
    // Modal
    const [modalOpen, setModalOpen] = useState(false)
    // Randomizer
    const [genre, setGenre] = useState({ icon: require("../assets/default.png"), name: 'Genre' })
    const [artist, setArtist] = useState({ name: 'Artist', albums: 'Albums' })


    const randomizer = () => {
        // Genre randomizer - generates random number from 1-10 
        const randomGenre = Math.floor(Math.random() * 10) + 1
        // Artist randomizer - generates random number from 1-3 
        const randomArtist = Math.floor(Math.random() * 3) + 1

        // --- BASE GENRES ---
        // Pop Recommendation
        if (randomGenre == 1) {
            setGenre({ icon: require("../assets/pop.png"), name: 'Pop' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Ariana Grande', albums: 'Positions, thank u, next, Sweetener' })
                    break;
                case 2: setArtist({ name: 'Beyoncé', albums: 'Lemonade, BEYONCÉ [Platinum Edition], Dangerously in Love' })
                    break;
                case 3: setArtist({ name: 'Ed Sheeran', albums: '=, ÷ (Deluxe), x (Deluxe Edition)' })
                    break;
            }
        }
        // International Recommendation
        else if (randomGenre == 2) {
            setGenre({ icon: require("../assets/intl.png"), name: 'International' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Elissa', albums: 'Aayshalak, W Akherta Maak, Ayami Beek' })
                    break;
                case 2: setArtist({ name: 'Wanessa', albums: 'DNA, W, Wanessa Camargo' })
                    break;
                case 3: setArtist({ name: 'Folkearth', albums: 'By the Sword of My Father, Drakkars In The Mist, Songs of Yore (Acoustic)' })
                    break;
            }
        }
        // Electro Recommendation
        else if (randomGenre == 3) {
            setGenre({ icon: require("../assets/electro.png"), name: 'Electronic' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Daft Punk', albums: 'Discovery, Random Access Memories, Homework' })
                    break;
                case 2: setArtist({ name: 'Björk', albums: 'Debut, PostPlay, Vespertine' })
                    break;
                case 3: setArtist({ name: 'Gorillaz', albums: 'Demon Days, Plastic Beach, Humanz (Deluxe)' })
                    break;
            }
        }
        // Indie Recommendation
        else if (randomGenre == 4) {
            setGenre({ icon: require("../assets/indie.png"), name: 'Indie' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Radiohead', albums: 'OK Computer, In Rainbows, The Bends' })
                    break;
                case 2: setArtist({ name: 'The Killers', albums: 'Hot Fuss, Sams Town, Day and Age (Bonus Tracks)' })
                    break;
                case 3: setArtist({ name: 'Tegan and Sara', albums: 'Heartthrob, So Jealous, The Con' })
                    break;
            }
        }

        // --- HYBRID GENRES ---
        // Electro Pop Recommendation
        else if (randomGenre == 5) {
            setGenre({ icon: require("../assets/hybrids/electro_pop.png"), name: 'Electro Pop' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'The Naked and Famous', albums: 'Passive Me, Aggressive YouIn Rolling Waves, Simple Forms' })
                    break;
                case 2: setArtist({ name: 'The Synthetic Dream Foundation', albums: 'Mechanical Serpent, Behind the Gates of Horn and Ivory, Where Drowned Suns Still Glimmer' })
                    break;
                case 3: setArtist({ name: 'Ladytron', albums: 'Light & Magic, Witching Hour, 604' })
                    break;
            }
        }
        // Electro House Recommendation
        else if (randomGenre == 6) {
            setGenre({ icon: require("../assets/hybrids/electro_house.png"), name: 'Electro House' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Swedish House Mafia', albums: 'Moth to a FlameBuy, Dont You Worry Child, Lifetime' })
                    break;
                case 2: setArtist({ name: 'Afrojack', albums: 'Anywhere With You, Forget the World (Deluxe), Hero' })
                    break;
                case 3: setArtist({ name: 'The Bloody Beetroots', albums: 'The Great Electronic Swindle, Romborama, HIDE' })
                    break;
            }
        }
        // Inditronica Recommendation
        else if (randomGenre == 7) {
            setGenre({ icon: require("../assets/hybrids/indietronica.png"), name: 'Indietronica' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'La Roux', albums: 'La Roux, Bulletproof, Trouble in Paradise' })
                    break;
                case 2: setArtist({ name: 'The Postal Service', albums: 'Give Up (Deluxe 10th Anniversary Edition), Everything Will Change, Such Great Heights' })
                    break;
                case 3: setArtist({ name: 'The Teenagers', albums: 'Reality Check (North American Edition), The Teenagers, The Tricolore 7" Collection' })
                    break;
            }
        }
        // Brazilian Indie Recommendation
        else if (randomGenre == 8) {
            setGenre({ icon: require("../assets/hybrids/brazil_indie.png"), name: 'Brazilian Indie' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Los Hermanos', albums: 'Ventura, Bloco do Eu Sozinho, Los Hermanos' })
                    break;
                case 2: setArtist({ name: 'Ludov', albums: 'O Exercício das Pequenas Coisas, Dois a Rodar, Caligrafia' })
                    break;
                case 3: setArtist({ name: 'Bárbara Eugênia', albums: 'É o que temos, Journal de BAD, Tuda' })
                    break;
            }
        }
        // Indie Pop Recommendation
        else if (randomGenre == 9) {
            setGenre({ icon: require("../assets/hybrids/indie_pop.png"), name: 'Indie Pop' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Florence + the Machine', albums: 'Lungs, Ceremonials, Between Two Lungs' })
                    break;
                case 2: setArtist({ name: 'Lana Del Rey', albums: 'Norman Fucking Rockwell!, Born to Die - The Paradise Edition, Ultraviolence (Deuxe)' })
                    break;
                case 3: setArtist({ name: 'Foster the People', albums: 'Torches, Sacred Hearts Club, Imagination' })
                    break;
            }
        }
        // K-Pop Recommendation
        else if (randomGenre == 10) {
            setGenre({ icon: require("../assets/hybrids/kpop.png"), name: 'K-Pop' })

            switch (randomArtist) {
                case 1: setArtist({ name: 'Red Velvet', albums: '`The ReVe Festival` Finale, Queendom - The 6th Mini Album, Russian Roulette - The 3rd Mini Album' })
                    break;
                case 2: setArtist({ name: 'LOONA', albums: '[&], [12:00], [X X]' })
                    break;
                case 3: setArtist({ name: 'STAY-C', albums: 'Star To A Young Culture, STAYDOM, STEREOTYPE' })
                    break;
            }
        }
    }

    // --- APP OUTPUT ---
    return (
        <View style={styles.container}>
            {/* App Header */}
            <View style={styles.topContainer} >
                {/* Title and Description */}
                <Text style={{ fontSize: 35, marginTop: 15, marginLeft: 15, fontWeight: 'bold' }}>Genre Shuffler</Text>
                <Text style={{ fontSize: 13, marginTop: 10 }}>Press the shuffle button to get a random genre recommendation!</Text>
            </View>

            {/* Shuffle Button */}
            <TouchableOpacity onPress={randomizer} style={{ marginTop: 30, alignSelf: 'center', width: 300, flex: 0.18, borderRadius: 10, backgroundColor: '#0377BC', }}>
                <Text style={{ fontSize: 50, alignSelf: 'center', }}> Shuffle! </Text>
            </TouchableOpacity>

            {/* Output Box */}
            <View>
                <Image source={genre.icon} style={{ alignSelf: 'center', width: 100, height: 100, marginTop: 20 }} />
                <Text style={{ alignSelf: 'center', fontSize: 30 }}>{genre.name}</Text>
            </View>

            {/* Button that opens Modal */}
            <View style={{ flex: 0.3, marginVertical: 5 }}>
                <TouchableOpacity onPress={() => setModalOpen(true)} style={{ alignSelf: 'center', backgroundColor: 'white', borderRadius: 5, padding: 5 }}>
                    <Text style={{ fontSize: 20 }}>
                        Click for recommendations!
                    </Text>
                </TouchableOpacity>
            </View>

            {/* POPUP MODAL - Shows Genre Recommendations*/}
            <Modal
                animationType="slide"
                visible={modalOpen} r={false}
                style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}
                transparent>

                <View style={styles.modalContainer}>

                    {/* Close button */}
                    <TouchableOpacity onPress={() => setModalOpen(false)}>
                        <Image source={require("../assets/close.png")} style={{ width: 15, height: 15, marginLeft: 10, }} />
                    </TouchableOpacity>

                    {/* Genre Icon and Background */}
                    <View style={{ flex: 0.6, backgroundColor: '#0377BC', marginVertical: 10, paddingVertical: 30, borderRadius: 10 }}>
                        <Image source={genre.icon} style={{ alignSelf: 'center', width: 120, height: 120 }} />
                        <Text style={{ alignSelf: 'center', fontSize: 17, margin: 10, color: 'white' }}>{genre.name} Recommendation</Text>
                    </View>

                    {/* Genre Reccomendation - Generated artist and album */}
                    <View>
                        <Text style={styles.artistTitle}>{artist.name}</Text>
                        <Text style={styles.shuffle_modalText}>Popular Albums:</Text>
                        <Text style={styles.albumTitle}>{artist.albums}</Text>
                    </View>

                </View>
            </Modal>
        </View>
    )
};