import React from 'react';

{/* component import */ }
import RightPreview from '../../../../components/pages/writePage/rightPreview/RightPreview';
{/* hook import */ }
import useLoadPreviewValues from '../../../../hooks/pages/writePage/useLoadPreviewValues';

function RightPreviewContainer (
) {
    const values = useLoadPreviewValues();
    return (
        <RightPreview values={values} />
    )
}

export default RightPreviewContainer;