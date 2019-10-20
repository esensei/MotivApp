import {
  Dimensions,
  View
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Icon from 'react-native-ionicons'
import { Text } from 'native-base'
import React from 'react'

const { width, height } = Dimensions.get('window')


const InfoRings = (props) => (
  <View style={{ flex: 1,  paddingHorizontal: 12, flexDirection: 'row', alignContent: 'stretch', justifyContent: 'space-between' }}>
    <AnimatedCircularProgress
      size={width / 4.3}
      width={5}
      fill={ 22}
      rotation={0}

      tintColor='#FF7C03'
      backgroundColor="rgb(209,209,209)"
    >
      {() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="call" size={25} color="rgb(117,117,117)" />
          <Text style={{ color: "#FF7C03", fontWeight: 'bold' }}>{props.minutes}</Text>
          <Text>мин</Text>

        </View>
      )}
    </AnimatedCircularProgress>
    <AnimatedCircularProgress
      size={width / 4.3}
      width={5}
      fill={55}
      rotation={0}

      tintColor="#FF7C03"
      backgroundColor="rgb(209,209,209)"
    >
      {() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="globe" size={25} color="rgb(117,117,117)" />
          <Text style={{ color: "#FF7C03", fontWeight: 'bold' }}>{props.gb}</Text>
          <Text>ГБ</Text>

        </View>
      )}
    </AnimatedCircularProgress>
    <AnimatedCircularProgress
      size={width / 4.3}
      width={5}
      rotation={0}
      fill={22}
      tintColor="#FF7C03"
      backgroundColor="rgb(209,209,209)"
    >
      {() => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="mail" size={25} color="rgb(117,117,117)" />
          <Text style={{ color: "#FF7C03",fontWeight: 'bold' }}>{props.sms}</Text>
          <Text>шт</Text>

        </View>
      )}
    </AnimatedCircularProgress>
  </View>)

export default InfoRings
