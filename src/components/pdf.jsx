import React from 'react'
import {Page, Text, Image, Document, StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({});
// {name, marks, schoolName}
const PdfApp = ({name, marks, schoolName}) => {
    return (<Document>
        <Page>
            {/* <Text>Hello1</Text> */}
            <Text>{name}</Text>
            <Text>{marks}</Text>
            <Text>{schoolName}</Text>
        </Page>
    </Document>
    )
};

export default PdfApp;