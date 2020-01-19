import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const InputDate = (props) => {

  const [day, changeDay] = React.useState('');
  const [month, changeMonth] = React.useState('');
  const [year, changeYear] = React.useState('');

  const checkLengthAndNumber = (inputDate) => {
    if(inputDate.length > 2){
      inputDate = inputDate.substring(0,2);
      return inputDate;
    }else if(inputDate.length == 0){
      return inputDate;
    }
    if(inputDate.length == 2) {
      if(inputDate.charCodeAt(1) < 48 || inputDate.charCodeAt(1) > 57){
        inputDate = inputDate.charAt(0);
      }
      return inputDate;
    }else{
      if(inputDate.charCodeAt(0) < 48 || inputDate.charCodeAt(0) > 57){
        inputDate = "";
      }
      return inputDate;
    }
  };

  const onChangeDay = (inputDate) => {
    inputDate = checkLengthAndNumber(inputDate);
    if(inputDate.length == 1){
      if(inputDate.charCodeAt(0) < 48 || inputDate.charCodeAt(0) > 51){
        inputDate = "";
      }
    }
    if(inputDate.length == 2){
      if(inputDate.charCodeAt(0) == 51 && inputDate.charCodeAt(1) > 49){
        inputDate = '3';
      }
    }
    changeDay(inputDate);
  };

  const onChangeMonth = (inputDate) => {
    inputDate = checkLengthAndNumber(inputDate);
    if(inputDate.length == 1){
      if(inputDate.charCodeAt(0) < 48 || inputDate.charCodeAt(0) > 57){
        inputDate = "";
      }
    }
    if(inputDate.length == 2){
      if(((inputDate.charCodeAt(0) == 48 || inputDate.charCodeAt(0) == 49) && inputDate.charCodeAt(1) > 50) || (inputDate.charCodeAt(0) > 49)){
        inputDate = inputDate.charAt(0);
      }
    }
    changeMonth(inputDate);
  };

  const onChangeYear = (inputDate) => {
    inputDate = checkLengthAndNumber(inputDate);
    changeYear(inputDate);
  };

  return(
    <View>
      <View>
        <TextInput placeholder="DD" onChangeText={text => onChangeDay(text)} value={day}/>
      </View>
      <View>
        <TextInput placeholder="MM" onChangeText={text => onChangeMonth(text)} value={month}/>
      </View>
      <View>
        <TextInput placeholder="YY" onChangeText={text => onChangeYear(text)} value={year}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextFields: {
    backgroundColor: 'red'
  },
  textStyling: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleField:{

  },
});

export default InputDate;
