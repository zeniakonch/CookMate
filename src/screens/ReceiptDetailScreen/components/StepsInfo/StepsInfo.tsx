import { Text, View, StyleSheet } from 'react-native';

export default function StepsInfo() {



  return(
    <View>
      <Text style={styles.stepsTitleText}>
        Приготовление
      </Text>
      <View style={styles.stepsContainer}>
        <Text style={styles.stepNumber}>
          Шаг 1
        </Text>
        <Text style={styles.stepText}>
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
        </Text>
      </View>
      <View style={styles.stepsContainer}>
        <Text style={styles.stepNumber}>
          Шаг 2
        </Text>
        <Text style={styles.stepText}>
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
          Бла бла бла бла бла бла бла бла бла бла
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  stepsTitleText: {
    marginLeft: 20,
    marginTop: 80,
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#000000',
  },
  stepsContainer: {
    width: 368,
    height: 200,
    marginTop: 20,
    backgroundColor: '#F8EECB',
    elevation: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  stepNumber: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#FFAA00',
    fontWeight: '700',
  },
  stepText: {
    marginLeft: 40,
    fontFamily: 'Roboto',
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    width: 300,
    lineHeight: 20,
  },
})