import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'; 
import { View, Text, TouchableOpacity, Alert, Image, Modal, useWindowDimensions} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { styles } from './styles/styles'


const CalcScreen = () => {
  // Modal
  const [modalOpen, setModalOpen] = useState(false) 
  // Default icon and title for hybrid output
  const [genre, setGenre] = useState({icon: require("./assets/default.png"), name: 'Hybrid Genre'})

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
        setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})
      }
      else if (secondGenre == "indie") {
        setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})
      }
      else if (secondGenre == "electro") {
        setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop'})
      }
    }
    
    // International permutations
    else if (firstGenre == "intl"){
      if (secondGenre == "intl") {
        Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
      }
      else if (secondGenre == "pop") {
        setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})
      }
      else if (secondGenre == "indie") {
        setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})
      }
      else if (secondGenre == "electro") {
        setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})
      }
    }

    // Indie permutations
    else if (firstGenre == "indie"){
      if (secondGenre == "indie") {
        Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
      }
      else if (secondGenre == "pop") {
        setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})
      }
      else if (secondGenre == "intl") {
        setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})
      }
      else if (secondGenre == "electro") {
        setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})
      }
    }
    
    // Electro permutations
    else if (firstGenre == "electro"){
      if (secondGenre == "electro") {
        Alert.alert(errorMessage) // Error alert if 2nd genre is same as the 1st
      }
      else if (secondGenre == "pop") {
        setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop'})
      }
      else if (secondGenre == "intl") {
        setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})
      }
      else if (secondGenre == "indie") {
        setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})
      }
    }

  }

  // --- APP OUTPUT ---
    return(
      <View style={styles.container}>
        {/* App Header */}
        <View style={styles.topContainer} >
          {/* Help Button - opens Instructions Modal
          <TouchableOpacity 
            style={{    
              borderWidth: 0.5,
              alignItems:'center',
              justifyContent:'center',
              width:33,
              height:33,
              backgroundColor:'#fff',
              borderRadius:50,
              marginTop: 25,}}
              onPress={() => setModalOpen (true)}>
            <Image source={require("./assets/question-mark.png")} style={{width: 15, height: 15}}/>
          </TouchableOpacity> */}
          
          {/* Title and Description */}
          <Text style={{fontSize: 35, marginTop: 15, marginLeft: 15, fontWeight: 'bold'}}>Genre Calculator</Text>
          <Text style={{fontSize: 13, marginTop:10}}>Calculate two genres and receive a hybrid recommendation!</Text>
        </View>
        
        {/* First Row - Image buttons*/}
        <Text style={styles.headingText}>First Genre</Text>

        <View style={styles.buttonGroup}>

          {/* POP */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "pop"}> 
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Pop</Text>
          </View>
          
          {/* INTERNATIONAL */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "intl"}>          
              <Image source={require("./assets/intl.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>International</Text>
          </View>

          {/* INDIE */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "indie"}>          
              <Image source={require("./assets/indie.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Indie</Text>
          </View>

          {/* ELECTRO */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => firstGenre = "electro"}> 
              <Image source={require("./assets/electro.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Electro</Text>
          </View>
          
        </View>
        
        {/* Second Row - Image buttons*/}
        <Text style={styles.headingText}>Second Genre</Text>

        <View style={styles.buttonGroup}>

          {/* POP */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "pop"}>       
              <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Pop</Text>
          </View>

          {/* INTERNATIONAL */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "intl"}>          
              <Image source={require("./assets/intl.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>International</Text>
          </View>

          {/* INDIE */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "indie"}>          
              <Image source={require("./assets/indie.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Indie</Text>
          </View>

          {/* ELECTRO */}
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => secondGenre = "electro"}> 
              <Image source={require("./assets/electro.png")} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style = {styles.buttonText}>Electro</Text>
          </View>
        </View>


        {/* CALCULATE BUTTON */}
        <View style={{flex: 0.1, paddingHorizontal: 80}}>
          <TouchableOpacity onPress={onClickHandler} style={styles.actionButton}>
              <Text style={{
                fontSize: 35,
                alignSelf: 'center',}}>CALCULATE</Text>
            </TouchableOpacity>
        </View>
          
        
        {/* HYBRID OUTPUT BOX */}
        <View style={styles.outputBox}>
          <Image source={genre.icon} style={{alignSelf:'center', width: 100, height: 100, marginTop: 20}}/>
          <Text style={{alignSelf: 'center', fontSize: 30}}>{genre.name}</Text>
        </View>

        {/* POPUP MODAL - Appears for app's first load*/}
        <Modal
        animationType="slide"
        visible={modalOpen}r
        style={{flex: 0.5,
          justifyContent: 'center',
          alignSelf: 'center',}}
        transparent>

            <View style={styles.modalContainer}>

            {/* Close button */}
            <TouchableOpacity onPress={() => setModalOpen (false)}>
              <Image source={require("./assets/close.png")} style={{width: 15, height: 15, marginLeft: 10,}}/>
            </TouchableOpacity>

            {/* Modal Instructions */}
              <Image source={require("./assets/modal_demo.png")} style={{alignSelf:'center', marginTop: 20,width: 350, height: 290}}/>
              <Text style={styles.modalText}>1. Select two of the genres you want to combine</Text>
              <Text style={styles.modalText}>2. Click the "Calculate!" button to see the hybrid genre</Text>
              <Text style={styles.modalText}>NOTE: You can't combine two of the same genres.</Text>
              
            </View>
        </Modal>

      </View>
    )
};


const ShuffleScreen = () => {
  // Modal
  const [modalOpen, setModalOpen] = useState(false) 
  // Randomizer
  const [genre, setGenre] = useState({icon: require("./assets/default.png"), name: 'Genre'})
  const [artist, setArtist] = useState({name: 'Artist', albums: 'Albums'})

    
  const randomizer=()=>{
    const randomGenre = Math.floor(Math.random() * 10) + 1
    const randomArtist = Math.floor(Math.random() * 3) + 1

    if(randomGenre == 1) {
      setGenre({icon: require("./assets/pop.png"), name:'Pop'})

      switch(randomArtist){
        case 1: setArtist({name: 'Ariana Grande', albums: 'Positions, thank u, next, Sweetener'}) 
        break;
        case 2: setArtist({name: 'Beyoncé', albums: 'Lemonade, BEYONCÉ [Platinum Edition], Dangerously in Love'})
        break;
        case 3: setArtist({name: 'Ed Sheeran', albums: '=, ÷ (Deluxe), x (Deluxe Edition)'})
        break;
      }
    }
    else if(randomGenre == 2) {
      setGenre({icon: require("./assets/intl.png"), name:'International'})

      switch(randomArtist){
        case 1: setArtist({name: 'Elissa', albums: 'Aayshalak, W Akherta Maak, Ayami Beek'})
        break;
        case 2: setArtist({name: 'Wanessa', albums: 'DNA, W, Wanessa Camargo'})
        break;
        case 3: setArtist({name: 'Folkearth', albums: 'By the Sword of My Father, Drakkars In The Mist, Songs of Yore (Acoustic)'})
        break;
      }
    }
    else if(randomGenre == 3) {
      setGenre({icon: require("./assets/electro.png"), name:'Electronic'})

      switch(randomArtist){
        case 1: setArtist({name: 'Daft Punk', albums: 'Discovery, Random Access Memories, Homework'})
        break;
        case 2: setArtist({name: 'Björk', albums: 'Debut, PostPlay, Vespertine'})
        break;
        case 3: setArtist({name: 'Gorillaz', albums: 'Demon Days, Plastic Beach, Humanz (Deluxe)'})
        break;
      }
    }
    else if(randomGenre == 4) {
      setGenre({icon: require("./assets/indie.png"), name:'Indie'})

      switch(randomArtist){
        case 1: setArtist({name: 'Radiohead', albums: 'OK Computer, In Rainbows, The Bends'})
        break;
        case 2: setArtist({name: 'The Killers', albums: 'Hot Fuss, Sams Town, Day and Age (Bonus Tracks)'})
        break;
        case 3: setArtist({name: 'Tegan and Sara', albums: 'Heartthrob, So Jealous, The Con'})
        break;
      }
    }
    else if(randomGenre == 5) {
      setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop'})

      switch(randomArtist){
        case 1: setArtist({name: 'The Naked and Famous', albums: 'Passive Me, Aggressive YouIn Rolling Waves, Simple Forms'})
        break;
        case 2: setArtist({name: 'The Synthetic Dream Foundation', albums: 'Mechanical Serpent, Behind the Gates of Horn and Ivory, Where Drowned Suns Still Glimmer'})
        break;
        case 3: setArtist({name: 'Ladytron', albums: 'Light & Magic, Witching Hour, 604'})
        break;
      }
    }
    else if(randomGenre == 6) {
      setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})

      switch(randomArtist){
        case 1: setArtist({name: 'Swedish House Mafia', albums: 'Moth to a FlameBuy, Dont You Worry Child, Lifetime'})
        break;
        case 2: setArtist({name: 'Afrojack', albums: 'Anywhere With You, Forget the World (Deluxe), Hero'})
        break;
        case 3: setArtist({name: 'The Bloody Beetroots', albums: 'The Great Electronic Swindle, Romborama, HIDE'})
        break;
      }
    }
    else if(randomGenre == 7) {
      setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})

      switch(randomArtist){
        case 1: setArtist({name: 'La Roux', albums: 'La Roux, Bulletproof, Trouble in Paradise'})
        break;
        case 2: setArtist({name: 'The Postal Service', albums: 'Give Up (Deluxe 10th Anniversary Edition), Everything Will Change, Such Great Heights'})
        break;
        case 3: setArtist({name: 'The Teenagers', albums: 'Reality Check (North American Edition), The Teenagers, The Tricolore 7" Collection'})
        break;
      }
    }
    else if(randomGenre == 8) {
      setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})

      switch(randomArtist){
        case 1: setArtist({name: 'Los Hermanos', albums: 'Ventura, Bloco do Eu Sozinho, Los Hermanos'})
        break;
        case 2: setArtist({name: 'Ludov', albums: 'O Exercício das Pequenas Coisas, Dois a Rodar, Caligrafia'})
        break;
        case 3: setArtist({name: 'Bárbara Eugênia', albums: 'É o que temos, Journal de BAD, Tuda'})
        break;
      }
    }
    else if(randomGenre == 9) {
      setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})

      switch(randomArtist){
        case 1: setArtist({name: 'Florence + the Machine', albums: 'Lungs, Ceremonials, Between Two Lungs'})
        break;
        case 2: setArtist({name: 'Lana Del Rey', albums: 'Norman Fucking Rockwell!, Born to Die - The Paradise Edition, Ultraviolence (Deuxe)'})
        break;
        case 3: setArtist({name: 'Foster the People', albums: 'Torches, Sacred Hearts Club, Imagination'})
        break;
      }
    }
    else if(randomGenre == 10) {
      setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})

      switch(randomArtist){
        case 1: setArtist({name: 'Red Velvet', albums: '`The ReVe Festival` Finale, Queendom - The 6th Mini Album, Russian Roulette - The 3rd Mini Album'})
        break;
        case 2: setArtist({name: 'LOONA', albums: '[&], [12:00], [X X]'})
        break;
        case 3: setArtist({name: 'STAY-C', albums: 'Star To A Young Culture, STAYDOM, STEREOTYPE'})
        break;
      }
    }

  }

  return (  
    <View style={styles.container}>
      {/* App Header */}
      <View style={styles.topContainer} >
          {/* Title and Description */}
          <Text style={{fontSize: 35, marginTop: 15, marginLeft: 15, fontWeight: 'bold'}}>Genre Shuffler</Text>
          <Text style={{fontSize: 13, marginTop:10}}>Press the shuffle button to get a random genre recommendation!</Text>
        </View>
    
        <TouchableOpacity onPress={randomizer}style={{marginTop: 30,alignSelf: 'center', width: 300, flex:0.18, borderRadius: 10, backgroundColor: '#0377BC',}}>
          <Text style={{fontSize:50, alignSelf:'center', }}> Shuffle! </Text>
        </TouchableOpacity>
      

    

    {/* Output Box */}
    <View>
      <Image source={genre.icon} style={{alignSelf:'center', width: 100, height: 100, marginTop: 20}}/>
      <Text style={{alignSelf: 'center', fontSize: 30}}>{genre.name}</Text>
    </View>

    <View style={{flex:0.3, marginVertical: 5}}>
      <TouchableOpacity onPress={() => setModalOpen (true)} style={{alignSelf: 'center', backgroundColor:'white', borderRadius: 5, padding: 5}}>
      <Text style={{fontSize: 20}}>
        Click for recommendations!
      </Text>
      </TouchableOpacity>
    </View>
    
    {/* POPUP MODAL - Shows Genre Recs*/}
    <Modal
        animationType="slide"
        visible={modalOpen}r={false}
        style={{flex: 0.5,
          justifyContent: 'center',
          alignSelf: 'center',}}
        transparent>

            <View style={styles.modalContainer}>

            {/* Close button */}
            <TouchableOpacity onPress={() => setModalOpen (false)}>
              <Image source={require("./assets/close.png")} style={{width: 15, height: 15, marginLeft: 10,}}/>
            </TouchableOpacity>

            {/* Modal Instructions */}
              <View style={{flex:0.6,backgroundColor: '#0377BC', marginVertical: 10, paddingVertical: 30, borderRadius: 10}}>
                <Image source={genre.icon} style={{alignSelf:'center', width:120,height:120}}/>
                <Text style={{alignSelf: 'center', fontSize: 17, margin: 10, color: 'white'}}>{genre.name} Recommendation</Text>
              </View>

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

const ListScreen = () => {
    // Modal
    const [modalOpen, setModalOpen] = useState(false) 
    // Randomizer
    const [genre, setGenre] = useState({icon: require("./assets/default.png"), name: 'Genre'})
  
    var genrePick = ''
    const [artist1, setArtist1] = useState({name: 'Artist1', albums: 'Albums1'})
    const [artist2, setArtist2] = useState({name: 'Artist2', albums: 'Albums2'})
    const [artist3, setArtist3] = useState({name: 'Artist3', albums: 'Albums3'})
  
    const ShowGenreInfo=(genrePick)=>{
  
      if(genrePick == 'pop') {
        
        setGenre({icon: require("./assets/pop.png"), name:'Pop'})
        
        setArtist1({name: 'Ariana Grande', albums: 'Positions, thank u, next, Sweetener'}) 
        setArtist2({name: 'Beyoncé', albums: 'Lemonade, BEYONCÉ [Platinum Edition], Dangerously in Love'})
        setArtist3({name: 'Ed Sheeran', albums: '=, ÷ (Deluxe), x (Deluxe Edition)'})
      }
      else if(genrePick == 'intl') {
        setGenre({icon: require("./assets/intl.png"), name:'International'})
  
        setArtist1({name: 'Elissa', albums: 'Aayshalak, W Akherta Maak, Ayami Beek'})
        setArtist2({name: 'Wanessa', albums: 'DNA, W, Wanessa Camargo'})
        setArtist3({name: 'Folkearth', albums: 'By the Sword of My Father, Drakkars In The Mist, Songs of Yore (Acoustic)'})
      }
      else if(genrePick == 'electro') {
        setGenre({icon: require("./assets/electro.png"), name:'Electronic'})
  
        setArtist1({name: 'Daft Punk', albums: 'Discovery, Random Access Memories, Homework'})
        setArtist2({name: 'Björk', albums: 'Debut, PostPlay, Vespertine'})
        setArtist3({name: 'Gorillaz', albums: 'Demon Days, Plastic Beach, Humanz (Deluxe)'})
      }
      else if(genrePick == 'indie') {
        setGenre({icon: require("./assets/indie.png"), name:'Indie'})
  
        setArtist1({name: 'Radiohead', albums: 'OK Computer, In Rainbows, The Bends'})
        setArtist2({name: 'The Killers', albums: 'Hot Fuss, Sams Town, Day and Age (Bonus Tracks)'})
        setArtist3({name: 'Tegan and Sara', albums: 'Heartthrob, So Jealous, The Con'})
      }
      else if(genrePick == 'electro-pop') {
        setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop', parents:'Electro and Pop'})
  
        setArtist1({name: 'The Naked and Famous', albums: 'Passive Me, Aggressive YouIn Rolling Waves, Simple Forms'})
        setArtist2({name: 'The Synthetic Dream Foundation', albums: 'Mechanical Serpent, Behind the Gates of Horn and Ivory, Where Drowned Suns Still Glimmer'})
        setArtist3({name: 'Ladytron', albums: 'Light & Magic, Witching Hour, 604'})
      }
      else if(genrePick == 'electro-house') {
        setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})
  
        setArtist1({name: 'Swedish House Mafia', albums: 'Moth to a FlameBuy, Dont You Worry Child, Lifetime'})
        setArtist2({name: 'Afrojack', albums: 'Anywhere With You, Forget the World (Deluxe), Hero'})
        setArtist3({name: 'The Bloody Beetroots', albums: 'The Great Electronic Swindle, Romborama, HIDE'})
      }
      else if(genrePick == 'indie-tronica') {
        setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})
  
        setArtist1({name: 'La Roux', albums: 'La Roux, Bulletproof, Trouble in Paradise'})
        setArtist2({name: 'The Postal Service', albums: 'Give Up (Deluxe 10th Anniversary Edition), Everything Will Change, Such Great Heights'})
        setArtist3({name: 'The Teenagers', albums: 'Reality Check (North American Edition), The Teenagers, The Tricolore 7" Collection'})
      }
      else if(genrePick == 'brazil-indie') {
        setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})
  
        setArtist1({name: 'Los Hermanos', albums: 'Ventura, Bloco do Eu Sozinho, Los Hermanos'})
        setArtist2({name: 'Ludov', albums: 'O Exercício das Pequenas Coisas, Dois a Rodar, Caligrafia'})
        setArtist3({name: 'Bárbara Eugênia', albums: 'É o que temos, Journal de BAD, Tuda'})
      }
      else if(genrePick == 'indie-pop') {
        setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})
  
        setArtist1({name: 'Florence + the Machine', albums: 'Lungs, Ceremonials, Between Two Lungs'})
        setArtist2({name: 'Lana Del Rey', albums: 'Norman Fucking Rockwell!, Born to Die - The Paradise Edition, Ultraviolence (Deuxe)'})
        setArtist3({name: 'Foster the People', albums: 'Torches, Sacred Hearts Club, Imagination'})
      }
      else if(genrePick == 'k-pop') {
        setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})
        setArtist1({name: 'Red Velvet', albums: '`The ReVe Festival` Finale, Queendom - The 6th Mini Album, Russian Roulette - The 3rd Mini Album'})
        setArtist2({name: 'LOONA', albums: '[&], [12:00], [X X]'})
        setArtist3({name: 'STAY-C', albums: 'Star To A Young Culture, STAYDOM, STEREOTYPE'})
      }

    }
  
    
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Base Genres</Text>
        <View style={styles.buttonGroup}>
              {/* POP */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('pop')}> 
                  <Image source={require("./assets/pop.png")} style={styles.buttonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Pop</Text>
              </View>
              
              {/* INTERNATIONAL */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('intl')}>          
                  <Image source={require("./assets/intl.png")} style={styles.buttonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>International</Text>
              </View>
  
              {/* INDIE */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('indie')}>          
                  <Image source={require("./assets/indie.png")} style={styles.buttonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Indie</Text>
              </View>
  
              {/* ELECTRO */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('electro')}> 
                  <Image source={require("./assets/electro.png")} style={styles.buttonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Electro</Text>
              </View>
        </View>
  
        <Text style={styles.headingText}>Hybrid Genres</Text>
        <View style={styles.buttonGroup}>
              {/* ELECTRO POP */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('electro-pop')}> 
                  <Image source={require("./assets/hybrids/electro_pop.png")} style={styles.listButtonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Electro Pop</Text>
              </View>
  
              {/* BRAZIL INDIE */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('brazil-indie')}> 
                  <Image source={require("./assets/hybrids/brazil_indie.png")} style={styles.listButtonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Brazil Indie</Text>
              </View>
  
              {/* ELECTRO HOUSE */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('electro-house')}> 
                  <Image source={require("./assets/hybrids/electro_house.png")} style={styles.listButtonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Electro House</Text>
              </View>
  
              {/* INDIE POP */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('indie-pop')}> 
                  <Image source={require("./assets/hybrids/indie_pop.png")} style={styles.listButtonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Indie Pop</Text>
                </View>
  
              {/* INDIETRONICA */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('indie-tronica')}> 
                  <Image source={require("./assets/hybrids/indietronica.png")} style={styles.listButtonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>Indietronica</Text>
              </View>
  
              {/* K-POP */}
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={() => ShowGenreInfo('k-pop')}> 
                  <Image source={require("./assets/hybrids/kpop.png")} style={styles.listButtonImage}/>
                </TouchableOpacity>
                <Text style = {styles.buttonText}>K-Pop</Text>
              </View>
        </View>

      <View style={{marginTop:'auto'}}>
        <TouchableOpacity onPress={() => setModalOpen(true)} style={{ alignSelf: 'center', backgroundColor:'#0377BC', borderRadius: 5, padding: 5, margin: 10}}>
        <Text style={{fontSize: 30}}>
          Open info page
        </Text>
        </TouchableOpacity>
      </View>

    {/* POPUP MODAL - Shows Genre Info*/}
    <Modal
        animationType="slide"
        visible={modalOpen}r={false}
        style={{flex: 0.5,
          justifyContent: 'center',
          alignSelf: 'center',}}
        transparent>

            <View style={styles.modalContainer}>

            {/* Close button */}
            <TouchableOpacity onPress={() => setModalOpen (false)}>
              <Image source={require("./assets/close.png")} style={{width: 15, height: 15, marginLeft: 10,}}/>
            </TouchableOpacity>

            {/* Modal Instructions */}
              <View style={{ flexDirection: 'row', marginVertical: 20, alignContent:'space-around'}}>
                <Image source={genre.icon} style={{alignSelf:'center', width:80,height:80}}/>
                <Text style={{ fontSize: 45, margin: 10, fontStyle: 'italic'}}> {genre.name}</Text>
              </View>

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

const renderScene = SceneMap({
  first: CalcScreen,
  second: ShuffleScreen,
  third: ListScreen,
});

export default function App() {
  // Splash Screen
  useEffect(()=>{
    SplashScreen.hide();
  }, [])

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Calculator' },
    { key: 'second', title: 'Shuffler' },
    { key: 'third', title: 'Genre List' },
  ]);

  return (

    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

