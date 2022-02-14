import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { styles } from '../styles/styles'

export function ListScreen() {
    // Modal
    const [modalOpen, setModalOpen] = useState(false)
    // Randomizer
    const [genre, setGenre] = useState({ icon: require("../assets/default.png"), name: 'Genre' })

    var genrePick = ''
    const [artist1, setArtist1] = useState({ name: 'Artist1', albums: 'Albums1' })
    const [artist2, setArtist2] = useState({ name: 'Artist2', albums: 'Albums2' })
    const [artist3, setArtist3] = useState({ name: 'Artist3', albums: 'Albums3' })

    const ShowGenreInfo = (genrePick) => {

        // --- BASE GENRES ---
        // Pop Info
        if (genrePick == 'pop') {
            setGenre({ icon: require("../assets/pop.png"), name: 'Pop' })

            setArtist1({ name: 'Ariana Grande', albums: 'Positions, thank u, next, Sweetener' })
            setArtist2({ name: 'Beyoncé', albums: 'Lemonade, BEYONCÉ [Platinum Edition], Dangerously in Love' })
            setArtist3({ name: 'Ed Sheeran', albums: '=, ÷ (Deluxe), x (Deluxe Edition)' })
        }
        // International Info
        else if (genrePick == 'intl') {
            setGenre({ icon: require("../assets/intl.png"), name: 'International' })

            setArtist1({ name: 'Elissa', albums: 'Aayshalak, W Akherta Maak, Ayami Beek' })
            setArtist2({ name: 'Wanessa', albums: 'DNA, W, Wanessa Camargo' })
            setArtist3({ name: 'Folkearth', albums: 'By the Sword of My Father, Drakkars In The Mist, Songs of Yore (Acoustic)' })
        }
        // Electro Info
        else if (genrePick == 'electro') {
            setGenre({ icon: require("../assets/electro.png"), name: 'Electronic' })

            setArtist1({ name: 'Daft Punk', albums: 'Discovery, Random Access Memories, Homework' })
            setArtist2({ name: 'Björk', albums: 'Debut, PostPlay, Vespertine' })
            setArtist3({ name: 'Gorillaz', albums: 'Demon Days, Plastic Beach, Humanz (Deluxe)' })
        }
        // Indie Info
        else if (genrePick == 'indie') {
            setGenre({ icon: require("../assets/indie.png"), name: 'Indie' })

            setArtist1({ name: 'Radiohead', albums: 'OK Computer, In Rainbows, The Bends' })
            setArtist2({ name: 'The Killers', albums: 'Hot Fuss, Sams Town, Day and Age (Bonus Tracks)' })
            setArtist3({ name: 'Tegan and Sara', albums: 'Heartthrob, So Jealous, The Con' })
        }

        // --- HYBRID GENRES ---
        // Electro Pop Info
        else if (genrePick == 'electro-pop') {
            setGenre({ icon: require("../assets/hybrids/electro_pop.png"), name: 'Electro Pop', parents: 'Electro and Pop' })

            setArtist1({ name: 'The Naked and Famous', albums: 'Passive Me, Aggressive YouIn Rolling Waves, Simple Forms' })
            setArtist2({ name: 'The Synthetic Dream Foundation', albums: 'Mechanical Serpent, Behind the Gates of Horn and Ivory, Where Drowned Suns Still Glimmer' })
            setArtist3({ name: 'Ladytron', albums: 'Light & Magic, Witching Hour, 604' })
        }
        // Electro House Info
        else if (genrePick == 'electro-house') {
            setGenre({ icon: require("../assets/hybrids/electro_house.png"), name: 'Electro House' })

            setArtist1({ name: 'Swedish House Mafia', albums: 'Moth to a FlameBuy, Dont You Worry Child, Lifetime' })
            setArtist2({ name: 'Afrojack', albums: 'Anywhere With You, Forget the World (Deluxe), Hero' })
            setArtist3({ name: 'The Bloody Beetroots', albums: 'The Great Electronic Swindle, Romborama, HIDE' })
        }
        // Inditronica Info
        else if (genrePick == 'indie-tronica') {
            setGenre({ icon: require("../assets/hybrids/indietronica.png"), name: 'Indietronica' })

            setArtist1({ name: 'La Roux', albums: 'La Roux, Bulletproof, Trouble in Paradise' })
            setArtist2({ name: 'The Postal Service', albums: 'Give Up (Deluxe 10th Anniversary Edition), Everything Will Change, Such Great Heights' })
            setArtist3({ name: 'The Teenagers', albums: 'Reality Check (North American Edition), The Teenagers, The Tricolore 7" Collection' })
        }
        // Brazilian Indie Info
        else if (genrePick == 'brazil-indie') {
            setGenre({ icon: require("../assets/hybrids/brazil_indie.png"), name: 'Brazilian Indie' })

            setArtist1({ name: 'Los Hermanos', albums: 'Ventura, Bloco do Eu Sozinho, Los Hermanos' })
            setArtist2({ name: 'Ludov', albums: 'O Exercício das Pequenas Coisas, Dois a Rodar, Caligrafia' })
            setArtist3({ name: 'Bárbara Eugênia', albums: 'É o que temos, Journal de BAD, Tuda' })
        }
        // Indie Pop Info
        else if (genrePick == 'indie-pop') {
            setGenre({ icon: require("../assets/hybrids/indie_pop.png"), name: 'Indie Pop' })

            setArtist1({ name: 'Florence + the Machine', albums: 'Lungs, Ceremonials, Between Two Lungs' })
            setArtist2({ name: 'Lana Del Rey', albums: 'Norman Fucking Rockwell!, Born to Die - The Paradise Edition, Ultraviolence (Deuxe)' })
            setArtist3({ name: 'Foster the People', albums: 'Torches, Sacred Hearts Club, Imagination' })
        }
        // K-Pop Info
        else if (genrePick == 'k-pop') {
            setGenre({ icon: require("../assets/hybrids/kpop.png"), name: 'K-Pop' })

            setArtist1({ name: 'Red Velvet', albums: '`The ReVe Festival` Finale, Queendom - The 6th Mini Album, Russian Roulette - The 3rd Mini Album' })
            setArtist2({ name: 'LOONA', albums: '[&], [12:00], [X X]' })
            setArtist3({ name: 'STAY-C', albums: 'Star To A Young Culture, STAYDOM, STEREOTYPE' })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Base Genres</Text>

            <View style={styles.buttonGroup}>
                {/* POP */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('pop')}>
                        <Image source={require("../assets/pop.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Pop</Text>
                </View>

                {/* INTERNATIONAL */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('intl')}>
                        <Image source={require("../assets/intl.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>International</Text>
                </View>

                {/* INDIE */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('indie')}>
                        <Image source={require("../assets/indie.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Indie</Text>
                </View>

                {/* ELECTRO */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('electro')}>
                        <Image source={require("../assets/electro.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Electro</Text>
                </View>
            </View>

            <Text style={styles.headingText}>Hybrid Genres</Text>
            <View style={styles.buttonGroup}>
                {/* ELECTRO POP */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('electro-pop')}>
                        <Image source={require("../assets/hybrids/electro_pop.png")} style={styles.listButtonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Electro Pop</Text>
                </View>

                {/* BRAZIL INDIE */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('brazil-indie')}>
                        <Image source={require("../assets/hybrids/brazil_indie.png")} style={styles.listButtonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Brazil Indie</Text>
                </View>

                {/* ELECTRO HOUSE */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('electro-house')}>
                        <Image source={require("../assets/hybrids/electro_house.png")} style={styles.listButtonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Electro House</Text>
                </View>

                {/* INDIE POP */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('indie-pop')}>
                        <Image source={require("../assets/hybrids/indie_pop.png")} style={styles.listButtonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Indie Pop</Text>
                </View>

                {/* INDIETRONICA */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('indie-tronica')}>
                        <Image source={require("../assets/hybrids/indietronica.png")} style={styles.listButtonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Indietronica</Text>
                </View>

                {/* K-POP */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => ShowGenreInfo('k-pop')}>
                        <Image source={require("../assets/hybrids/kpop.png")} style={styles.listButtonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>K-Pop</Text>
                </View>
            </View>

            {/* Button that opens Modal */}
            <View style={{ marginTop: 'auto' }}>
                <TouchableOpacity onPress={() => setModalOpen(true)} style={{ alignSelf: 'center', backgroundColor: '#0377BC', borderRadius: 5, padding: 5, margin: 10 }}>
                    <Text style={{ fontSize: 30 }}>
                        Open info page
                    </Text>
                </TouchableOpacity>
            </View>

            {/* POPUP MODAL - Shows Genre Info*/}
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

                    {/* Genre Icon and Title */}
                    <View style={{ flexDirection: 'row', marginVertical: 20, alignContent: 'space-around' }}>
                        <Image source={genre.icon} style={{ alignSelf: 'center', width: 80, height: 80 }} />
                        <Text style={{ fontSize: 45, margin: 10, fontStyle: 'italic' }}> {genre.name}</Text>
                    </View>

                    {/* Genre Reccomendation - Shows all recommendations */}
                    <View>
                        <Text style={styles.artistTitle}>{artist1.name}</Text>
                        <Text style={styles.albumTitle}>{artist1.albums}</Text>
                        <Text style={styles.artistTitle}>{artist2.name}</Text>
                        <Text style={styles.albumTitle}>{artist2.albums}</Text>
                        <Text style={styles.artistTitle}>{artist3.name}</Text>
                        <Text style={styles.albumTitle}>{artist3.albums}</Text>
                    </View>

                </View>
            </Modal>
        </View>
    )
};