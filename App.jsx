/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Pressable
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import ToDoList from './ToDoList';
//import ToDoForm from './ToDoForm';



function Section({children, title}){
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  return (
   /*
   <SafeAreaView> 
    <ScrollView>
    
    {*//* Hard-coded tasks *//*}
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
    {*//* Form to add new tasks *//*}
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
      />
      <Button title="Add" />
    </View>
  </SafeAreaView>
  */

  <SafeAreaView>
      <ToDoList tasks={tasks} />
     
    </SafeAreaView>




  );
  
  
}


function ToDoList({ tasks }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
   
  },
  taskText: {
   
  },
 
});

export default App;
