import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,Slider,Dimensions } from 'react-native';
const borderRadius = 5;

const TaskBuilder = props => {
  /*
  const [enteredTitle, setEnteredTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const titleInputHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  const createTaskHandler = () =>{
    //setTasks(tasks => [...tasks,enteredText])
  };
  */
    /*{tasks.map((task)=><Text>{task}</Text>)}*/
  /*
  title - task title.
  priority - task importance (1-5)

  */
  const [title, onChangeText] = React.useState('');
  const [priority, onChangePriority] = React.useState('');

  const fixPriority = (enteredText) => {
    if(enteredText.charCodeAt(0) < 49 ){
      enteredText = "";
    }else if(enteredText.charCodeAt(0) > 53){
      enteredText = "";
    }else if(enteredText.length > 1){
      enteredText = enteredText.charAt(0);
    }
    onChangePriority(enteredText);
  };

  return(
    <View style={styles.headContainer }>
      <View style ={styles.titleField}>
        <View style={styles.TextFields}>
          <Text style = {styles.textStyling}>What is the task?</Text>
        </View>
        <View style={styles.textInputStyle}>
          <TextInput placeholder="Write what the task is" onChangeText={text => onChangeText(text)}
        value={title}/>
        </View>
        <View style={styles.TextFields}>
          <Text style = {styles.textStyling}>How important is this task?</Text>
        </View>
        <View style={styles.textInputStyle}>
          <TextInput placeholder="Input the priority (1-5)" onChangeText={text => fixPriority(text)} value={priority}/>
        </View>
        <View style={styles.TextFields}>
          <Text style = {styles.textStyling}>When does this task need to be done?</Text>
        </View>
        <View style={styles.textInputStyle}>
          <TextInput placeholder ="Input deadline" onChangeText={text => fixPriority(text)} />
        </View>
        <View style={styles.ButtonStyling}>
          <Button title = "Create Task" color = "#F2C759" style = {{fontWeight:'bold'}} />
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  TextFields: {
    backgroundColor: '#F2C759',
    height: 30
  },
  textStyling: {
    color: 'black',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '600',
    paddingLeft: 7,
    paddingTop:3
  },
  headContainer: {
    marginTop:-5,
    marginRight:15,
    height: 340,
    borderRadius: borderRadius,
    shadowOffset: { width: 6,  height: 6, },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    alignContent: 'space-between',
    backgroundColor: 'white',
  },
  textInputStyle:{
    backgroundColor:'F5F5F5',
    height: 70
  },
});
export default TaskBuilder;
