import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import TouchBlock from './components/TouchBlock.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgcolor: '#ffffff',
    };
  }
	
	changeBG(newcolor){
    //console.log(this.state.progress);
    this.setState({
			bgcolor:newcolor
    });
  }
  //shouldComponentUpdate()

  render() {
    return (
      <View style={[styles.container, {backgroundColor:this.state.bgcolor}]}>
				<View style={styles.blockrow}>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("red")}><Text style={styles.blockt}>Red</Text></TouchableOpacity>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("blue")}><Text style={styles.blockt}>Blue</Text></TouchableOpacity>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("green")}><Text style={styles.blockt}>Green</Text></TouchableOpacity>
				</View>
				<View style={styles.blockrow}>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("yellow")}><Text style={styles.blockt}>Yellow</Text></TouchableOpacity>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("pink")}><Text style={styles.blockt}>Pink</Text></TouchableOpacity>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("purple")}><Text style={styles.blockt}>Purple</Text></TouchableOpacity>
				</View>
				<View style={styles.blockrow}>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("orange")}><Text style={styles.blockt}>Orange</Text></TouchableOpacity>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("cyan")}><Text style={styles.blockt}>Cyan</Text></TouchableOpacity>
					<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG("lime")}><Text style={styles.blockt}>Lime</Text></TouchableOpacity>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	blockrow: {
		flex:1,
		flexDirection: 'row',
		justifyContent:'center',
	},
  block: {
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
    justifyContent: 'center',
		width: '33.3333%',
		borderColor:'black',
		borderWidth:1,
  },
	blockt: {
		width:'100%',
		textAlign:"center",
		fontSize: 24,
	},
  h2: {
    fontSize:18,
    fontWeight:'bold',
    padding:20,
  }
});
