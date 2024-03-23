import React from 'react'
import {Font, Page, Text, Image, Document, StyleSheet, View} from '@react-pdf/renderer';

import scoreCard0 from '../assets/scoreCard/sc0.png';
import scoreCard1 from '../assets/scoreCard/sc1.png';
import scoreCard2 from '../assets/scoreCard/sc22.png';
import scoreCard3 from '../assets/scoreCard/sc3.png';
import scoreCard4 from '../assets/scoreCard/sc4.png';
import scoreCard5 from '../assets/scoreCard/sc5.png';
import scoreCard6 from '../assets/scoreCard/sc6.png';
import scoreCard7 from '../assets/scoreCard/sc7.png';
import scoreCard8 from '../assets/scoreCard/sc8.png';
import scoreCard9 from '../assets/scoreCard/sc9.png';
import scoreCard10 from '../assets/scoreCard/sc10.png';
import scoreCard11 from '../assets/scoreCard/sc11.png';
import scoreCard12 from '../assets/scoreCard/sc12.png';
import scoreCard13 from '../assets/scoreCard/sc13.png';
import scoreCard14 from '../assets/scoreCard/sc14.png';
import scoreCard15 from '../assets/scoreCard/sc15.png';
import scoreCard16 from '../assets/scoreCard/sc16.png';
import scoreCard17 from '../assets/scoreCard/sc17.png';
import scoreCard18 from '../assets/scoreCard/sc18.png';
import scoreCard19 from '../assets/scoreCard/sc19.png';
import scoreCard20 from '../assets/scoreCard/sc20.png';

const imgList = [
    scoreCard1,scoreCard2,scoreCard3,scoreCard4,scoreCard5,
    scoreCard6,scoreCard7,scoreCard8,scoreCard9,scoreCard10,
    scoreCard11,scoreCard12,scoreCard13,scoreCard14,scoreCard15,
    scoreCard16,scoreCard17,scoreCard18,scoreCard19,scoreCard20,
];

import geoFontBold from '../assets/fonts/Geologica-Bold.ttf';

Font.register({
    family: 'GeologicaFamily',
    // format: 'truetype',
    src: geoFontBold,
});

const styles = StyleSheet.create({
    'Page': {
        position: 'relative',
    },
    'Text': {
        'StudentName': {
            position: 'absolute',
            top: 163, 
            left: 185,
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: 'GeologicaFamily'
        },
        'StudentInstitute': {
            position: 'absolute',
            top: 188, 
            left: 124,
            fontSize: 11,
            fontWeight: 'bold',
            fontFamily: 'GeologicaFamily'
        },
        'StudentMarks': {
            position: 'absolute',
            top: 188, 
            left: 575,
            fontSize: 11,
            fontWeight: 'bold',
            fontFamily: 'GeologicaFamily'
        },
    },
    'Image': {
        'result': {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            width: '100%',
        },
        'ordinary': {
            position: 'relative',
            zIndex: -1,
            top: 0,
            width: '100%',
            height: '100%',            
        }
    },
});


const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength-3) + '...';
    }
};

const PdfApp = ({name, marks, schoolName}) => {

    schoolName = truncateString(schoolName, 30);

    return (
    <Document>
        <Page size={"A4"} dpi={88} style={styles.Page}>
            <View>
                <Text style={styles.Text.StudentName}>{name}</Text>
                <Text style={styles.Text.StudentInstitute}>{schoolName}</Text>
                <Text style={styles.Text.StudentMarks}>{marks}</Text>
                <Image src={scoreCard0} debug={false} style={styles.Image.result}/>   
            </View>
        </Page>
        {imgList.map((image, index) => {
            return (
                <Page key={index} size={"A4"} dpi={88} style={styles.Page}>
                    <View>
                        <Image src={image} style={styles.Image.ordinary} />
                    </View>
                </Page>
            )
        })}
    </Document>
    )
};

export default PdfApp;