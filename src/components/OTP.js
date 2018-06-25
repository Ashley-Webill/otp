import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import {
    Button
} from 'react-native-elements';

class OTP extends Component{

    state = { one:'', two:'', three:'', four:'', five:'', six:''} 

    onSubmit(){
        const opt = this.state.one + this.state.two + this.state.three + this.state.four + this.state.five + this.state.six;
        console.log('One Time Pin', opt);
    }

    onFocus = (input) => {
        this.setState({
            [input]: true
        })
    }
    
    onBlur= (input) => {
        this.setState({
            [input]: false
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <TextInput
                        ref={'input1'} 
                        placeholder={''}
                        style={this.state.input1 ? styles.inputFocused : styles.input}
                        maxLength={1}
                        onKeyPress={(event) => {event.nativeEvent.key == 'Backspace' ? null : this.refs.input2.focus()}  }
                        onChangeText={(text) => {this.setState({one: text})}}
                        onFocus={() => this.onFocus('input1') }
                        onBlur={() => this.onBlur('input1') }
                        
                    />
                    <TextInput
                        ref={'input2'} 
                        placeholder={''}
                        style={this.state.input2 ? styles.inputFocused : styles.input }
                        maxLength={1}
                        onKeyPress={(event) => {event.nativeEvent.key == 'Backspace' ? this.refs.input1.focus() : this.refs.input3.focus()}  }
                        onChangeText={(text) => {this.setState({two: text})}}
                        onFocus={() => this.onFocus('input2') }
                        onBlur={() => this.onBlur('input2') }
                    />
                    
                    <TextInput
                        ref={'input3'} 
                        placeholder={''}
                        style={this.state.input3 ? styles.inputFocused : styles.input }
                        maxLength={1}
                        onKeyPress={(event) => {event.nativeEvent.key == 'Backspace' ? this.refs.input2.focus() : this.refs.input4.focus()}  }
                        onChangeText={(text) => {this.setState({three: text})}}
                        onFocus={() => this.onFocus('input3') }
                        onBlur={() => this.onBlur('input3') }
                    />
                    <TextInput
                        ref={'input4'} 
                        placeholder={''}
                        style={this.state.input4 ? styles.inputFocused : styles.input }
                        maxLength={1}
                        onKeyPress={(event) => {event.nativeEvent.key == 'Backspace' ? this.refs.input3.focus() : this.refs.input5.focus()}  }
                        onChangeText={(text) => {this.setState({four: text})}}
                        onFocus={() => this.onFocus('input4') }
                        onBlur={() => this.onBlur('input4') }
                    />
                    <TextInput
                        ref={'input5'} 
                        placeholder={''}
                        style={this.state.input5 ? styles.inputFocused : styles.input }
                        maxLength={1}
                        onKeyPress={(event) => {event.nativeEvent.key == 'Backspace' ? this.refs.input4.focus() : this.refs.input6.focus()}  }
                        onChangeText={(text) => {this.setState({five: text})}}
                        onFocus={() => this.onFocus('input5') }
                        onBlur={() => this.onBlur('input5') }
                    />
                    <TextInput
                        ref={'input6'} 
                        placeholder={''}
                        style={this.state.input6 ? styles.inputFocused : styles.input }
                        maxLength={1}
                        onKeyPress={(event) => {event.nativeEvent.key == 'Backspace' ? this.refs.input5.focus() : null}  }
                        onChangeText={(text) => {this.setState({six: text})}}
                        onFocus={() => this.onFocus('input6') }
                        onBlur={() => this.onBlur('input6') }
                    />
                </View>
                <Button
                    style={{width: 300, alignSelf: 'center', marginTop: 10}}
                    title={'Submit'}
                    onPress={ () => this.onSubmit() }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    input: {
        width: 50, 
        height: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black', 
        backgroundColor: 'white', 
        textAlign: 'center', 

    },
    inputFocused: {
        width: 50, 
        height: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'orange', 
        backgroundColor: 'white', 
        textAlign: 'center'
    },
});

export default OTP;