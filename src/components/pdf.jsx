import React from 'react'
import {Page, Text, Image, Document, StyleSheet} from '@react-pdf/renderer';

import ThisImage from '../assets/scoreCard/sc0.jpg';

const styles = StyleSheet.create({});
// {name, marks, schoolName}
const PdfApp = ({name, marks, schoolName}) => {
    return (<Document>
        <Page>
            <Text>Hello1</Text>
            <Image src={ThisImage} />
            {/* <Text>{name}</Text>
            <Text>{marks}</Text>
            <Text>{schoolName}</Text> */}
        </Page>
    </Document>
    )
};

export default PdfApp;