import React from 'react';

{/* 왜 임포트 안되니,, */}
import PdfPreview from '../../../../components/pages/writePage/preview/PdfPreview';
import { useMediaQuery } from 'react-responsive';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

import { PDFViewer, PDFDownloadLink, StyleSheet, Page } from '@react-pdf/renderer';
import OutsideClickHandler from 'react-outside-click-handler';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        preview_container__div: {
            background:'#7a859954',
            positions: 'fixed',
            height: '100vh',
            width: '100%',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        preview_block__div: {
            positions: 'fixed',
            background: 'white',
            width: '800px',
            height: '900px',
            borderRadius: '10px',
            boxShadow: '-1px 2px 4px rgb(50 50 93 / 20%)',
        },
        preview_pdf_download__button: {
            positions: 'fixed',
            right: '0',
            bottom: '10p',
            fontSize: '4vw',
            borderRadius: '4px',
            padding: '10px 20px',
            background: 'var(--mainGreen)',
            border: 'none',
            color: 'white',
            fontWeight: 700,
            cursor: 'pointer',
            outline: 'none',
        }
    }));

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
    const isPc = useMediaQuery({
        query: '(min-width:1024px)',
    });
    const isMobile = useMediaQuery({
        query: '(max-width:1023px)',
    });
    // * ====================
    // *  RESPONSIVE
    // * ====================
    const classes = useStyles();
    return (
        <section className={classes.preview_container__div}>
            {isPc && (
                <OutsideClickHandler onOutsideClick={onPreviewModal}>
                    <div className={classes.preview_block__div}>
                    <PDFViewer width="100%" height="100%">
                        <PdfPreview values={values} />
                    </PDFViewer>
                    </div>
                </OutsideClickHandler>
            )}
            {isMobile && (
                <OutsideClickHandler onOutsideClick={onPreviewModal}>
                    <PDFDownloadLink
                        document={<PdfPreview values={values} />}
                        fileName="somename.pdf"
                    >
                    {({ loading }) =>
                        loading ? (
                        <button className={classes.preview_pdf_download__button}>
                            렌더링중
                        </button>
                        ) : (
                        <div>
                            <button className={classes.preview_pdf_download__button}>
                                다운로드
                            </button>
                        </div>
                        )
                    }
                    </PDFDownloadLink>
                </OutsideClickHandler>
            )}
        </section>
    );
};

export default PreviewContainer;