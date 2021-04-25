import React from 'react';

import Content from './content/Content';

import { Page, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      padding: 60,
    },
    container: {
      flex: 1,
      flexDirection: 'row',
    },
  });

interface PdfDocumentProps {
    values: {
        belong: string;
        position: string;
        name: string;
        etc: string;
        fileName: Array<string | null>;
        applyContent: string;
        resName: string;
        resJumin: string;
        relation: string;
        applyAmount: number;
    };
}

const PdfDocument: React.FC<PdfDocumentProps> = ({ values }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* 헤더 넣어야 하나요? */}
                {/* <Header values={values} /> */}
                <Content values={values} />
            </Page>
        </Document>
    )
}

export default PdfDocument;