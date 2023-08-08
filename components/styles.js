import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#21012e',
    justifyContent: 'space-between',
    opacity: 0.9,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20,
    marginTop: 10,
    opacity: 0.5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 40,
    lineHeight: 55,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    backgroundColor: '#1976D2',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default styles;
