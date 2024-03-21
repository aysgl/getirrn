import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import CategoryItems from './CategoryItems';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../redux/categoriesAction';

export default function MainCategories() {
  const dispatch = useDispatch();
  const state = useSelector(store => store.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <View style={styles.listContainer}>
      {state.categories.map((cat, index) => (
        <CategoryItems key={index} cat={cat} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    gap: 3,
    padding: 10,
  },
});
