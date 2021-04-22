import * as React from "react"; 

interface ApplyInfoProps {
    applyContent: string;
    resName: string;
    resJumin: string;
    relation: string;
    applyAmount: number;
    onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplyInfo: React.FC<ApplyInfoProps> = ({
    applyContent,
    resName,
    resJumin,
    relation,
    applyAmount,
    onChangeFields,
}) => {
    return (
        <>
            <article>
                <div>
                    <input 
                        type="text"
                        placeholder="내용"
                        name="applyContent"
                        value={applyContent}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="text"
                        placeholder="성명"
                        name="resName"
                        value={resName}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="text"
                        placeholder="주민등록번호"
                        name="resJumin"
                        value={resJumin}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="text"
                        placeholder="신청인과의 관계"
                        name="relation"
                        value={relation}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="number"
                        placeholder="신청 금액"
                        name="applyAmount"
                        value={applyAmount}
                        onChange={onChangeFields}
                    />
                </div>
            </article>
        </>
    );
}

export default ApplyInfo;