import React from 'react'
import {Font, Page, Text, Image, Document, StyleSheet, View} from '@react-pdf/renderer';

import ThisImage from '../assets/scoreCard/ddsc1.png';
import geoFontBold from '../assets/fonts/Geologica-Bold.ttf';

Font.register({
    family: 'GeologicaFamily',
    format: 'tryetype',
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
});


const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.slice(0, maxLength-3) + '...';
    }
};

const PdfApp = ({name, marks, schoolName}) => {

    schoolName = truncateString(schoolName, 26);

    return (
    <Document>
        <Page size={"A4"} dpi={88} style={styles.Page}>
            <View>
                <Text style={styles.Text.StudentName}>{name}</Text>
                <Text style={styles.Text.StudentInstitute}>{schoolName}</Text>
                <Text style={styles.Text.StudentMarks}>{marks}</Text>
                <Image src={ThisImage} debug={false} style={{ position: 'absolute', zIndex: -1, top: 0, width: '100%' }}/>   
            </View>
        </Page>
    </Document>
    )
};

export default PdfApp;