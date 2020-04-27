import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform,
} from 'react-native';
import {Button, Card, Body, CardItem, Grid, Row, Col, Text} from 'native-base';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import DefaultText from '../utils/DefaultText';

const ProductItem = (props) => {
  const {prod, onViewDetails, onAddToCart} = props;

  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <Card style={styles.cardContainer}>
      <TouchableCmp onPress={onViewDetails} useForeground>
        <View>
          <CardItem cardBody>
            <Body>
              <Image style={styles.image} source={{uri: prod.imageUrl}} />
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body style={styles.infosContainer}>
              <DefaultText bold style={styles.title}>
                {prod.title}
              </DefaultText>
              <DefaultText style={styles.price}>$ {prod.price}</DefaultText>
            </Body>
          </CardItem>
          <CardItem>
            <Grid>
              <Col>
                <Row style={styles.buttonsContainer}>
                  <Button dark bordered onPress={onViewDetails}>
                    <Text>Details</Text>
                  </Button>
                  <Button dark onPress={onAddToCart}>
                    <Text>To Cart</Text>
                  </Button>
                </Row>
              </Col>
            </Grid>
          </CardItem>
        </View>
      </TouchableCmp>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
  },
  infosContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
    color: Colors.gray,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
});
