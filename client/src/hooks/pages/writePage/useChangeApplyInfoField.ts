import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/writeChange/applyInfo/actions';
import { ApplyInfoState } from '../../../modules/writeChange/applyInfo/types';

function useChangeApplyInfoField() : {
    applyContent: string,
    resName: string,
    resJumin: string,
    relation: string,
    applyAmount: number, 
    onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
    const dispatch = useDispatch();
    const {
        applyContent,
        resName,
        resJumin,
        relation,
        applyAmount,
    } = useSelector(({ applyInfoField }: {applyInfoField: ApplyInfoState}) => ({
        applyContent: applyInfoField.applyInfo.applyContent,
        resName: applyInfoField.applyInfo.respondent.resName,
        resJumin: applyInfoField.applyInfo.respondent.resJumin,
        relation: applyInfoField.applyInfo.respondent.relation,
        applyAmount: applyInfoField.applyInfo.applyAmount,
    }));

    const onChangeField = <T>(location: T, value: T): void => {
        dispatch(actions.InfoChangeField({ key: location, value: value }));
    };

    const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;

        onChangeField<string>(name, value);
    };
    return {
        applyContent,
        resName,
        resJumin,
        relation,
        applyAmount,
        onChangeFields,
    };
}

export default useChangeApplyInfoField;