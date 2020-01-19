import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,Slider } from 'react-native';

const TaskBuilder = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  var a = []
  const titleInputHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  const createTaskHandler = () =>{
    //setTasks(tasks => [...tasks,enteredText])
  };

  return(
    <View style ={styles.titleField}>

      <View style={styles.TextFields}>
        <Text>The title of the task</Text>
      </View>

      <View>
        <TextInput placeholder="Write what the task is" onChangeText={titleInputHandler} value ={enteredTitle}/>
      </View>

      <View style={styles.TextFields}>
        <Text>How important is this task</Text>
      </View>

      <View>
        {tasks.map((task)=><Text>{task}</Text>)}
      </View>

      <View style={styles.TextFields}>
        <Text>When does this task need to be done</Text>
      </View>
      <View style={styles.ButtonStyling}>
        <Button title = "Create Task" color = "blue" onPress={createTaskHandler}/>
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
