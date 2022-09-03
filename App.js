import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer, useNavigation, useRoute  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Button, ImageBackground, Pressable} from 'react-native';
import MultiTap from 'react-native-multitap';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-detect";
import * as Haptics from 'expo-haptics';

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

  function getBackgroundColor(position){
    let color;
    if (typeof position === 'boolean'){
      if (position === true) {
        color = 'teal';
      } else {
        color = 'black';
      }
    }
    return color;
  }

  function characterDisplay(buttonString){
    if (capsValue == true){
      return(buttonString.toUpperCase());
    }else{
      return(buttonString);
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom: 5}]} onPressIn={Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
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
                        style = {styles.buttonDesign}
               >
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>1 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("q w")}</Text>
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
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("e r t y u i")}</Text>
               </View>
              </MultiTap>
              <MultiTap onSingleTap={() => buttonPressed("o")}
                        onDoubleTap={() => buttonPressed("p")}
                        onLongPress={() => buttonPressed(3)}
                        delay={300}
                        style = {styles.buttonDesign}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>3 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("o p")}</Text>
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
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("a s")}</Text>
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
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("d f g h")}</Text>
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
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("j k l")}</Text>
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
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("z x c")}</Text>
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
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("v b n")}</Text>
                 </View>
                </MultiTap>
                <MultiTap onSingleTap={() => buttonPressed("m")}
                          onLongPress={() => buttonPressed(9)}
                          delay={50}
                          style = {styles.buttonDesign}>
                 <View style={styles.buttonRows}>
                   <Text style={styles.buttonText}>9 </Text>
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("m")}</Text>
                 </View>
                </MultiTap>
             </View>
             {/* Row 4 */}
            <View style={styles.rows}>
              <TouchableOpacity onPress={() => toggleCapsState()} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%", backgroundColor: getBackgroundColor(capsValue)}]}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>Caps</Text>
                 <Text style={[styles.buttonText, {fontSize: 20}]}>mode</Text>
               </View>
              </TouchableOpacity>
             <TouchableOpacity onPress={() => buttonPressed(" ")} onLongPress={() => buttonPressed(0)} style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
              <View style={styles.buttonRows}>
                <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
              </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {buttonPressed("back"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} onLongPress={() => {buttonPressed("delAll"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>⌫</Text>
              </View>
             </TouchableOpacity>
           </View>
           <View style={[styles.rows, {marginTop:15}]}>
             <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OriginalT9</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('swipeTap')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>Swipe</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('twoTap')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>TwoTap</Text>
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

  function getBackgroundColor(position){
    let color;
    if (typeof position === 'boolean'){
      if (position === true) {
        color = 'teal';
      } else {
        color = 'black';
      }
    }
    return color;
  }

  function characterDisplay(buttonString){
    if (capsValue == true){
      return(buttonString.toUpperCase());
    }else{
      return(buttonString);
    }
  }


  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom: 5}]} onPressIn={Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
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
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("a b c")}</Text>
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
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("d e f")}</Text>
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
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("g h i")}</Text>
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
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("j k l")}</Text>
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
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("m n o")}</Text>
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
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("p q r s")}</Text>
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
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("t u v")}</Text>
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
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("w x y z")}</Text>
                 </View>
                </MultiTap>
             </View>
             {/* Row 4 */}
            <View style={styles.rows}>
              <TouchableOpacity onPress={() => toggleCapsState()} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%", backgroundColor: getBackgroundColor(capsValue)}]}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>Caps</Text>
                 <Text style={[styles.buttonText, {fontSize: 20}]}>mode</Text>
               </View>
              </TouchableOpacity>
             <TouchableOpacity onPress={() => buttonPressed(" ")} onLongPress={() => buttonPressed(0)} style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
              <View style={styles.buttonRows}>
                <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
              </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => {buttonPressed("back"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} onLongPress={() => {buttonPressed("delAll"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
              <View style={styles.buttonRows}>
                <Text style={styles.buttonText}>⌫</Text>
              </View>
             </TouchableOpacity>
           </View>

           <View style={[styles.rows, {marginTop:15}]}>
             <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('swipeTap')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>Swipe</Text>
             </TouchableOpacity>
             <TouchableOpacity onPress={() => navigation.navigate('twoTap')} style={styles.switchButton}>
               <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>TwoTap</Text>
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
    if (typeof position === 'boolean'){
      if (position === true) {
        color = 'teal';
      } else {
        color = 'black';
      }
    }else{
      if (keyPosition === position) {
        color = 'darkblue';
      } else {
        color = 'black';
      }
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

  function characterDisplay(buttonString){
    if (capsValue == true){
      return(buttonString.toUpperCase());
    }else{
      return(buttonString);
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom: 0, justifyContent:'flex-start'}]} onPressIn={Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
      <ImageBackground
        source={require("./assets/blackconc.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
       {/* Row 1 */}
        <View style={[styles.rows]}>
          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(1)}]}>
            <Text style={styles.smallButtonText}>1 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("q w")}</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(2)}]}>
            <Text style={styles.smallButtonText}>2 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("e r t y u")}</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(3)}]}>
            <Text style={styles.smallButtonText}>3 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("i o p")}</Text>
          </View>
        </View>
         {/* Row 2 */}
        <View style={styles.rows}>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(4)}]}>
            <Text style={styles.smallButtonText}>4 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("a s")}</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(5)}]}>
            <Text style={styles.smallButtonText}>5 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("d f g h")}</Text>
          </View>

          <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(6)}]}>
            <Text style={styles.smallButtonText}>6 </Text>
            <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("j k l")}</Text>
          </View>

        </View>
          {/* Row 3 */}
        <View style={styles.rows}>
           <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(7)}]}>
             <Text style={styles.smallButtonText}>7 </Text>
             <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("z x c")}</Text>
           </View>

           <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(8)}]}>
             <Text style={styles.smallButtonText}>8 </Text>
             <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("v b n")}</Text>
           </View>

           <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(9)}]}>
             <Text style={styles.smallButtonText}>9 </Text>
             <Text style={[styles.smallButtonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("m")}</Text>
           </View>
        </View>
           {/* Row 4 */}
          <View style={styles.rows}>
            <TouchableOpacity onPress={() => toggleCapsState()} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%", backgroundColor: getBackgroundColor(capsValue)}]}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>Caps</Text>
               <Text style={[styles.buttonText, {fontSize: 20}]}>mode</Text>
             </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={() => buttonPressed(" ")} onLongPress={() => buttonPressed(0)} style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {buttonPressed("back"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} onLongPress={() => {buttonPressed("delAll"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>⌫</Text>
            </View>
           </TouchableOpacity>
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
           <TouchableOpacity onPress={() => navigation.navigate('twoTap')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>TwoTap</Text>
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
    if (typeof position === 'boolean'){
      if (position === true) {
        color = 'teal';
      } else {
        color = 'black';
      }
    }else{
      if (keyPosition === position) {
        color = 'darkblue';
      } else {
        color = 'black';
      }
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

  function characterDisplay(buttonString){
    if (capsValue == true){
      return(buttonString.toUpperCase());
    }else{
      return(buttonString);
    }
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
      <SafeAreaView style={[styles.container, {marginBottom:0, justifyContent:'flex-start'}]} onPressIn={Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
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
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("q w")}</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(2)}]}>
                <Text style={styles.buttonText}>2 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("e r t y u")}</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(3)}]}>
                <Text style={styles.buttonText}>3 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("i o p")}</Text>
              </View>
            </View>
             {/* Row 2 */}
            <View style={styles.rows}>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(4)}]}>
                <Text style={styles.buttonText}>4 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("a s")}</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(5)}]}>
                <Text style={styles.buttonText}>5 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("d f g h")}</Text>
              </View>

              <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(6)}]}>
                <Text style={styles.buttonText}>6 </Text>
                <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("j k l")}</Text>
              </View>

            </View>
              {/* Row 3 */}
            <View style={styles.rows}>
               <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(7)}]}>
                 <Text style={styles.buttonText}>7 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("z x c")}</Text>
               </View>

               <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(8)}]}>
                 <Text style={styles.buttonText}>8 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("v b n")}</Text>
               </View>

               <View style={[styles.altButtonDesign, {backgroundColor: getBackgroundColor(9)}]}>
                 <Text style={styles.buttonText}>9 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 8}]}>{characterDisplay("m")}</Text>
               </View>
            </View>
            </MultiTap>
               {/* Row 4 */}
              <View style={[styles.rows, {marginBottom: 40}]}>
                <TouchableOpacity onPress={() => toggleCapsState()} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%", backgroundColor: getBackgroundColor(capsValue)}]}>
                 <View style={styles.buttonRows}>
                   <Text style={styles.buttonText}>Caps</Text>
                   <Text style={[styles.buttonText, {fontSize: 20}]}>mode</Text>
                 </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={() => buttonPressed(" ")} onLongPress={() => buttonPressed(0)} style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
                <View style={styles.buttonRows}>
                  <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
                </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => {buttonPressed("back"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} onLongPress={() => {buttonPressed("delAll"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
                <View style={styles.buttonRows}>
                  <Text style={styles.buttonText}>⌫</Text>
                </View>
               </TouchableOpacity>
             </View>

             <View style={[styles.rows, {marginBottom: 20}]}>
               <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
                 <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('originalT9')} style={styles.switchButton}>
                 <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OriginalT9</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('threeKey')} style={styles.switchButton}>
                 <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>3-Key</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('twoTap')} style={styles.switchButton}>
                 <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>TwoTap</Text>
               </TouchableOpacity>
             </View>
            </ImageBackground>
          </GestureRecognizer>
        </SafeAreaView>

      <StatusBar style="light-content" />
    </View>
  );
}

function TwoTap() {

  const navigation = useNavigation();
  const [memoryValue, setMemoryValue] = useState(0);
  const [capsValue, setCapsValue] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const [readyToReplace, setReadyToReplace] = useState(true);
  const [screenViewState, setScreenViewState] = useState(0);

  const keyValues = [['1','q','w','e','e'], ['2','r','t','y','u'], ['3','i','o','p','p'],
                     ['4','a','s','s','s'], ['5','d','f','g','h'], ['6','j','k','l','l'],
                     ['7','z','x','c','c'], ['8','v','b','n','n'], ['9','m','m','m','m']]


  function getBackgroundColor(position){
    let color;
    if (typeof position === 'boolean'){
      if (position === true) {
        color = 'teal';
      } else {
        color = 'black';
      }
    }
    return color;
  }

  function buttonPressed(value){
    if(value == "back"){
      setAnswerValue(answerValue.slice(0, -1));
    }else if(value == "delAll"){
      setAnswerValue("");
    }else{
      setAnswerValue(handleNumber(value));
      setScreenViewState(0);
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

  function characterDisplay(buttonString){
    if (capsValue == true){
      return(buttonString.toUpperCase());
    }else{
      return(buttonString);
    }
  }

  function handleBody(keyPressed){
    setScreenViewState(keyPressed);
  }

  const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
  };

  function twoTapBody(){
    if (screenViewState == 0){
      return(
        <View style={{marginTop:10}}>
          <View style={styles.rows}>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(1); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>1 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("q w e")}</Text>
               </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(2); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>2 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("r t y u")}</Text>
               </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(3); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={styles.buttonText}>3 </Text>
                 <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("i o p")}</Text>
               </View>
              </TouchableOpacity>
          </View>
          <View style={styles.rows}>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(4); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                <View style={styles.buttonRows}>
                  <Text style={styles.buttonText}>4 </Text>
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("a s")}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(5); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                <View style={styles.buttonRows}>
                  <Text style={styles.buttonText}>5 </Text>
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("d f g h")}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(6); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                <View style={styles.buttonRows}>
                  <Text style={styles.buttonText}>6 </Text>
                  <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("j k l")}</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View style={styles.rows}>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(7); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                 <View style={styles.buttonRows}>
                   <Text style={styles.buttonText}>7 </Text>
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("z x c")}</Text>
                 </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(8); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                 <View style={styles.buttonRows}>
                   <Text style={styles.buttonText}>8 </Text>
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("v b n")}</Text>
                 </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(9); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                 <View style={styles.buttonRows}>
                   <Text style={styles.buttonText}>9 </Text>
                   <Text style={[styles.buttonText, {fontSize: 25, marginBottom: 5}]}>{characterDisplay("m")}</Text>
                 </View>
              </TouchableOpacity>
          </View>
        </View>
      );
    }else{
      return(
        <View style={{marginTop:10}} onPressIn={Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}>
          <View style={styles.rows}>
              <TouchableOpacity style = {styles.buttonDesign}>
                <View style={styles.buttonRows}>
                  <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {buttonPressed(keyValues[screenViewState-1][1]); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}>{characterDisplay(keyValues[screenViewState-1][1])}</Text>
               </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {buttonPressed(keyValues[screenViewState-1][2]); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}>{characterDisplay(keyValues[screenViewState-1][2])}</Text>
               </View>
              </TouchableOpacity>
          </View>
          <View style={styles.rows}>
              <TouchableOpacity style = {styles.buttonDesign}>
                <View style={styles.buttonRows}>
                  <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}></Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {buttonPressed(keyValues[screenViewState-1][3]); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                <View style={styles.buttonRows}>
                  <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}>{characterDisplay(keyValues[screenViewState-1][3])}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {buttonPressed(keyValues[screenViewState-1][4]); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
                <View style={styles.buttonRows}>
                  <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}>{characterDisplay(keyValues[screenViewState-1][4])}</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View style={styles.rows}>
            <TouchableOpacity style = {styles.buttonDesign}>
              <View style={styles.buttonRows}>
                <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {buttonPressed(keyValues[screenViewState-1][0]); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={[styles.buttonText, {fontSize: 55, marginTop: 25}]}>{characterDisplay(keyValues[screenViewState-1][0])}</Text>
               </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.buttonDesign} onPress = {() => {handleBody(0); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}>
               <View style={styles.buttonRows}>
                 <Text style={[styles.buttonText, {fontSize: 45, marginTop: 32}]}>Back</Text>
               </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.displayContainer}>
       <Text style={{fontSize: 40,textAlign: 'center',color: 'white', marginRight: 10}}>{answerValue}</Text>
      </SafeAreaView>
      <SafeAreaView style={[styles.container, {marginBottom:0, justifyContent:'flex-start'}]} onPressIn={Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}>
        <ImageBackground
            source={require("./assets/blackconc.jpg")}
            resizeMode="cover"
            style={styles.image}>

         { twoTapBody() }

         <View style={[styles.rows, {marginBottom: 40}]}>
            <TouchableOpacity onPress={() => toggleCapsState()} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%", backgroundColor: getBackgroundColor(capsValue)}]}>
             <View style={styles.buttonRows}>
               <Text style={styles.buttonText}>Caps</Text>
               <Text style={[styles.buttonText, {fontSize: 20}]}>mode</Text>
             </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={() => buttonPressed(" ")} onLongPress={() => buttonPressed(0)} style = {[styles.buttonDesign,{flex:3, width: "20%", height: "100%"}]}>
            <View style={styles.buttonRows}>
              <Text style={[styles.buttonText,{marginLeft: 10, padding:10}]}>0   ␣</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {buttonPressed("back"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} onLongPress={() => {buttonPressed("delAll"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);}} style = {[styles.buttonDesign, {flex:2, width: "20%", height: "100%"}]}>
            <View style={styles.buttonRows}>
              <Text style={styles.buttonText}>⌫</Text>
            </View>
           </TouchableOpacity>
         </View>

         <View style={[styles.rows, {marginBottom: 20}]}>
           <TouchableOpacity onPress={() => navigation.navigate('optimalT9')} style={styles.switchButton}>
             <Text style={[styles.buttonText, {fontSize: 20, marginTop: 3}]}>OptimalT9</Text>
           </TouchableOpacity>
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="optimalT9" component={OptimalT9} options={{ title: "optimalT9", headerTitleAlign: "center" }} />
        <Stack.Screen name="originalT9" component={OriginalT9} options={{ title: "originalT9", headerTitleAlign: "center" }} />
        <Stack.Screen name="threeKey" component={ThreeKey} options={{ title: "threeKey", headerTitleAlign: "center" }} />
        <Stack.Screen name="swipeTap" component={SwipeTap} options={{ title: "swipeTap", headerTitleAlign: "center" }} />
        <Stack.Screen name="twoTap" component={TwoTap} options={{ title: "twoTap", headerTitleAlign: "center" }} />
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
    margin: 3,
    width: buttonW,
    height: buttonH,
    borderRadius: 30,
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
