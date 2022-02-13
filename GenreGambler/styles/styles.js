import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6CADD4',
  },
  topContainer: {
    flex: 0.23,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: '100%',
    borderRadius: 2,
    fontWeight: 'medium',
    backgroundColor: '#0377BC',
  },
  
  headingText:{
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonText: {
    flex: 1,
    alignSelf: "center",
  },
  buttonGroup: {
    flex: 0.25,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 10,
  },
  buttonImage: {
    justifyContent:'center',
    width:80,
    height:80,
  },

  listButtonImage: {
    justifyContent:'center',
    width:120,
    height:120,
  },
  buttonRow: {
    marginVertical: 10,
    borderRadius: 50,

  },
  buttonText: {
    alignSelf: 'center',
    marginBottom:10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 10,
  },
  modalText:{
    paddingHorizontal: 10,
    fontSize: 17,
    margin: 10
  },
  shuffle_modalText:{
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontSize: 17,
    margin: 10
  },

  outputBox: {
    flex: 0.4,
    backgroundColor: '#f2f2f2',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  actionButton:
  {flex:1, borderRadius: 10, backgroundColor: '#0377BC',},

  artistTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingHorizontal: 10,
    margin: 10
  },
  albumTitle:{
    fontSize: 20,
    fontStyle: 'italic',
    alignSelf: 'center',
    paddingHorizontal: 5,
    margin: 10
  },
});