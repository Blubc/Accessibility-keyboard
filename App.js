import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer, useNavigation, useRoute  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Button, ImageBackground} from 'react-native';
import MultiTap from 'react-native-multitap';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";

function OptimalT9() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
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
    }else if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue("");
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
      setReadyToReplace(false);
      return handledInput;
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
        <ImageBackground
          source={require("./assets/blackconc.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
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
             <MultiTap onSingleTap={() => toggleCapsState()}
                      onLongPress={() => buttonPressed("mode")}
                      delay={50}
                      style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>Caps</Text>
                 <Text style={[styles.buttonText, {fontSize: 20}]}>Mode</Text>
               </View>
             </MultiTap>
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
           </View>
           <View style={styles.rows}>
             <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OriginalT9</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('swipeTap')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>Swipe</Text>
             </TouchableOpacity>
           </View>
          </ImageBackground>
        </SafeAreaView>
      <StatusBar style="light-content" />
    </View>
  );
}

function OriginalT9() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const [readyToReplace, setReadyToReplace] = useState(true);

  function buttonPressed(value, mult = 0){
    if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue("");
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
      setReadyToReplace(false);
      return handledInput;
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
        <ImageBackground
          source={require("./assets/blackconc.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
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
             <MultiTap onSingleTap={() => toggleCapsState()}
                      onLongPress={() => buttonPressed("mode")}
                      delay={50}
                      style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>Caps</Text>
                 <Text style={[styles.buttonText, {fontSize: 20}]}>Mode</Text>
               </View>
             </MultiTap>
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

           </View>
           <View style={styles.rows}>
             <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('swipeTap')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>Swipe</Text>
             </TouchableOpacity>
           </View>
          </ImageBackground>
        </SafeAreaView>
      <StatusBar style="light-content" />
    </View>
  );
}

function ThreeKey() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const [readyToReplace, setReadyToReplace] = useState(true);
  const [keyPosition, setKeyPosition] = useState(1);

  const keyValues = [['1','q','w','w','w','w','w','w'], ['2','e','r','t','y','u','u','u','u','u','u'], ['3','i','o','p','p','p','p','p','p'],
                     ['4','a','s','s','s','s','s','s'], ['5','d','f','g','h','h','h','h','h','h'], ['6','j','k','l','l','l','l','l','l'],
                     ['7','z','x','c','c','c','c','c','c'], ['8','v','b','n','n','n','n','n','n'], ['9','m','m','m','m','m','m']]

  function movePosition(direction){
    if (direction == "right"){
      if (keyPosition == 3){
        setKeyPosition(1);
      }else if (keyPosition == 6){
        setKeyPosition(4);
      }else if (keyPosition == 9){
        setKeyPosition(7);
      }else{
        setKeyPosition(keyPosition+1);
      }
    }else if (direction == "down"){
      if (keyPosition == 7){
        setKeyPosition(1);
      }else if (keyPosition == 8){
        setKeyPosition(2);
      }else if (keyPosition == 9){
        setKeyPosition(3);
      }else{
        setKeyPosition(keyPosition+3);
      }
    }
  }

  function getBackgroundColor(position){
    let color;
    if (keyPosition === position) {
      color = 'darkblue';
    } else {
      color = 'black';
    }
    return color;
  }

  function buttonPressed(value){
    if (value == 0){
      setAnswerValue(handleNumber(value));
      setKeyPosition(1);
    }else if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue("");
    }else if(value == "long"){
      setAnswerValue(handleNumber(keyValues[keyPosition-1][0]));
      setKeyPosition(1);
    }else{
      setAnswerValue(handleNumber(keyValues[keyPosition-1][value]));
      setKeyPosition(1);
    }
  }

  function handleNumber(handleInput){
    if(capsValue == true && (typeof handleInput === 'string' || handleInput instanceof String)){
      handledInput = handleInput.toUpperCase();
    }else{
      handledInput = handleInput;
    }
    if (readyToReplace == true){
      setReadyToReplace(false);
      return handledInput;
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
      <SafeAreaView style={[styles.container, {marginBottom: 0, justifyContent:'flex-start'}]}>
      <ImageBackground
        source={require("./assets/blackconc.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
       {/* Row 1 */}
        <View style={[styles.rows]}>
          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(1)}]}>
            <Text style={styles.smallButtonText}>1 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>q w</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(2)}]}>
            <Text style={styles.smallButtonText}>2 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>e r t y u</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(3)}]}>
            <Text style={styles.smallButtonText}>3 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>i o p</Text>
          </View>
        </View>
         {/* Row 2 */}
        <View style={styles.rows}>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(4)}]}>
            <Text style={styles.smallButtonText}>4 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>a s</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(5)}]}>
            <Text style={styles.smallButtonText}>5 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>d f g h</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(6)}]}>
            <Text style={styles.smallButtonText}>6 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>j k l</Text>
          </View>

        </View>
          {/* Row 3 */}
        <View style={styles.rows}>
           <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(7)}]}>
             <Text style={styles.smallButtonText}>7 </Text>
             <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>z x c</Text>
           </View>

           <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(8)}]}>
             <Text style={styles.smallButtonText}>8 </Text>
             <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>v b n</Text>
           </View>

           <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(9)}]}>
             <Text style={styles.smallButtonText}>9 </Text>
             <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>m</Text>
           </View>
        </View>
           {/* Row 4 */}
          <View style={styles.rows}>
           <MultiTap onSingleTap={() => toggleCapsState()}
                    delay={50}
                    style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>Caps</Text>
             </View>
           </MultiTap>
           <MultiTap onSingleTap={() => buttonPressed(" ")}
                     onLongPress={() => buttonPressed(0)}
                     delay={50}
                     style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
            </View>
           </MultiTap>
           <MultiTap onSingleTap={() => buttonPressed("back")}
                     onLongPress={() => buttonPressed("delAll")}
                     delay={50}
                     style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>⌫</Text>
            </View>
           </MultiTap>

         </View>
         <View style={[styles.rows, {marginTop: 15, marginBottom: 15}]}>
           <TouchableOpacity onPress={() => movePosition("down")} style={[styles.buttonDesign, {backgroundColor:"pink", justifyContent:'center', alignItems:'center'}]}>
             <Text style={[styles.altButtonText, {fontSize: 80, marginTop: 3}]}>↓</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => movePosition("right")} style={[styles.buttonDesign, {backgroundColor:"lightblue", justifyContent:'center', alignItems:'center'}]}>
             <Text style={[styles.altButtonText, {fontSize: 80, marginTop: 3}]}>→</Text>
           </TouchableOpacity>
           <MultiTap onSingleTap={() => buttonPressed(1)}
                     onDoubleTap={() => buttonPressed(2)}
                     onTripleTap={() => buttonPressed(3)}
                     onNTaps={(n) => buttonPressed(n)}
                     onLongPress={() => buttonPressed("long")}
                     delay={900}
                     style = {[styles.buttonDesign, {backgroundColor:"yellow", justifyContent:'center', alignItems:'center'}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.altButtonText, {fontSize: 30, marginTop: 3}]}>SELECT</Text>
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
           <TouchableOpacity onPress={() => navigation.navigate('swipeTap')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>Swipe</Text>
           </TouchableOpacity>
         </View>
        </ImageBackground>
      </SafeAreaView>

      <StatusBar style="light-content" />
    </View>
  );
}

function SwipeTap() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const [readyToReplace, setReadyToReplace] = useState(true);
  const [keyPosition, setKeyPosition] = useState(1);

  const keyValues = [['1','q','w','w','w','w','w','w'], ['2','e','r','t','y','u','u','u','u','u','u'], ['3','i','o','p','p','p','p','p','p'],
                     ['4','a','s','s','s','s','s','s'], ['5','d','f','g','h','h','h','h','h','h'], ['6','j','k','l','l','l','l','l','l'],
                     ['7','z','x','c','c','c','c','c','c'], ['8','v','b','n','n','n','n','n','n'], ['9','m','m','m','m','m','m']]

  function movePosition(direction){
    if (direction == "right"){
      if (keyPosition == 3){
        setKeyPosition(1);
      }else if (keyPosition == 6){
        setKeyPosition(4);
      }else if (keyPosition == 9){
        setKeyPosition(7);
      }else{
        setKeyPosition(keyPosition+1);
      }
    }else if (direction == "down"){
      if (keyPosition == 7){
        setKeyPosition(1);
      }else if (keyPosition == 8){
        setKeyPosition(2);
      }else if (keyPosition == 9){
        setKeyPosition(3);
      }else{
        setKeyPosition(keyPosition+3);
      }
    }else if (direction == "left"){
      if (keyPosition == 1){
        setKeyPosition(3);
      }else if (keyPosition == 4){
        setKeyPosition(6);
      }else if (keyPosition == 7){
        setKeyPosition(9);
      }else{
        setKeyPosition(keyPosition-1);
      }
    }else if (direction == "up"){
      if (keyPosition == 1){
        setKeyPosition(7);
      }else if (keyPosition == 2){
        setKeyPosition(8);
      }else if (keyPosition == 3){
        setKeyPosition(9);
      }else{
        setKeyPosition(keyPosition-3);
      }
    }
  }

  function getBackgroundColor(position){
    let color;
    if (keyPosition === position) {
      color = 'darkblue';
    } else {
      color = 'black';
    }
    return color;
  }

  function buttonPressed(value){
    if (value == 0){
      setAnswerValue(handleNumber(value));
    }else if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue("");
    }else if(value == "long"){
      setAnswerValue(handleNumber(keyValues[keyPosition-1][0]));
    }else{
      setAnswerValue(handleNumber(keyValues[keyPosition-1][value]));
    }
  }

  function handleNumber(handleInput){
    if(capsValue == true && (typeof handleInput === 'string' || handleInput instanceof String)){
      handledInput = handleInput.toUpperCase();
    }else{
      handledInput = handleInput;
    }
    if (readyToReplace == true){
      setReadyToReplace(false);
      return handledInput;
    }else{
      return (""+answerValue+handledInput);
    }
  }

  function toggleCapsState(){
    setCapsValue(!capsValue);
  }

  const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom:0, justifyContent:'flex-start'}]}>
        <GestureRecognizer onSwipeUp={() => movePosition("up")}
                           onSwipeDown={() => movePosition("down")}
                           onSwipeLeft={() => movePosition("left")}
                           onSwipeRight={() => movePosition("right")}
                           config={config}
                           style ={[styles.image, {flex:1}]}>
          <ImageBackground
            source={require("./assets/blackconc.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
          <MultiTap onSingleTap={() => buttonPressed(1)}
                    onDoubleTap={() => buttonPressed(2)}
                    onTripleTap={() => buttonPressed(3)}
                    onNTaps={(n) => buttonPressed(n)}
                    onLongPress={() => buttonPressed("long")}
                    delay={800}
                    style ={styles.image}>
           {/* Row 1 */}
            <View style={[styles.rows]}>
              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(1)}]}>
                <Text style={styles.buttonText}>1 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>q w</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(2)}]}>
                <Text style={styles.buttonText}>2 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>e r t y u</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(3)}]}>
                <Text style={styles.buttonText}>3 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>i o p</Text>
              </View>
            </View>
             {/* Row 2 */}
            <View style={styles.rows}>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(4)}]}>
                <Text style={styles.buttonText}>4 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>a s</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(5)}]}>
                <Text style={styles.buttonText}>5 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>d f g h</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(6)}]}>
                <Text style={styles.buttonText}>6 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>j k l</Text>
              </View>

            </View>
              {/* Row 3 */}
            <View style={styles.rows}>
               <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(7)}]}>
                 <Text style={styles.buttonText}>7 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>z x c</Text>
               </View>

               <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(8)}]}>
                 <Text style={styles.buttonText}>8 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>v b n</Text>
               </View>

               <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(9)}]}>
                 <Text style={styles.buttonText}>9 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>m</Text>
               </View>
            </View>
            </MultiTap>
               {/* Row 4 */}
              <View style={[styles.rows, {marginBottom: 50}]}>
                <MultiTap onSingleTap={() => toggleCapsState()}
                          delay={50}
                          style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
                 <View style={styles.buttonRows}>
                   <Text style={styles.buttonText}>Caps</Text>
                 </View>
                </MultiTap>
               <MultiTap onSingleTap={() => buttonPressed(" ")}
                         onLongPress={() => buttonPressed(0)}
                         delay={50}
                         style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
                <View style={styles.buttonRows}>
                  <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
                </View>
               </MultiTap>
               <MultiTap onSingleTap={() => buttonPressed("back")}
                         onLongPress={() => buttonPressed("delAll")}
                         delay={50}
                         style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
                <View style={styles.buttonRows}>
                  <Text style={styles.buttonText}>⌫</Text>
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
            </ImageBackground>
          </GestureRecognizer>
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
        <Stack.Screen name="swipeTap" component={SwipeTap} options={{ title: "swipeTap", headerTitleAlign: "center" }} />
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
    flex: 10,
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
    marginTop: 10
  },
  smallButtonText: {
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
    borderWidth: 1,
    borderColor: "white",
  },
  altButtonDesign: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space_around",
    width: '30%',
    height: '98%',
    borderRadius: 5,
    borderWidth:1,
    borderColor:"white"
  },
  switchButton:{
    backgroundColor: "darkblue",
    alignItems: "center",
    borderRadius: 5,
    width: width/4.5,
    height: buttonH/4,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
});
