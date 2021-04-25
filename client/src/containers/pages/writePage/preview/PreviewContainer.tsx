import React from 'react';

{/* 왜 임포트 안되니,, */}
import styles from '../../../../styles/pages/writePage/preview/Preview.module.css';
import PdfDocument from '../../../../components/pages/writePage/preview/PdfPreview';

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useMediaQuery } from 'react-responsive';
import OutsideClickHandler from 'react-outside-click-handler';
// import { Page, Document, StyleSheet } from '@react-pdf/renderer';

interface PreviewProps {
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
    onPreviewModal: () => void;
}

const PreviewContainer: React.FC<PreviewProps> = ({
    values,
    onPreviewModal,
}) => {
    // * ====================
    // *  RESPONSIVE
    // * ====================
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });

    return (
        <section className={styles.preview_container__div}>
            {isPc && (
                <OutsideClickHandler onOutsideClick={onPreviewModal}>
                    <div className={styles.preview_block__div}>
                        <PDFViewer width="100%" height="100%">
                            <PdfDocument values={values} />
                        </PDFViewer>
                    </div>
                </OutsideClickHandler>
            )}
        </section>
    );
};

export default PreviewContainer;