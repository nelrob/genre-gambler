import React, { useState, useEffect, } from 'react';
import SplashScreen from 'react-native-splash-screen'; 
import { View, useWindowDimensions, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native';
import {styles} from './styles/calc_styles'
import { TabView, SceneMap } from 'react-native-tab-view';

const CalcScreen = () => {
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
          {/* Help Button - opens Instructions Modal */}
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
          </TouchableOpacity>
          
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
          <TouchableOpacity onPress={onClickHandler} style={{borderRadius: 10, backgroundColor: '#0377BC',}}>
              <Text style={{
                fontSize: 30,
                alignSelf: 'center',}}>CALCULATE</Text>
            </TouchableOpacity>
        </View>
          
        
        {/* HYBRID OUTPUT BOX */}
        <View style={styles.outputBox}>
          <Image source={genre.icon} style={{alignSelf:'center', width: 100, height: 100, marginTop: 20}}/>
          <Text style={{alignSelf: 'center', fontSize: 30}}>{genre.name}</Text>
        </View>

      </View>
    )
};









const ShuffleScreen = () => {
  const [genre, setGenre] = useState({icon: require("./assets/default.png"), name: 'Genre'})
    
  const randomizer=()=>{
    const randomGenre = Math.floor(Math.random() * 10) + 1

    if(randomGenre == 1) {
      setGenre({icon: require("./assets/pop.png"), name:'Pop'})
    }
    else if(randomGenre == 2) {
      setGenre({icon: require("./assets/intl.png"), name:'International'})
    }
    else if(randomGenre == 3) {
      setGenre({icon: require("./assets/electro.png"), name:'Electronic'})
    }
    else if(randomGenre == 4) {
      setGenre({icon: require("./assets/indie.png"), name:'Indie'})
    }
    else if(randomGenre == 5) {
      setGenre({icon: require("./assets/hybrids/electro_pop.png"), name:'Electro Pop'})
    }
    else if(randomGenre == 6) {
      setGenre({icon: require("./assets/hybrids/electro_house.png"), name:'Electro House'})
    }
    else if(randomGenre == 7) {
      setGenre({icon: require("./assets/hybrids/indietronica.png"), name:'Indietronica'})
    }
    else if(randomGenre == 8) {
      setGenre({icon: require("./assets/hybrids/brazil_indie.png"), name:'Brazilian Indie'})
    }
    else if(randomGenre == 9) {
      setGenre({icon: require("./assets/hybrids/indie_pop.png"), name:'Indie Pop'})
    }
    else if(randomGenre == 10) {
      setGenre({icon: require("./assets/hybrids/kpop.png"), name:'K-Pop'})
    }

  }

  return (  
    <View>
    <TouchableOpacity onPress={randomizer}style={{borderRadius:10, width:200, backgroundColor:'blue', alignSelf:'center'}}>
      <Text style={{fontSize:50}}> Shuffle! </Text>
    </TouchableOpacity>

    {/* Output Box */}
    <View>
      <Image source={genre.icon} style={{alignSelf:'center', width: 100, height: 100, marginTop: 20}}/>
      <Text style={{alignSelf: 'center', fontSize: 30}}>{genre.name}</Text>
    </View>
    <View>
      <TouchableOpacity>
      <Text>
        Find out more about {genre.name} This is a button btw
      </Text>
      </TouchableOpacity>

    </View>
    
  </View>
)


};



const ListScreen = () => (
  <View>
    <Text>Hatdog</Text>
  </View>
);

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

