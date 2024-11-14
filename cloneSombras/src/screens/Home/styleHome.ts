import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",

  },
  content: {
    flex: 1,
    backgroundColor: "rgba(10, 10, 10, 0.5)",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "10%",
    //padding: 1,
    backgroundColor: "rgba(10, 10, 10, 0.5)",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
    //paddingBottom: 20,
    zIndex: 1,
  },
  safeArea:{
    flex: 0,
  },
  info: {
    flex: 1,
    //marginTop: 10,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  logo: {
    width: 109,
    height: 10,
    padding: 10,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  searchIcon: {
    padding: 5,
  },
  searchText: {
    fontSize: 20,
    color: '#ff640a',
  },
  banner: {
    flex: 1,
    padding: 100,
    width: '100%',
    height: 500,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  description: {
    color: '#ccc',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  watchButton: {
    backgroundColor: '#ff640a',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 1,
  },
  watchButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  topPickImage: {
    width: 120,
    height: 200,
    marginHorizontal: 5,
  },
});

export default styles;
