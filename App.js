import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer, useNavigation, useRoute  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Button} from 'react-native';
import MultiTap from 'react-native-multitap'

function OptimalT9() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("0");
  const [readyToReplace, setReadyToReplace] = useState(true);

  function buttonPressed(value, mult = 0){
    if (mult != 0){
      if (mult == 4){
        setAnswerValue(handleNumber("y"));
      }else if(mult == 5){
        setAnswerValue(handleNumber("u"));
      }else if(mult == 6){
        setAnswerValue(handleNumber("i"));
      }
      mult = 0;
    }else if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue(0);
    }else{
      setAnswerValue(handleNumber(value));
    }
  }

  function handleNumber(handleInput){
    if(capsValue == true && (typeof handleInput === 'string' || handleInput instanceof String)){
      handledInput = handleInput.toUpperCase();
    }else{
      handledInput = handleInput;
    }
    if (readyToReplace == true){
      if (answerValue == "0"){
        return handledInput;
      }else{
        setReadyToReplace(false);
        return handledInput;
      }
    }else{
      return (""+answerValue+handledInput);
    }
  }

  function toggleCapsState(){
    setCapsValue(!capsValue);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom: 5}]}>
       {/* Row 1 */}
        <View style={styles.rows}>
            <MultiTap onSingleTap={() => buttonPressed("q")}
                      onDoubleTap={() => buttonPressed("w")}
                      onLongPress={() => buttonPressed(1)}
                      delay={300}
                      style = {styles.buttonDesign}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>1 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>q w</Text>
             </View>
            </MultiTap>
            <MultiTap onSingleTap={() => buttonPressed("e")}
                      onDoubleTap={() => buttonPressed("r")}
                      onTripleTap={() => buttonPressed("t")}
                      onNTaps={(n) => buttonPressed(2, n)}
                      onLongPress={() => buttonPressed(2)}
                      delay={800}
                      style = {styles.buttonDesign}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>2 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>e r t y u i</Text>
             </View>
            </MultiTap>
            <MultiTap onSingleTap={() => buttonPressed("o")}
                      onDoubleTap={() => buttonPressed("p")}
                      onLongPress={() => buttonPressed(3)}
                      delay={300}
                      style = {styles.buttonDesign}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>3 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>o p</Text>
             </View>
            </MultiTap>
         </View>
         {/* Row 2 */}
         <View style={styles.rows}>
             <MultiTap onSingleTap={() => buttonPressed("a")}
                       onDoubleTap={() => buttonPressed("s")}
                       onLongPress={() => buttonPressed(4)}
                       delay={300}
                       style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>4 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>a s</Text>
              </View>
             </MultiTap>
             <MultiTap onSingleTap={() => buttonPressed("d")}
                       onDoubleTap={() => buttonPressed("f")}
                       onTripleTap={() => buttonPressed("g")}
                       onNTaps={(n) => buttonPressed("h")}
                       onLongPress={() => buttonPressed(5)}
                       delay={700}
                       style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>5 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>d f g h</Text>
              </View>
             </MultiTap>
             <MultiTap onSingleTap={() => buttonPressed("j")}
                       onDoubleTap={() => buttonPressed("k")}
                       onTripleTap={() => buttonPressed("l")}
                       onLongPress={() => buttonPressed(6)}
                       delay={400}
                       style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>6 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>j k l</Text>
              </View>
             </MultiTap>
          </View>
          {/* Row 3 */}
          <View style={styles.rows}>
              <MultiTap onSingleTap={() => buttonPressed("z")}
                        onDoubleTap={() => buttonPressed("x")}
                        onTripleTap={() => buttonPressed("c")}
                        onLongPress={() => buttonPressed(7)}
                        delay={400}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>7 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>z x c</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("v")}
                        onDoubleTap={() => buttonPressed("b")}
                        onTripleTap={() => buttonPressed("n")}
                        onLongPress={() => buttonPressed(8)}
                        delay={400}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>8 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>v b n</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("m")}
                        onLongPress={() => buttonPressed(9)}
                        delay={50}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>9 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>m</Text>
               </View>
              </MultiTap>
           </View>
           {/* Row 4 */}
          <View style={styles.rows}>
           <MultiTap onSingleTap={() => buttonPressed(" ")}
                     onLongPress={() => buttonPressed(0)}
                     delay={50}
                     style = {[styles.buttonDesign,{flex:2, alignItems:'left'}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.buttonText,{marginLeft: 40}]}>0   ␣</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => buttonPressed("back")}
                     onLongPress={() => buttonPressed("delAll")}
                     delay={50}
                     style = {styles.buttonDesign}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>⌫</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => toggleCapsState()}
                     onLongPress={() => buttonPressed("mode")}
                     delay={50}
                     style = {styles.buttonDesign}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>Caps</Text>
              <Text style={[styles.buttonText, {fontSize: 20}]}>Mode</Text>
            </View>
           </MultiTap>
         </View>
         <View style={styles.rows}>
           <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OriginalT9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
           </TouchableOpacity>
         </View>
      </SafeAreaView>

      <StatusBar style="light-content" />
    </View>
  );
}

function OriginalT9() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("0");
  const [readyToReplace, setReadyToReplace] = useState(true);

  function buttonPressed(value, mult = 0){
    if (mult != 0){
      if (mult == 4){
        setAnswerValue(handleNumber("y"));
      }else if(mult == 5){
        setAnswerValue(handleNumber("u"));
      }else if(mult == 6){
        setAnswerValue(handleNumber("i"));
      }
      mult = 0;
    }else if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue(0);
    }else{
      setAnswerValue(handleNumber(value));
    }
  }

  function handleNumber(handleInput){
    if(capsValue == true && (typeof handleInput === 'string' || handleInput instanceof String)){
      handledInput = handleInput.toUpperCase();
    }else{
      handledInput = handleInput;
    }
    if (readyToReplace == true){
      if (answerValue == "0"){
        return handledInput;
      }else{
        setReadyToReplace(false);
        return handledInput;
      }
    }else{
      return (""+answerValue+handledInput);
    }
  }

  function toggleCapsState(){
    setCapsValue(!capsValue);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom: 5}]}>
       {/* Row 1 */}
        <View style={styles.rows}>
            <MultiTap onSingleTap={() => buttonPressed(1)}
                      delay={50}
                      style = {styles.buttonDesign}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>1 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}> </Text>
             </View>
            </MultiTap>
            <MultiTap onSingleTap={() => buttonPressed("a")}
                      onDoubleTap={() => buttonPressed("b")}
                      onTripleTap={() => buttonPressed("c")}
                      onLongPress={() => buttonPressed(2)}
                      delay={500}
                      style = {styles.buttonDesign}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>2</Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>a b c</Text>
             </View>
            </MultiTap>
            <MultiTap onSingleTap={() => buttonPressed("d")}
                      onDoubleTap={() => buttonPressed("e")}
                      onTripleTap={() => buttonPressed("f")}
                      onLongPress={() => buttonPressed(3)}
                      delay={500}
                      style = {styles.buttonDesign}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>3 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>d e f</Text>
             </View>
            </MultiTap>
         </View>
         {/* Row 2 */}
         <View style={styles.rows}>
             <MultiTap onSingleTap={() => buttonPressed("g")}
                       onDoubleTap={() => buttonPressed("h")}
                       onTripleTap={() => buttonPressed("i")}
                       onLongPress={() => buttonPressed(4)}
                       delay={500}
                       style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>4 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>g h i</Text>
              </View>
             </MultiTap>
             <MultiTap onSingleTap={() => buttonPressed("j")}
                       onDoubleTap={() => buttonPressed("k")}
                       onTripleTap={() => buttonPressed("l")}
                       onLongPress={() => buttonPressed(5)}
                       delay={500}
                       style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>5 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>j k l</Text>
              </View>
             </MultiTap>
             <MultiTap onSingleTap={() => buttonPressed("m")}
                       onDoubleTap={() => buttonPressed("n")}
                       onTripleTap={() => buttonPressed("o")}
                       onLongPress={() => buttonPressed(6)}
                       delay={500}
                       style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>6 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>m n o</Text>
              </View>
             </MultiTap>
          </View>
          {/* Row 3 */}
          <View style={styles.rows}>
              <MultiTap onSingleTap={() => buttonPressed("p")}
                        onDoubleTap={() => buttonPressed("q")}
                        onTripleTap={() => buttonPressed("r")}
                        onNTaps={(n) => buttonPressed("s")}
                        onLongPress={() => buttonPressed(7)}
                        delay={500}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>7 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>p q r s</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("t")}
                        onDoubleTap={() => buttonPressed("u")}
                        onTripleTap={() => buttonPressed("v")}
                        onLongPress={() => buttonPressed(8)}
                        delay={500}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>8 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>t u v</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("w")}
                        onDoubleTap={() => buttonPressed("x")}
                        onTripleTap={() => buttonPressed("y")}
                        onNTaps={(n) => buttonPressed("z")}
                        onLongPress={() => buttonPressed(9)}
                        delay={500}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>9 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>w x y z</Text>
               </View>
              </MultiTap>
           </View>
           {/* Row 4 */}
          <View style={styles.rows}>
           <MultiTap onSingleTap={() => buttonPressed(" ")}
                     onLongPress={() => buttonPressed(0)}
                     delay={50}
                     style = {[styles.buttonDesign,{flex:2, alignItems:'left'}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.buttonText,{marginLeft: 40}]}>0   ␣</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => buttonPressed("back")}
                     onLongPress={() => buttonPressed("delAll")}
                     delay={50}
                     style = {styles.buttonDesign}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>⌫</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => toggleCapsState()}
                     onLongPress={() => buttonPressed("mode")}
                     delay={50}
                     style = {styles.buttonDesign}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>Caps</Text>
              <Text style={[styles.buttonText, {fontSize: 20}]}>Mode</Text>
            </View>
           </MultiTap>
         </View>
         <View style={styles.rows}>
           <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OriginalT9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
           </TouchableOpacity>
         </View>
      </SafeAreaView>

      <StatusBar style="light-content" />
    </View>
  );
}

function ThreeKey() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("0");
  const [readyToReplace, setReadyToReplace] = useState(true);

  function buttonPressed(value, mult = 0){
    if (mult != 0){
      if (mult == 4){
        setAnswerValue(handleNumber("y"));
      }else if(mult == 5){
        setAnswerValue(handleNumber("u"));
      }else if(mult == 6){
        setAnswerValue(handleNumber("i"));
      }
      mult = 0;
    }else if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue(0);
    }else{
      setAnswerValue(handleNumber(value));
    }
  }

  function handleNumber(handleInput){
    if(capsValue == true && (typeof handleInput === 'string' || handleInput instanceof String)){
      handledInput = handleInput.toUpperCase();
    }else{
      handledInput = handleInput;
    }
    if (readyToReplace == true){
      if (answerValue == "0"){
        return handledInput;
      }else{
        setReadyToReplace(false);
        return handledInput;
      }
    }else{
      return (""+answerValue+handledInput);
    }
  }

  function toggleCapsState(){
    setCapsValue(!capsValue);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom: 5, justifyContent:'flex-start'}]}>
       {/* Row 1 */}
        <View style={[styles.rows, {justifyContent:'flex-start'}]}>
            <MultiTap onSingleTap={() => buttonPressed("q")}
                      onDoubleTap={() => buttonPressed("w")}
                      onLongPress={() => buttonPressed(1)}
                      delay={500}
                      style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>1 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>q w</Text>
             </View>
            </MultiTap>
            <MultiTap onSingleTap={() => buttonPressed("e")}
                      onDoubleTap={() => buttonPressed("r")}
                      onTripleTap={() => buttonPressed("t")}
                      onNTaps={(n) => buttonPressed(2, n)}
                      onLongPress={() => buttonPressed(2)}
                      delay={800}
                      style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>2 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>e r t y u i</Text>
             </View>
            </MultiTap>
            <MultiTap onSingleTap={() => buttonPressed("o")}
                      onDoubleTap={() => buttonPressed("p")}
                      onLongPress={() => buttonPressed(3)}
                      delay={500}
                      style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>3 </Text>
               <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>o p</Text>
             </View>
            </MultiTap>
         </View>
         {/* Row 2 */}
         <View style={styles.rows}>
             <MultiTap onSingleTap={() => buttonPressed("a")}
                       onDoubleTap={() => buttonPressed("s")}
                       onLongPress={() => buttonPressed(4)}
                       delay={500}
                       style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>4 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>a s</Text>
              </View>
             </MultiTap>
             <MultiTap onSingleTap={() => buttonPressed("d")}
                       onDoubleTap={() => buttonPressed("f")}
                       onTripleTap={() => buttonPressed("g")}
                       onNTaps={(n) => buttonPressed("h")}
                       onLongPress={() => buttonPressed(5)}
                       delay={500}
                       style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>5 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>d f g h</Text>
              </View>
             </MultiTap>
             <MultiTap onSingleTap={() => buttonPressed("j")}
                       onDoubleTap={() => buttonPressed("k")}
                       onTripleTap={() => buttonPressed("l")}
                       onLongPress={() => buttonPressed(6)}
                       delay={500}
                       style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>6 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>j k l</Text>
              </View>
             </MultiTap>
          </View>
          {/* Row 3 */}
          <View style={styles.rows}>
              <MultiTap onSingleTap={() => buttonPressed("z")}
                        onDoubleTap={() => buttonPressed("x")}
                        onTripleTap={() => buttonPressed("c")}
                        onLongPress={() => buttonPressed(7)}
                        delay={500}
                        style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>7 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>z x c</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("v")}
                        onDoubleTap={() => buttonPressed("b")}
                        onTripleTap={() => buttonPressed("n")}
                        onLongPress={() => buttonPressed(8)}
                        delay={500}
                        style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>8 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>v b n</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("m")}
                        onLongPress={() => buttonPressed(9)}
                        delay={50}
                        style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>9 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>m</Text>
               </View>
              </MultiTap>
           </View>
           {/* Row 4 */}
          <View style={styles.rows}>
           <MultiTap onSingleTap={() => buttonPressed(" ")}
                     onLongPress={() => buttonPressed(0)}
                     delay={50}
                     style = {[styles.buttonDesign,{flex:2, alignItems:'left',width: "20%", height: "90%"}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.buttonText,{marginLeft: 40}]}>0   ␣</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => buttonPressed("back")}
                     onLongPress={() => buttonPressed("delAll")}
                     delay={50}
                     style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>⌫</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => toggleCapsState()}
                     onLongPress={() => buttonPressed("mode")}
                     delay={50}
                     style = {[styles.buttonDesign, {width: "20%", height: "90%"}]}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>Caps</Text>
              <Text style={[styles.buttonText, {fontSize: 20}]}>Mode</Text>
            </View>
           </MultiTap>
         </View>
         <View style={[styles.rows, {marginTop: 15, marginBottom: 15}]}>
           <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={[styles.buttonDesign, {backgroundColor:"pink", justifyContent:'center', alignItems:'center'}]}>
             <Text style={[styles.altButtonText, {fontSize: 30, marginTop: 3}]}>Down</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={[styles.buttonDesign, {backgroundColor:"lightblue", justifyContent:'center', alignItems:'center'}]}>
             <Text style={[styles.altButtonText, {fontSize: 30, marginTop: 3}]}>Right</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={[styles.buttonDesign, {backgroundColor:"yellow", justifyContent:'center', alignItems:'center'}]}>
             <Text style={[styles.altButtonText, {fontSize: 30, marginTop: 3}]}>Select</Text>
           </TouchableOpacity>
         </View>
         <View style={styles.rows}>
           <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OriginalT9</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
           </TouchableOpacity>
         </View>
      </SafeAreaView>

      <StatusBar style="light-content" />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="optimalT9" component={OptimalT9} options={{ title: "optimalT9", headerTitleAlign: "center" }} />
        <Stack.Screen name="originalT9" component={OriginalT9} options={{ title: "originalT9", headerTitleAlign: "center" }} />
        <Stack.Screen name="threeKey" component={ThreeKey} options={{ title: "threeKey", headerTitleAlign: "center" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const { width, height } = Dimensions.get("window");
var buttonW = width/3.5
var buttonH = height/8

const styles = StyleSheet.create({
  container: {
    flex: 9,
    width: "100%",
    height: "100%",
    backgroundColor: '#484848',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    flex: 4,
    width: "100%",
    height: "100%",
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    justifyContent: 'center',
    color: "#F7DEAA",
  },
  altButtonText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
  },
  rows: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonRows: {
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonDesign: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space_between",
    margin: 5,
    width: buttonW,
    height: buttonH,
    borderRadius: 40,
  },
  switchButton:{
    backgroundColor: "darkblue",
    alignItems: "center",
    borderRadius: 5,
    width: buttonW,
    height: buttonH/4,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  }
});
