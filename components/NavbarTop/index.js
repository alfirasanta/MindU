import { Link } from 'expo-router';
import React from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import {Svg,Ellipse,Path}  from 'react-native-svg';
const NavbarTop = () => {
  return (
    <View style={{flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',}}>
      <View style={{  position: 'absolute',
    top: -60,}}>
        <Svg width="622" height="177" viewBox="0 0 622 177" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Ellipse cx="311" cy="88.5" rx="311" ry="88.5" fill="#2196F3" />
        </Svg>
      </View>
      <Text style={{position: 'absolute',
    zIndex: 1, 
    top: 100,  
    fontSize: 12, 
    color: 'white', 
    top: 10,
    left:10,
    fontWeight:'600'}}>
        Selamat Datang, Rochmat Wahyu Prayogi
      </Text>
      <Text style={{position: 'absolute',
    zIndex: 1,   
    fontSize: 12, 
    color: 'white', 
    top: 50,
    left:10,
    fontWeight:'600'}}>
        Rabu,20-01-2023
      </Text>
      <View style={{    position: 'absolute',
    top: -125,}}>
        <Svg width="622" height="177" viewBox="0 0 622 177" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Ellipse cx="311" cy="88.5" rx="311" ry="88.5" fill="#41A9FB" />
        </Svg>
      </View>
      <Link href="notifikasi/notifikasi" style={{    position: 'absolute',
    top: 20,
    zIndex:1,
    right:10}}>
        <TouchableOpacity>
          <Svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
            <Path d="M14.0481 32.4583C14.3992 33.6014 15.1193 34.6036 16.1014 35.3161C17.0836 36.0287 18.2755 36.4135 19.5 36.4135C20.7245 36.4135 21.9164 36.0287 22.8986 35.3161C23.8807 34.6036 24.6008 33.6014 24.9519 32.4583H14.0481ZM4.875 30.875H34.125V26.125L30.875 21.375V13.4583C30.875 12.0028 30.5808 10.5616 30.0091 9.21693C29.4375 7.87223 28.5996 6.65042 27.5433 5.62123C26.4871 4.59205 25.2331 3.77566 23.853 3.21867C22.4729 2.66168 20.9938 2.375 19.5 2.375C18.0062 2.375 16.5271 2.66168 15.147 3.21867C13.7669 3.77566 12.5129 4.59205 11.4567 5.62123C10.4004 6.65042 9.56252 7.87223 8.99087 9.21693C8.41922 10.5616 8.125 12.0028 8.125 13.4583V21.375L4.875 26.125V30.875Z" fill="#E0E0E0"/>
          </Svg>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default NavbarTop;
