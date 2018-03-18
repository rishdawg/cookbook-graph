import dataType from './dataType';
import Indian from '../../Data/Indian';
import Non_Indian from '../../Data/Non_Indian';
import Snacks from '../../Data/Snacks';
import { GraphQLString } from 'graphql';

export default {
    type:  dataType,
    args:{
      foodType:{
        type: GraphQLString
      }
    },
    resolve: (root, { foodType }) => {
      let food;
      if(foodType === 'Indian'){
        food = Indian
      }
      if(foodType === 'NonIndian'){
        food = Non_Indian
      }
      if(foodType === 'Snacks'){
        food = Snacks
      }
      return food;
    }
};
