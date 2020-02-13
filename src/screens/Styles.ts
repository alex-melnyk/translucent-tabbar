import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screenTitle: {
    padding: 10,
    fontSize: 36,
    fontWeight: '800'
  },
  listContentContainer: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 5,
    height: 110
  },
  mockLineEmpty: {
    marginBottom: 5,
    height: 10
  },
  mockLineLg: {
    marginBottom: 5,
    width: 'auto',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F6F7EB'
  },
  mockLineMd: {
    marginBottom: 5,
    width: '50%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F6F7EB'
  },
  mockLineSm: {
    marginBottom: 5,
    width: '25%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F6F7EB'
  }
});
