import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,Slider } from 'react-native';

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
    <View style ={styles.titleField}>

      <View style={styles.TextFields}>
        <Text>What is the task?</Text>
      </View>
      <View>
        <TextInput placeholder="Write what the task is" onChangeText={text => onChangeText(text)}
      value={title}/>
      </View>

      <View style={styles.TextFields}>
        <Text>How important is this task?</Text>
      </View>
      <View>
        <TextInput placeholder="Input the priority (1-5)" onChangeText={text => fixPriority(text)} value={priority}/>
      </View>

      <View style={styles.TextFields}>
        <Text>When does this task need to be done?</Text>
      </View>
      <View>

      </View>
      <View style={styles.ButtonStyling}>
        <Button title = "Create Task" color = "blue" />
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
export default TaskBuilder;
