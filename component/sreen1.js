import React, { Component } from 'react';
import { Image, StyleSheet, Text, View ,FlatList ,TouchableOpacity } from 'react-native';

class FlatListItem extends Component {
    render() {
      return (
        <View style={{
            flex:1 ,
            flexDirection : "row",
            justifyContent:'space-between',
            borderStyle: "solid",
            borderBottomWidth: 0.5,
            width:'100%',
            padding: 1,
            paddingVertical: 3,
            borderColor: "gray",
        }}>
            <Image source={this.props.item.imgLink} style={{marginRight:17}}/>
            <View style={{flex:1,justifyContent:'space-evenly'}}>
            <Text>{this.props.item.name}</Text>
            <Text style={{color:"gray"}}>Shop <Text>{this.props.item.producer}</Text></Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'red',justifyContent:'center',alignItems:'center',width:88,height:38,marginRight:17,marginTop:23}}>
            <Text style={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
export default function Sreen1(){
    const data = [
    {
        name: "Ca nấu lẩu, nấu mì mi mini",
        producer: "Devang",
        imgLink: require("../assets/ca_nau_lau.png"),
    },
    {
        name: "1KG KHÔ GÀ BƠ TỎI",
        producer: "Devang",
        imgLink: require("../assets/ga_bo_toi.png"),
    },
    {
        name: "Xe cần cẩu đa năng",
        producer: "Devang",
        imgLink: require("../assets/xa_can_cau.png"),
    },
    {
        name: "Đồ chơi dạng mô hình",
        producer: "Thế giới đồ chơi",
        imgLink: require("../assets/do_choi_dang_mo_hinh.png"),
    },
    {
        name: "Lãnh đạo giản đơn",
        producer: "Minh Long Book",
        imgLink: require("../assets/lanh_dao_gian_don.png"),
    },
    {
        name: "Hiểu lòng con trẻ",
        producer: "Minh Long Book",
        imgLink: require("../assets/hieu_long_con_tre.png"),
    },
    {
        name: "Donal Trump Thiên tài lãnh đạo",
        producer: "Minh Long Book",
        imgLink: require("../assets/trump_1.png"),
    },
    {
        name: "Ca nấu lẩu, nấu mì mi mini",
        producer: "Devang",
        imgLink: require("../assets/ca_nau_lau.png"),
    }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/back.png')} style={{tintColor:'white',marginHorizontal:17}}/>
                <Text style={{color:"white",fontSize:18}}>Chat</Text>
                <Image source={require('../assets/shoping.png')} style={{tintColor:'white',marginHorizontal:17}}/>
            </View>
            <View style={styles.content}>
                <Text style={{marginHorizontal:27}}>Bạn có thắc mắc với sản phẩm vừa xem .Đừng ngại chát với shop!</Text>
            </View>
            <View style={styles.listviews}>
                <FlatList data={data} renderItem={({item , index})=>{
                    return (
                        <FlatListItem item={item} index={index}>

                        </FlatListItem>
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
    container : {
        flex : 1
    },
    header : {
        flex : 10 ,
        flexDirection:"row",
        backgroundColor : '#1BA9FF',
        justifyContent : "space-between",
        alignItems:'center',
        marginVertical : 17
    },
    content : {
        flex : 15,
        backgroundColor : 'white',
        justifyContent : "center",
        alignItems:'center',
    },
    listviews : {
        flex : 65,
        backgroundColor : 'white'
    },
    footer : {
        flex : 10,
        flexDirection:"row",
        backgroundColor : '#1BA9FF',
        justifyContent : "space-between",
        alignItems:'center'
    },
})