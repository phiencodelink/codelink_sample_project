import { connect } from 'react-redux';
import { useEffect } from 'react'

import { getAdvice } from 'store/actions'
import Advice from 'components/Advice/Advice';


function AdviceContainer(props: any) {
    const { advices, error, status, getAdvice } = props;
    const isLoading = status === 'loading';
    const isSuccess = status === 'success';

    const handleGetAdvice = () => {
        getAdvice();
    }

    useEffect(() => {
    }, [status])

    const renderAdvice = () => advices.map((item: AdviceInterface) => <Advice advice={item.slip.advice} key={item.slip.id} />)

    return (
        <>
            <div className="flex items-center flex-col w-96 h-32 text-white mt-72">
                {isLoading ? 'Loading...' : isSuccess ? renderAdvice() : null}
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleGetAdvice}
                disabled={isLoading}
            >
                Get Advice
            </button>
        </>
    )
}

const mapStateToProps = (state: AdviceState) => ({
    advices: state.advices,
    error: state.error,
    status: state.status,
})

export default connect(mapStateToProps, { getAdvice })(AdviceContainer);
