import {  StyleSheet,  View,Text, KeyboardAvoidingView, Platform , TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, {useState} from'react';
import Task from '../../components/Task'



export default function HomeScreen() {

  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask("");
  }

  const completeTask = (index : number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
   }

  return (
    <View style= {styles.container}>

    <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>
      Today's Task</Text>

   <View style={styles.items}>

    {
      taskItems.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                    <Task  text ={item}/>
          </TouchableOpacity>
        )

})

    }
   


   </View>

    </View>
    <KeyboardAvoidingView 
    behavior={Platform.OS=== "ios" ? "padding" : "height"}
    style = {styles.writeTaskWrapper}
    >

<TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

    <TouchableOpacity onPress={() => handleAddTask()}>
    <View style={styles.AddWrapper}>
    <Text style={styles.addText}>+</Text>

    </View>

    </TouchableOpacity>

</KeyboardAvoidingView>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal:20, 
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{marginTop: 30},
  writeTaskWrapper:{position:'absolute',
    bottom: 60,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  input:{paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250

  },
  AddWrapper:{width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius: 60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{}

});
