import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Modal } from 'react-native';
import { styles } from "../styles/styles";

export function CalcScreen() {
    // Modal
    const [modalOpen, setModalOpen] = useState(false)
    // Default icon and title for hybrid output
    const [genre, setGenre] = useState({ icon: require("../assets/default.png"), name: 'Hybrid Genre' })

    // variables for storing 1st and 2nd Genre inputs
    var firstGenre = ""
    var secondGenre = ""
    // Error alert message
    const errorMessage = "You can't calculate two of the same genres! Please try again."

    // Output for when Calculate button is pressed
    const onClickHandler = () => {
        // Pop permutations
        if (firstGenre == "pop") {
            if (secondGenre == "pop") {
                Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
            }
            else if (secondGenre == "intl") {
                setGenre({ icon: require("../assets/hybrids/kpop.png"), name: 'K-Pop' })
            }
            else if (secondGenre == "indie") {
                setGenre({ icon: require("../assets/hybrids/indie_pop.png"), name: 'Indie Pop' })
            }
            else if (secondGenre == "electro") {
                setGenre({ icon: require("../assets/hybrids/electro_pop.png"), name: 'Electro Pop' })
            }
        }

        // International permutations
        else if (firstGenre == "intl") {
            if (secondGenre == "intl") {
                Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
            }
            else if (secondGenre == "pop") {
                setGenre({ icon: require("../assets/hybrids/kpop.png"), name: 'K-Pop' })
            }
            else if (secondGenre == "indie") {
                setGenre({ icon: require("../assets/hybrids/brazil_indie.png"), name: 'Brazilian Indie' })
            }
            else if (secondGenre == "electro") {
                setGenre({ icon: require("../assets/hybrids/electro_house.png"), name: 'Electro House' })
            }
        }

        // Indie permutations
        else if (firstGenre == "indie") {
            if (secondGenre == "indie") {
                Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
            }
            else if (secondGenre == "pop") {
                setGenre({ icon: require("../assets/hybrids/indie_pop.png"), name: 'Indie Pop' })
            }
            else if (secondGenre == "intl") {
                setGenre({ icon: require("../assets/hybrids/brazil_indie.png"), name: 'Brazilian Indie' })
            }
            else if (secondGenre == "electro") {
                setGenre({ icon: require("../assets/hybrids/indietronica.png"), name: 'Indietronica' })
            }
        }

        // Electro permutations
        else if (firstGenre == "electro") {
            if (secondGenre == "electro") {
                Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
            }
            else if (secondGenre == "pop") {
                setGenre({ icon: require("../assets/hybrids/electro_pop.png"), name: 'Electro Pop' })
            }
            else if (secondGenre == "intl") {
                setGenre({ icon: require("../assets/hybrids/electro_house.png"), name: 'Electro House' })
            }
            else if (secondGenre == "indie") {
                setGenre({ icon: require("../assets/hybrids/indietronica.png"), name: 'Indietronica' })
            }
        }

    }

    // --- APP OUTPUT ---
    return (
        <View style={styles.container}>
            {/* App Header */}
            <View style={styles.topContainer} >
                {/* Title and Description */}
                <Text style={{ fontSize: 35, marginTop: 15, marginLeft: 15, fontWeight: 'bold' }}>Genre Calculator</Text>
                <Text style={{ fontSize: 13, marginTop: 10 }}>Calculate two genres and receive a hybrid recommendation!</Text>
            </View>

            {/* First Row - Image buttons*/}
            <Text style={styles.headingText}>First Genre</Text>

            <View style={styles.buttonGroup}>

                {/* POP */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => firstGenre = "pop"}>
                        <Image source={require("../assets/pop.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Pop</Text>
                </View>

                {/* INTERNATIONAL */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => firstGenre = "intl"}>
                        <Image source={require("../assets/intl.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>International</Text>
                </View>

                {/* INDIE */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => firstGenre = "indie"}>
                        <Image source={require("../assets/indie.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Indie</Text>
                </View>

                {/* ELECTRO */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => firstGenre = "electro"}>
                        <Image source={require("../assets/electro.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Electro</Text>
                </View>

            </View>

            {/* Second Row - Image buttons*/}
            <Text style={styles.headingText}>Second Genre</Text>

            <View style={styles.buttonGroup}>

                {/* POP */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => secondGenre = "pop"}>
                        <Image source={require("../assets/pop.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Pop</Text>
                </View>

                {/* INTERNATIONAL */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => secondGenre = "intl"}>
                        <Image source={require("../assets/intl.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>International</Text>
                </View>

                {/* INDIE */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => secondGenre = "indie"}>
                        <Image source={require("../assets/indie.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Indie</Text>
                </View>

                {/* ELECTRO */}
                <View style={styles.buttonRow}>
                    <TouchableOpacity onPress={() => secondGenre = "electro"}>
                        <Image source={require("../assets/electro.png")} style={styles.buttonImage} />
                    </TouchableOpacity>
                    <Text style={styles.buttonText}>Electro</Text>
                </View>
            </View>


            {/* CALCULATE BUTTON */}
            <View style={{ flex: 0.1, paddingHorizontal: 80 }}>
                <TouchableOpacity onPress={onClickHandler} style={styles.actionButton}>
                    <Text style={{
                        fontSize: 35,
                        alignSelf: 'center',
                    }}>CALCULATE</Text>
                </TouchableOpacity>
            </View>


            {/* HYBRID OUTPUT BOX */}
            <View style={styles.outputBox}>
                <Image source={genre.icon} style={{ alignSelf: 'center', width: 100, height: 100, marginTop: 20 }} />
                <Text style={{ alignSelf: 'center', fontSize: 30 }}>{genre.name}</Text>
            </View>

            {/* POPUP MODAL - Appears for app's first load*/}
            <Modal
                animationType="slide"
                visible={modalOpen} r
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

                    {/* Modal Instructions */}
                    <Image source={require("../assets/modal_demo.png")} style={{ alignSelf: 'center', marginTop: 20, width: 350, height: 290 }} />
                    <Text style={styles.modalText}>1. Select two of the genres you want to combine</Text>
                    <Text style={styles.modalText}>2. Click the "Calculate!" button to see the hybrid genre</Text>
                    <Text style={styles.modalText}>NOTE: You can't combine two of the same genres.</Text>

                </View>
            </Modal>

        </View>
    )
};