import * as React from "react"; 

interface ApplyInfoProps {
    belong: string;
    position: string;
    name: string;
    etc: string;
    onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApplyInfo: React.FC<ApplyInfoProps> = ({
    belong,
    position,
    name,
    etc,
    onChangeFields,
}) => {
    return (
        <>
            <article>
                <div>
                    <input 
                        type="text"
                        placeholder="소속"
                        name="belong"
                        value={belong}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="text"
                        placeholder="직위"
                        name="position"
                        value={position}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="text"
                        placeholder="성명"
                        name="name"
                        value={name}
                        onChange={onChangeFields}
                    />
                    <input 
                        type="text"
                        placeholder="기타"
                        name="etc"
                        value={etc}
                        onChange={onChangeFields}
                    />
                </div>
            </article>
        </>
    );
}

export default ApplyInfo;