import { Component } from "react";
import { View ,StyleSheet,Text,TouchableOpacity,TextInput, Image,FlatList} from "react-native";
import { AirbnbRating } from "react-native-ratings";

class GridProduct extends Component {
    render(){
        return(
            <View
            style={{
            flex:1,
            padding: 2,
            width:"50%",
            paddingVertical: 3,
            justifyContent: "space-between",
            marginHorizontal:17,
            marginVertical:21,
            alignItems:"flex-start"
          }}
        >
            <Image source={this.props.item.imgLink}/>
            <Text>{this.props.item.name}</Text>
            <View style={{flexDirection:"row"}}>
                <AirbnbRating
                    showRating={false}
                    defaultRating={this.props.item.rating}
                    size={15}
                />
                <Text style={{ color: "gray" }}>(15)</Text>
            </View>
            <View  style={{flexDirection:"row"}}>
              <Text> {this.props.item.price} đ</Text>
              <Text
                style={{
                  color: "gray",
                  flex: 0.5,
                  textAlign: "center",
                }}
              >
                -39%
              </Text>
            </View>
        </View>
        );
    }
}
export default function Sreen2(){
    const data = [
        {
          id: 7,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/carbusbtops21.png"),
        },
        {
          id: 6,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/daucam1.png"),
        },
        {
          id: 5,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/dauchuyendoi1.png"),
        },
        {
          id: 4,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/giacchuyen1.png"),
        },
        {
          id: 3,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/dauchuyendoipsps21.png"),
        },
        {
          id: 2,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/daynguon1.png"),
        },
        {
          id: 1,
          name: "Cáp chuyển từ Cổng USB sang PS2",
          rating: 4,
          price: 69900,
          imgLink: require("../assets/giacchuyen1.png"),
        },
      ];
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/back.png')} style={{marginHorizontal:17}}/>
            <View style={{flexDirection:'row',backgroundColor:'white',width:210}}>
                <Image source={require('../assets/search.png')} style={{marginHorizontal:5,marginVertical:5}}/>
                <TextInput placeholder="Dây cáp usb" style={{flex:1,}} />
            </View>
            <View>
                <Image source={require('../assets/shoping.png')}/>
                <View style={{position: 'absolute', right: 0, top: 0, borderRadius: 10, height: 10, width: 10, backgroundColor: 'red'}}>
                      
   </View> 
            </View>
            <Image source={require('../assets/more.png')} style={{tintColor:'white',marginHorizontal:17}}/>
        </View>
        <View style={styles.gridview}>
            <FlatList
                numColumns={2}
                keyExtractor={(item, i) => i}
                data={data} renderItem={({item})=>{
                    return (
                        <GridProduct item={item}>

                        </GridProduct>
                    );
                }}>

            </FlatList>
        </View>
        <View style={styles.footer}>
            
            <Image source={require('../assets/menu.png')} style={{tintColor:'black',marginHorizontal:17,}}/>
            <Image source={require('../assets/home.png')} style={{tintColor:'black',marginHorizontal:17,}}/>
            <Image source={require('../assets/back.png')} style={{tintColor:'black',marginHorizontal:17}}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex :1
    },
    header:{
        flex : 10,
        flexDirection:"row",
        backgroundColor : '#1BA9FF',
        justifyContent : "space-between",
        alignItems:'center',
        marginVertical : 17,
    },
    gridview : {    
        flex : 80,
        backgroundColor : "white"
    },
    footer : {
        flex : 10,
        flexDirection:"row",
        backgroundColor : '#1BA9FF',
        justifyContent : "space-between",
        alignItems:'center'
    }
})