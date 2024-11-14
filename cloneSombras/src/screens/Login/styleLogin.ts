import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 40,
    marginBottom: 200,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxText: {
    color: '#ccc',
    marginLeft: 5,
    fontSize: 12,
  },
  createAccountButton: {
    backgroundColor: '#ff640a',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  createAccountButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  loginText: {
    color: '#ccc',
    marginTop: 20,
  },
  loginLink: {
    color: '#ff640a',
    fontWeight: 'bold',
  },
});

export default styles;

