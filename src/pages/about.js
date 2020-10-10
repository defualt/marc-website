import React from 'react'
import { Text, View } from 'react-native'
import PageLayout from '../PageLayout';
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    maxWidth: 1000,
    alignItems: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  title: {
    fontFamily: 'HeaderFont',
    fontSize: 25,
    fontWeight: 'bold',
    color: '$color3',
    textAlign:'center',
    paddingBottom:10,
    marginTop:20,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '$color4',
  },

})

const About = () => (
  <PageLayout>
    <View style={styles.container}>
      <Text style={styles.title}>About goes here</Text>
    </View>
  </PageLayout>

)

export default About;
