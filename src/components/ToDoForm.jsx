import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import tasksData from '../data/tasks.json';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText(''); // Clear the input after adding a task
  };





  

  const handleAddRandomTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      addTask(randomTask);
      setTaskText('');
     
    }
  };
  return (
    <View style={styles.form}>
      <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText} 
          value={taskText} 
      />
        
      <Button title="Add Task" onPress={handleAddTask}/>
      
    </View>
    
  );
 

}

const styles = StyleSheet.create({
   
      form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
      },
    
    
});

export default ToDoForm;
