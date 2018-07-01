import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


class TouchBlock extends React.Component {

constructor(props) {
 super(props)
}
	
render() {
 return (
	 	<TouchableOpacity style={styles.block} onPress={(e) => this.changeBG(this.props.bgcolor)}>
	 		<Text style={styles.blockt}>this.props.label</Text>
		</TouchableOpacity>
 )
 }
}
export default TouchBlock