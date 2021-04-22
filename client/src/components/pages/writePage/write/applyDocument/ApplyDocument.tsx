import * as React from "react"; 

interface ApplyDocumentProps {
    fileName: Array<string | null>,
    onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplyDocument: React.FC<ApplyDocumentProps> = ({
    fileName,
    onChangeFields,
}) => {
    return (
        <>
            <article>
                <div>
                    <input
                        type="file"
                        placeholder="파일첨부"
                        name="fileName"
                        onChange={onChangeFields}
                    />
                </div>
            </article>
        </>
    );
}

export default ApplyDocument;