import React, {Component} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Icon} from 'native-base';
import NewInput from '../components/NewInput'
import {required} from '../common/Validations'
// import Pdf from 'react-native-pdf'
import L from '../common/Layout'

class PdfModal extends Component{
  constructor(props){
      super(props);
  }

  close(){
    this.props.callback();
  }

//   createPDF(){
//     let atms = []
//     this.props.atms_list.forEach(atm=>{
//       const {postalcode} = atm.address;
//       if(parseInt(postalcode) >= 2000 && parseInt(postalcode <= 3000) ){
//         atms.push({
//           city: atm.adress.city,
//           adress: `${atm.adress.street} ${atm.adress.housenumber}`,
//           postalcode: atm.address.postalcode
//         })
//       }
//     })
//     let html = <html>
//       {atms.map(atm=>{
//         return <div>
//           <div>
//             <a>City: </a>
//             <a>{atm.city}</a>
//           </div>
//           <div>
//             <a>Address: </a>
//             <a>{atm.adress}</a>
//           </div>
//           <div>
//             <a>Postal code: </a>
//             <a>{atm.postalcode}</a>
//           </div>
//         </div>
//       })}
//     </html>
//     let options={
//       html,
//       fileName: 'ATMs',
//       directory: 'Documents'
//     }
//     let pdf = awaHtmlToPfd.convert(options)
//   }

  render(){
    let {handleSubmit} = this.props;
    const {isOpen} = this.props
    return(
      <Modal
        animationType="slide"
        transparent={false}
        visible={isOpen}
      >
          {/* <Text>PDF</Text>  
        {
          this.props.pdf
          ?<Pdf source={this.props.pdf} />
          :nul
        }
        <TouchableOpacity onPress={this.actionsDownloadPdf}>
            <Text>Download</Text>
        </TouchableOpacity> */}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor:'#ffffff',
        alignSelf:'center',
        marginTop:'35%',
        width:'75%',
        height:L.h(195),
    },
    header:{
        flexDirection:'row',
        backgroundColor:'#C13112',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'flex-end' 
    },
    button:{
        marginTop:L.h(10),
        width:L.h(100),
        height:L.h(35),
        backgroundColor:'#61B8DE',
        borderRadius: 5,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
      },
      ingreso: {
        fontSize: L.h(12),
        fontWeight: '600',
        fontStyle: 'normal',
        letterSpacing: 0.05,
        color: '#EEEEEE',
        textAlign: 'center',
      },
      field:{
          height:L.h(20),
          width:'75%',
          height:L.h(40),
          marginTop:L.h(20)
      }
})

export default PdfModal;