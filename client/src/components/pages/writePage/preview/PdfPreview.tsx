import React  from 'react';
import { Page, Document, Text, View } from '@react-pdf/renderer';

interface PdfPreviewProps {
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

const PdfPreview: React.FC<PdfPreviewProps> = ({ values }) => {
    return (
        <Document>
            <Page size="A4">
                <View>
                    <Text>{values.belong}</Text>
                    <Text>{values.position}</Text>
                    <Text>{values.name}</Text>
                </View>
                <View>
                    <Text>Column 1 Row 1</Text>
                    <Text>Column 2 Row 1</Text>
                    <Text>Column 3 Row 1</Text>
                    <Text>Column 4 Row 1</Text>
                </View>
            </Page>
        </Document>
    );
};

export default PdfPreview;