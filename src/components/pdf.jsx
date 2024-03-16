import React from 'react'
import {Page, Text, Image, Document, StyleSheet, View} from '@react-pdf/renderer';

import ThisImage from '../assets/scoreCard/ddsc1.png';

const styles = StyleSheet.create({});
// {name, marks, schoolName}
const PdfApp = ({name, marks, schoolName}) => {
    return (
    <Document>
        <Page size={"A4"} dpi={88} style={{ position: 'relative' }}>
            <View>
            <Text style={{ position: 'absolute', top: 0 }}>text</Text>
            <Image src={ThisImage} debug={false} style={{ position: 'absolute', zIndex: -1, top: 0, width: '100%' }}/>   
            </View>
        </Page>
    </Document>
    )
};

export default PdfApp;