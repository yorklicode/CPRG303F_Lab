import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  return (
    <View style={styles.form}>
      <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText} // Set taskText to the value of the input field
          value={taskText} // Controlled input has value set to taskText state
        />
        <Button title="Add Task"
        onPress={() => {
          addTask(taskText); // Use addTask with the current taskText
          setTaskText(''); // Clear the input field after adding a task
        }}
      />
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
